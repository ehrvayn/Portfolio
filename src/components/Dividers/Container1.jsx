import profilePic from "../../assets/img/profile.jpg";
import { useDarkMode } from "../../context/DarkmodeProvider";

function Container1() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-5 px-4 md:px-10 py-5">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 w-full">
        <img
          src={profilePic}
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full border-2 border-gray-300"
        />
        <div className="flex flex-col gap-1 text-center md:text-left">
          <strong className="text-lg sm:text-xl md:text-1xl lg:text-2xl flex gap-1 items-center justify-center md:justify-start">
            Ehrvayn Rayven P. Olivera
            <i className="bi bi-patch-check-fill lg:text-sm text-[10px] text-blue-500 translate-y-[1px] lg:translate-y-[2px]"></i>
          </strong>
          <span
            className={`lg:text-sm text-[12px] ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            <i className="bi bi-geo-alt-fill"></i> Naga City, Camarines Sur,
            Philippines
          </span>
          <div className="flex items-center gap-3 justify-center md:justify-start mt-0.5">
            <div className="w-[5px] h-4 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 hidden md:block ml-1" />
            <span
              className={`${darkMode ? "text-gray-300" : "text-black"} text-[11px] tracking-[0.20em] uppercase font-mono to-gray-500 text-center md:text-left`}
            >
              Aspiring Full Stack Web Developer | Mobile Developer
            </span>
          </div>

          <div className="flex gap-2 mt-1 justify-center md:justify-start">
            <a
              target="_blank"
              href="Resume.pdf"
              className={`text-sm px-4 py-2 transition-all backdrop-blur-sm relative group ${
                darkMode ? "text-white" : "text-black"
              }`}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)",
                borderTop: darkMode
                  ? "2px solid rgba(255,255,255,0.1)"
                  : "2px solid rgba(0,0,0,0.1)",
                borderBottom: darkMode
                  ? "2px solid rgba(255,255,255,0.1)"
                  : "2px solid rgba(0,0,0,0.1)",
                borderImageSource: darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.5), transparent)",
                borderImageSlice: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.5), transparent)";
                e.currentTarget.style.borderImageSource = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.8), transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)";
                e.currentTarget.style.borderImageSource = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.5), transparent)";
              }}
            >
              View Resume
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&to=rjmomong@gmail.com"
              className={`text-sm px-4 py-2 transition-all backdrop-blur-sm relative group ${
                darkMode ? "text-white" : "text-black"
              }`}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)",
                borderTop: darkMode
                  ? "2px solid rgba(255,255,255,0.1)"
                  : "2px solid rgba(0,0,0,0.1)",
                borderBottom: darkMode
                  ? "2px solid rgba(255,255,255,0.1)"
                  : "2px solid rgba(0,0,0,0.1)",
                borderImageSource: darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.5), transparent)",
                borderImageSlice: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.5), transparent)";
                e.currentTarget.style.borderImageSource = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.8), transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)";
                e.currentTarget.style.borderImageSource = darkMode
                  ? "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)"
                  : "linear-gradient(to right, transparent, rgba(0,0,0,0.5), transparent)";
              }}
            >
              Send Email
            </a>
          </div>
        </div>
      </div>

      <div
        onClick={toggleDarkMode}
        className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute select-none top-1 w-4 h-4 rounded-full bg-white flex items-center justify-center text-[10px] transition-transform duration-300 ${
            darkMode ? "translate-x-7" : "translate-x-1"
          }`}
        >
          {darkMode ? "🌙" : "☀️"}
        </div>
      </div>
    </div>
  );
}

export default Container1;
