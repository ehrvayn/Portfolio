import { useState, useEffect, useRef } from "react";
import { useDarkMode } from "../../context/DarkmodeProvider";

import idle from "../../assets/vid/idle.mp4";
import waving from "../../assets/vid/waving.mp4";
import laughing from "../../assets/vid/laughing.mp4";
import typing from "../../assets/vid/typing.mp4";
import confused from "../../assets/vid/confused.mp4";
import surprise from "../../assets/vid/surprise.mp4";

function Avatar() {
  const { darkMode } = useDarkMode();
  const [current, setCurrent] = useState("idle");
  const [active, setActive] = useState(0); // which video element is "on top"
  const videoRefs = [useRef(null), useRef(null)];
  const clips = { idle, waving, laughing, typing, confused, surprise };

  const messages = {
    idle: "zzz... I'm so bored😴",
    confused: "hello...? I wonder what they're up to 😐",
    surprise: "Woah! they're clicking something! 😮",
    laughing: "HAHAHAHA! stop tickling me 😂",
    typing: "Woahh😮! they're typing! I'll type too...",
    waving: "hey there! I'm so happy to see you!👋",
  };

  useEffect(() => {
    Object.values(clips).forEach((src) => {
      const v = document.createElement("video");
      v.src = src;
      v.preload = "auto";
    });
  }, []);

  const playInstant = (name) => {
    const nextActive = 1 - active;
    const nextVideo = videoRefs[nextActive].current;
    const currentVideo = videoRefs[active].current;
    if (!nextVideo || !currentVideo) return;

    nextVideo.src = clips[name];
    nextVideo.load();

    nextVideo.oncanplay = () => {
      nextVideo.play().catch(() => {});
      setActive(nextActive);
      setCurrent(name);
      nextVideo.oncanplay = null;

      nextVideo.onended = () => {
        const next = name === "idle" ? "confused" : "idle";
        playInstant(next);
      };
    };
  };

  useEffect(() => {
    const video = videoRefs[active].current;
    if (!video) return;
    video.onended = () => {
      const next = current === "idle" ? "confused" : "idle";
      playInstant(next);
    };
  }, [active, current]);

  useEffect(() => {
    const video = videoRefs[0].current;
    if (!video) return;
    video.src = clips["idle"];
    video.play().catch(() => {});
    video.onended = () => playInstant("confused");
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const container = videoRefs[0].current?.parentElement?.parentElement;
      if (container && !container.contains(e.target)) {
        playInstant("surprise");
      }
    };
    const onKey = () => playInstant("typing");
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [active, current]);

  const bgColor = darkMode ? "#4e4e4e" : "white";
  const borderColor = darkMode ? "transparent" : "#e5e7eb";

  return (
    <div
      className="relative rounded-lg flex flex-col items-center cursor-pointer select-none"
      onClick={(e) => {
        e.stopPropagation();
        playInstant("laughing");
      }}
      onMouseEnter={() => playInstant("waving")}
      onMouseLeave={() => playInstant("idle")}
    >
      <div style={{ width: 200, height: 220, position: "relative" }}>
        {[0, 1].map((i) => (
          <video
            key={i}
            ref={videoRefs[i]}
            muted
            playsInline
            preload="auto"
            className="rounded-xl object-cover"
            style={{
              width: 200,
              height: 220,
              position: "absolute",
              top: 0,
              left: 0,
              opacity: active === i ? 1 : 0,
              transition: "opacity 0.1s ease-in-out",
            }}
          />
        ))}
      </div>

      <div className="absolute z-10" style={{ bottom: "-55px", left: "50%", transform: "translateX(-50%)" }}>
        <div
          className="relative text-xs px-4 py-2 rounded-2xl shadow-md text-center"
          style={{
            background: bgColor,
            border: `1px solid ${borderColor}`,
            color: darkMode ? "white" : "black",
            width: "200px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          <div style={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: `10px solid ${bgColor}`,
          }} />
          {!darkMode && (
            <div style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "7px solid transparent",
              borderBottom: `11px solid ${borderColor}`,
              zIndex: -1,
            }} />
          )}
          {messages[current]}
        </div>
      </div>
    </div>
  );
}

export default Avatar;