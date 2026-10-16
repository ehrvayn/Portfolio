import { useEffect, useRef } from "react";

/**
 * Renders an image as a halftone (dot screen) pattern on a <canvas>.
 *
 * A static CSS dot pattern can't do this — dot size has to follow the
 * brightness of the photo underneath, which means reading pixels.
 *
 * Light mode: dark dots on a light background (photo shadows become dots).
 * Dark mode:  light dots on a black background (photo highlights become dots),
 *             so the face still reads against the dark page.
 *
 * The canvas mirrors object-cover, so it can replace an <img> of any size.
 */
export default function Halftone({
  src,
  darkMode = false,
  cell = 4,
  gamma = 1.4,
  levels = [0, 1],
  dotScale = 0.55,
  intensity = 1,
  photoOpacity = 0,
  keyWhite = 238,
  mono = false,
  monoThreshold = 128,
  dotColor,
  background,
  className = "",
  onError,
}) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const dot = dotColor ?? (darkMode ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.88)");
  const bg = background ?? (darkMode ? "#000000" : "#ffffff");
  const [blackPoint, whitePoint] = levels;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !src) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    imageRef.current = image;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (!width || !height) return;
      if (!image.naturalWidth) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Mirror object-cover: fill the box, crop the overflow, center it.
      const boxRatio = width / height;
      const imgRatio = image.naturalWidth / image.naturalHeight;
      let sx = 0;
      let sy = 0;
      let sw = image.naturalWidth;
      let sh = image.naturalHeight;
      if (imgRatio > boxRatio) {
        sw = sh * boxRatio;
        sx = (image.naturalWidth - sw) / 2;
      } else {
        sh = sw / boxRatio;
        sy = (image.naturalHeight - sh) / 2;
      }

      // Downsample to one pixel per dot cell, then read the whole grid in one
      // pass — far cheaper than a getImageData call per dot.
      const cols = Math.max(1, Math.ceil(width / cell));
      const rows = Math.max(1, Math.ceil(height / cell));
      const sample = document.createElement("canvas");
      sample.width = cols;
      sample.height = rows;
      const sctx = sample.getContext("2d", { willReadFrequently: true });
      sctx.drawImage(image, sx, sy, sw, sh, 0, 0, cols, rows);
      const data = sctx.getImageData(0, 0, cols, rows).data;

      // dotScale < 0.5 leaves visible gaps between dots, so the photo still
      // reads as a photo instead of a solid fill.
      const maxRadius = cell * dotScale;

      // The photo can sit underneath the dots so facial detail survives. Its
      // flat studio backdrop is keyed out first, otherwise it would read as an
      // opaque block instead of a transparent background.
      if (photoOpacity > 0) {
        const keyed = document.createElement("canvas");
        keyed.width = Math.round(width * dpr);
        keyed.height = Math.round(height * dpr);
        const kctx = keyed.getContext("2d");
        kctx.drawImage(image, sx, sy, sw, sh, 0, 0, keyed.width, keyed.height);

        const pixels = kctx.getImageData(0, 0, keyed.width, keyed.height);
        const px = pixels.data;
        for (let p = 0; p < px.length; p += 4) {
          // Near-white AND desaturated is backdrop, not skin. Skin keeps a much
          // lower blue channel, so this leaves highlights on the face intact.
          const min = Math.min(px[p], px[p + 1], px[p + 2]);
          const max = Math.max(px[p], px[p + 1], px[p + 2]);
          if (min >= keyWhite && max - min < 12) px[p + 3] = 0;
        }
        kctx.putImageData(pixels, 0, 0);

        ctx.globalAlpha = photoOpacity;
        ctx.drawImage(keyed, 0, 0, width, height);
        ctx.globalAlpha = 1;
      }

      ctx.globalAlpha = intensity;
      ctx.fillStyle = dot;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = (row * cols + col) * 4;
          const alpha = data[i + 3] / 255;
          if (alpha === 0) continue;

          // Rec. 709 luma, then linearised so midtones get more dots.
          const luma =
            (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;

          // Stretch the usable tonal range. A low-key photo on a black
          // background has almost no range to work with without this.
          const span = Math.max(0.01, whitePoint - blackPoint);
          const level = Math.min(1, Math.max(0, (luma - blackPoint) / span));

          const weight = darkMode ? level : 1 - level;
          const radius = maxRadius * Math.pow(weight * alpha, gamma);
          if (radius < 0.15) continue;

          const x = (col + 0.5) * cell;
          const y = (row + 0.5) * cell;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      // Optional 1-bit pass: snap every pixel to pure black or pure white so
      // the dots and the areas they sit on share one hard palette. Alpha is
      // left untouched, so a transparent backdrop stays transparent.
      if (mono) {
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const px = frame.data;
        for (let p = 0; p < px.length; p += 4) {
          if (px[p + 3] === 0) continue;
          const luma =
            (0.2126 * px[p] + 0.7152 * px[p + 1] + 0.0722 * px[p + 2]) / 255;
          const value = luma * 255 >= monoThreshold ? 255 : 0;
          px[p] = value;
          px[p + 1] = value;
          px[p + 2] = value;
        }
        ctx.putImageData(frame, 0, 0);
      }
    };

    const onErrorRef = { current: onError };
    const onLoad = () => draw();
    const onImgError = (event) => onErrorRef.current?.(event);

    image.onload = onLoad;
    image.onerror = onImgError;
    image.src = src;

    const observer = new ResizeObserver(draw);
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      image.onload = null;
      image.onerror = null;
    };
  }, [src, darkMode, cell, gamma, dotScale, intensity, photoOpacity, keyWhite, mono, monoThreshold, blackPoint, whitePoint, dot, bg]);

  return <canvas ref={canvasRef} className={`block ${className}`} aria-hidden="true" />;
}