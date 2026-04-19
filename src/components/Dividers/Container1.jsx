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
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500/50" />
        <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
          EHRVAYN RAYVEN // PORTFOLIO 2026
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500/50" />
      </div>
      <main className="flex-1 flex flex-col justify-center items-center px-6 text-center max-w-5xl mx-auto w-full">
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/70 to-orange-500/40 rounded-full blur opacity-25 group-hover:opacity-50"></div>
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-white/10 shadow-2xl"
          />
        </div>

        <div className="space-y-4">
          <div className="flex inline-flex items-center gap-2 mb-6 group cursor-default">
            <span className="h-[2px] w-4 bg-orange-500/70 group-hover:w-8"></span>
            <span
              className={`text-xs italic font-light tracking-wide ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Let's build something{" "}
              <span className="text-orange-500/70 font-medium hover:underline">
                remarkable
              </span>{" "}
              together.
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Ehrvayn Rayven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500/70 to-orange-500/40">
              Olivera
            </span>
          </h1>

          <p
            className={`text-[13px] lg:text-[15px] font-mono uppercase tracking-[0.3em] ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Full Stack & Mobile Developer
          </p>

          <div
            className={`flex items-center justify-center gap-2 text-[13px] lg:text-[15px] ${darkMode ? "text-gray-500" : "text-gray-400"}`}
          >
            <i className="bi bi-geo-alt"></i>
            <span>Naga City, Camarines Sur, Philippines</span>
          </div>
        </div>

        <div className="relative flex mt-10 flex-col sm:flex-row items-center gap-0 group">
          <a
            href="Resume.pdf"
            target="_blank"
            className={`relative z-20 px-10 py-5 text-sm font-bold tracking-widest uppercase hover:pr-16 group/btn1 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Get Resume
            <span className="absolute right-6 opacity-0 group-hover/btn1:opacity-100">
              →
            </span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=rjmomong@gmail.com"
            target="_blank"
            className={`relative z-10 px-10 py-5 sm:w-50 w-full text-sm font-bold tracking-widest uppercase border -ml-[1px] hover:px-14 ${
              darkMode
                ? "border-white/20 hover:bg-white/5"
                : "border-black/20 hover:bg-black/5"
            }`}
          >
            Email me
          </a>

          <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
            <span className="text-[10px] font-mono rotate-90 block">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>

        {/* Theme Toggle - Positioned within the main flow below the buttons */}
        <div className="py-10 flex justify-center items-center">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Theme"
            className={`relative w-14 h-7 cursor-pointer rounded-full flex items-center px-1 shadow-inner ${
              darkMode ? "bg-zinc-800 border-white/10" : "bg-zinc-200"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full shadow-md transform flex items-center justify-center text-[10px] ${
                darkMode
                  ? "translate-x-7 bg-zinc-900"
                  : "translate-x-0 bg-white"
              }`}
            >
              {darkMode ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
      </main>

      <footer className="w-full pb-2 px-6">
        <div className="flex items-center w-full max-w-5xl mx-auto opacity-80">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500/50" />
          <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
            SOLVING THROUGH CODE
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500/50" />
        </div>
      </footer>
    </div>
  );
}

export default Container1;
