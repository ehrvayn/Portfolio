import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useDarkMode } from "../../context/DarkmodeProvider";

import idle from "../../assets/vid/idle.mp4";
import waving from "../../assets/vid/waving.mp4";
import laughing from "../../assets/vid/laughing.mp4";
import typing from "../../assets/vid/typing.mp4";
import confused from "../../assets/vid/confused.mp4";
import surprise from "../../assets/vid/surprise.mp4";

function Avatar() {
  const { darkMode } = useDarkMode();
  const videoRef = useRef(null);
  const [current, setCurrent] = useState("idle");
  const clips = { idle, waving, laughing, typing, confused, surprise };

  const messages = {
    idle: "zzz... I'm so bored😴",
    confused: "hello...? I wonder what they're up to 😐",
    surprise: "Woah! they're clicking something! 😮",
    laughing: "HAHAHAHA! stop tickling me 😂",
    typing: "Woahh😮! they're typing! I'll type too...",
    waving: "hey there! I'm so happy to see you!👋",
  };

  const playInstant = (name) => {
    const video = videoRef.current;
    if (!video) return;
    video.onended = null;
    setCurrent(name);
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.onended = () => {
      const next = current === "idle" ? "confused" : "idle";
      playInstant(next);
    };
  }, [current]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const container = videoRef.current?.parentElement;
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
  }, []);

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
      <video
        ref={videoRef}
        key={current}
        src={clips[current]}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="rounded-xl object-cover"
        style={{ width: 200, height: 220 }}
      />

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