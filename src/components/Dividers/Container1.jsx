import ProfilePic from "../../assets/img/originalProfilePicture.png";
import Halftone from "../Halftone";
import { useDarkMode } from "../../context/DarkmodeProvider";
import AnimeBlack from "../../assets/vid/AnimeDark.mp4";
import AnimeWhite from "../../assets/vid/AnimeLight.mp4";
import { useRef, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Container1() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const videoRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const [isHovered, setIshovered] = useState(false);
  const handleMouseEnter = () => {
    if (videoRef.current) {
      setIshovered(true);
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIshovered(false);
      videoRef.current.currentTime = 0;
    }
  };

  const handleThemeToggle = () => {
    const btn = toggleBtnRef.current;

    if (!btn || !document.startViewTransition) {
      toggleDarkMode();
      return;
    }

    const rect = btn.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    document.documentElement.style.setProperty("--ripple-x", `${x}px`);
    document.documentElement.style.setProperty("--ripple-y", `${y}px`);

    const transition = document.startViewTransition(() => {
      toggleDarkMode();
    });

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      document.documentElement.style.setProperty(
        "--ripple-radius",
        `${endRadius}px`,
      );
    });
  };

  return (
    <main className="flex items-center justify-center w-full">
      <div className="flex flex-col md:flex-row md:gap-5 items-center w-full">
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
          <div
            className={`relative group p-2 overflow-hidden cursor-pointer rounded-md`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Halftone
              src={ProfilePic}
              cell={9}
              gamma={10}
              levels={[0, 0.4]}
              dotScale={0.9}
              intensity={0.3}
              photoOpacity={1}
              background="transparent"
              dotColor={"rgba(255,255,255,0.80)"}
              className={`relative h-36 w-36 sm:h-30 sm:w-30 md:h-40 md:w-40 lg:h-50 lg:w-50 xl:h-60 xl:w-60 border transition-opacity duration-300 group-hover:opacity-0 ${isHovered && "border-transparent"} ${
                darkMode ? " border-gray-500/40" : " border-gray-500/40 "
              }`}
            />

            <video
              ref={videoRef}
              src={darkMode ? AnimeBlack : AnimeWhite}
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full sm:flex-1 gap-2 sm:gap-3">
          <h1 className="font-display font-light text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-center sm:text-left leading-tight">
            Ehrvayn Rayven Olivera
          </h1>
          <p
            className={`text-[9px] sm:text-[10px] md:text-[11px] lg:text-[15px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] ${
              darkMode ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Aspiring Full Stack Developer
          </p>

          <div
            className={`flex items-center gap-1 text-[10px] sm:text-[11px] md:text-[14px] ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FaLocationDot />
            <span>Naga City, Camarines Sur, Philippines</span>
          </div>

          <div className="flex flex-row gap-3 w-[70%] sm:w-max pt-3 sm:pt-4 items-center sm:items-start">
            <a
              href="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto px-5 py-2.5 text-center text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg ${
                darkMode
                  ? "bg-gray-200 text-gray-900 hover:bg-gray-100"
                  : "bg-gray-900 text-gray-100 hover:bg-gray-700"
              }`}
            >
              GET CV
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=ehrvayn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto px-5 py-2.5 text-center text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase border transition-all duration-300 hover:scale-105 active:scale-95 ${
                darkMode
                  ? "border-gray-500 text-gray-200 hover:bg-gray-500/15"
                  : "border-gray-400 text-gray-800 hover:bg-gray-400/15"
              }`}
            >
              EMAIL ME
            </a>
          </div>
        </div>
        <div className="pt-2 md:self-start self-center lg:pt-10">
          <button
            ref={toggleBtnRef}
            onClick={handleThemeToggle}
            aria-label="Toggle Theme"
            className={`relative w-10 h-5 sm:w-11 sm:h-6 md:w-12 md:h-6 lg:w-14 lg:h-7 xl:w-16 xl:h-8 2xl:w-[72px] 2xl:h-9 cursor-pointer rounded-full flex items-center px-1 shadow-inner transition-colors ${
              darkMode ? "bg-zinc-800" : "bg-zinc-200"
            }`}
          >
            <div
              className={`w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 lg:w-[22px] lg:h-[22px] xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-full shadow-md transform flex items-center justify-center text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] transition-transform duration-300 ${
                darkMode
                  ? "translate-x-4 sm:translate-x-[18px] md:translate-x-5 lg:translate-x-[26px] xl:translate-x-8 2xl:translate-x-9 bg-zinc-900"
                  : "translate-x-0 bg-white"
              }`}
            >
              {darkMode ? <IoMoon /> : <IoSunny />}
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Container1;
