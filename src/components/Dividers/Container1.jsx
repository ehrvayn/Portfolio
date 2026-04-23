import LightprofilePic from "../../assets/img/profile.jpg";
import DarkprofilePic from "../../assets/img/DarkProfile.png";
import { useDarkMode } from "../../context/DarkmodeProvider";
import AnimeBlack from "../../assets/vid/AnimeBlack.mp4";
import AnimeWhite from "../../assets/vid/AnimeWhite.mp4";
import { useRef } from "react";

function Container1() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`h-[95vh] w-full flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center sm:mt-[-20px] mt-[-10px] w-full max-w-5xl mx-auto opacity-80">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500" />
        <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
          EHRVAYN RAYVEN // PORTFOLIO 2026
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500" />
      </div>

      <main className="flex-1 flex items-center  justify-center px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="w-full max-w-7xl  justify-center flex items-between">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
              <div className="relative group p-2">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/70 to-orange-500/40 rounded-md blur opacity-50 group-hover:opacity-0 transition-opacity"></div>
                <div
                  className="relative overflow-hidden rounded-md cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={darkMode ? DarkprofilePic : LightprofilePic}
                    alt="Profile"
                    className="relative h-56 w-56 sm:h-64 sm:w-69 md:h-80 md:w-55 lg:h-100 lg:w-75 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
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
            </div>

            <div className="flex flex-col items-center md:items-start w-full sm:flex-1 gap-2 sm:gap-3">
              <div className="flex items-center gap-2 group cursor-default">
                <span className="h-[2px] w-3 sm:w-4 bg-orange-500/70"></span>
                <span
                  className={`text-[11px] sm:text-[12px] italic font-light tracking-wide ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Let's build something{" "}
                  <span className="text-orange-500/70 font-medium">
                    remarkable
                  </span>{" "}
                  together.
                </span>
              </div>

              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center sm:text-left leading-tight">
                Ehrvayn Rayven{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500/70 to-orange-500/40">
                  Olivera
                </span>
              </h1>

              <p
                className={`text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Aspiring Full Stack Web & Mobile Developer
              </p>

              <div
                className={`flex items-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <i className="bi bi-geo-alt text-xs sm:text-sm"></i>
                <span>Naga City, Camarines Sur, Philippines</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-max pt-6 sm:pt-8 items-center sm:items-start">
                <a
                  href="Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto px-10 py-4 text-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-zinc-800"
                  }`}
                >
                  GET RESUME
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=rjmomong@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto px-10 py-4 text-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border transition-all duration-300 hover:scale-105 active:scale-95 ${
                    darkMode
                      ? "border-white/30 text-white hover:bg-white/10"
                      : "border-black/30 text-black hover:bg-black/5"
                  }`}
                >
                  EMAIL ME
                </a>
              </div>

              <div className="pt-4 sm:pt-6">
                <button
                  onClick={toggleDarkMode}
                  aria-label="Toggle Theme"
                  className={`relative w-14 h-7 cursor-pointer rounded-full flex items-center px-1 shadow-inner transition-colors ${
                    darkMode ? "bg-zinc-800" : "bg-zinc-200"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full shadow-md transform flex items-center justify-center text-[11px] transition-transform duration-300 ${
                      darkMode
                        ? "translate-x-7 bg-zinc-900"
                        : "translate-x-0 bg-white"
                    }`}
                  >
                    {darkMode ? "🌙" : "☀️"}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full pb-2 px-6">
        <div className="flex items-center w-full max-w-5xl mx-auto opacity-80">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500" />
          <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
            SOLVING THROUGH CODE
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500" />
        </div>
      </footer>
    </div>
  );
}

export default Container1;
