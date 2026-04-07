import { useDarkMode } from "../../context/DarkmodeProvider";

function About() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col shadow-[0_0_6px_rgba(0,0,0,0.25)] h-full p-6 rounded-sm gap-4 ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}
    >
      <div className="flex items-center gap-2">
        <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
        <strong className="text-base tracking-tight">
          <i className="bi bi-person-circle mr-1" /> About
        </strong>
      </div>

      <p
        className={`text-justify text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        I'm a 3rd-year BS Information Systems student at Naga College Foundation
        Inc., and honestly, I just really enjoy building things for the web. I
        got into Full Stack Development because I like seeing ideas turn into
        something real and functional something people can actually use
      </p>

      <p
        className={`text-justify text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        I'm the type who learns by doing. I pick up new tools, break things,
        figure out why, and keep going. I've been leaning into AI tools lately
        too, not to replace the work but to do it smarter and faster.
      </p>

      <p
        className={`text-justify text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        Right now I'm actively looking for an opportunity where I can actually
        apply what I've been building and learning on my own. I'm based in Naga
        City, Camarines Sur, and I'm 22 still early in the journey but
        genuinely passionate about where it's going.
      </p>
    </div>
  );
}

export default About;
