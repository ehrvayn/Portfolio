import profilePic from "../../assets/img/profile.jpg";
import { useDarkMode } from "../../context/DarkmodeProvider";

function Container1() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`h-[95vh] w-full flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-[#111111] text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="flex items-center sm:mt-[-20px] mt-[-10px] w-full max-w-5xl mx-auto opacity-80">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500" />
        <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
          EHRVAYN RAYVEN // PORTFOLIO 2026
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500" />
      </div>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="w-full max-w-7xl items-between">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/70 to-orange-500/40 rounded-full blur opacity-100 group-hover:opacity-75 transition-opacity"></div>
                <img
                  src={profilePic}
                  alt="Profile"
                  className="relative h-56 sm:h-64 w-56 sm:w-64 md:h-80 md:w-80 lg:h-100 lg:w-100 object-cover rounded-full border-gray-700 shadow-2xl"
                />
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start w-full sm:flex-1 gap-4 sm:gap-6">
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

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center sm:text-left leading-tight">
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
                Full Stack & Mobile Developer
              </p>

              <div
                className={`flex items-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <i className="bi bi-geo-alt text-xs sm:text-sm"></i>
                <span>Naga City, Camarines Sur, Philippines</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-4 sm:pt-6">
                <a
                  href="Resume.pdf"
                  target="_blank"
                  className={`px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all hover:scale-105 ${
                    darkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  GET RESUME
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=rjmomong@gmail.com"
                  target="_blank"
                  className={`px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase border transition-all hover:scale-105 ${
                    darkMode
                      ? "border-white/30 text-white hover:bg-white/5"
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
