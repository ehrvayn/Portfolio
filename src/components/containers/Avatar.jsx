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

  const playInstant = (name) => {
    const video = videoRef.current;
    if (!video) return;

    video.onended = null;
    setCurrent(name);
    
    // Manual trigger to ensure it plays even if the browser tried to throttle it
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented or video was throttled
      });
    }
  };

  // useLayoutEffect runs BEFORE the browser paints, making the swap instant
  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.onended = () => {
      // Direct toggle for the loop
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

  return (
    <div
      className={`${darkMode ? "bg-[#2e2e2e] border border-[#3e3e3e]" : "bg-gray-50 border border-gray-100 shadow-sm"} rounded-lg flex flex-col items-center gap-2 cursor-pointer select-none`}
      onClick={(e) => {
        e.stopPropagation();
        playInstant("laughing");
      }}
      onMouseEnter={() => playInstant("waving")}
      onMouseLeave={() => playInstant("idle")}
    >
      <video
        ref={videoRef}
        key={current} // Adding a key forces React to treat each swap as a fresh element
        src={clips[current]}
        autoPlay
        muted
        playsInline
        preload="auto" // Tells the browser to keep the data ready
        className="rounded-xl object-cover"
        style={{ width: 200, height: 220 }}
      />
      <p className={`text-[10px] font-mono p-2 ${darkMode ? "text-white" : "text-black"}`}>
        {current === "idle" && "zzz... I'm so bored😴"}
        {current === "confused" && "hello...? I wonder what they're up to 😐"}
        {current === "surprise" && "Woah! they're cliking something! 😮"}
        {current === "laughing" && "HAHAHAHA! stop tickling me 😂"}
        {current === "typing" && "Woahh😮! they're typing! I'll type too..."}
        {current === "waving" && "hey there! I'm so happy to see you!👋"}
      </p>
    </div>
  );
}

export default Avatar;