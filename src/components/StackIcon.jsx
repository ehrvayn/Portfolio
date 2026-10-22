import { useMemo } from "react";

const iconFiles = import.meta.glob("../assets/icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

function loadIcon(name) {
  const raw = iconFiles[`../assets/icons/${name}.svg`];
  if (typeof raw !== "string") return null;

  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 24 24";
  const inner = raw
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .trim();

  if (!inner) return null;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="currentColor" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">${inner}</svg>`;
}

function StackIcon({ name, className = "" }) {
  const svg = useMemo(() => loadIcon(name), [name]);

  if (!svg) return null;

  return (
    <span
      aria-hidden="true"
      className={`block w-full h-full [&>svg]:block [&>svg]:w-full [&>svg]:h-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default StackIcon;
