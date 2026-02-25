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
          <span
            className={`lg:text-sm text-[12px] ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Aspiring Full Stack Web Developer
          </span>
          <div className="flex gap-2 mt-1 justify-center md:justify-start">
            <a
              target="_blank"
              href="Ehrvayn_Rayven_Olivera_Resume.pdf"
              className={`${darkMode ? "bg-white text-black hover:bg-[#5e5e5e]" : "bg-[#2e2e2e] hover:bg-gray-600 text-white hover:text-white"} text-sm shadow-[0_0_6px_rgba(0,0,0,0.25)] cursor-pointer rounded-md px-4 py-2`}
            >
              View Resume
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&to=rjmomong@gmail.com"
              className={`text-sm shadow-[0_0_6px_rgba(0,0,0,0.25)] cursor-pointer rounded-md px-4 py-2 ${darkMode ? "bg-gray-600 text-white hover:text-black hover:bg-[#5e5e5e]" : "bg-white hover:bg-gray-500 hover:text-white"}`}
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
