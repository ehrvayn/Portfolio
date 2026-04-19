import { useDarkMode } from "../../context/DarkmodeProvider";

function About() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col p-6 rounded-md overflow-hidden backdrop-blur-sm border ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4 overflow-y-auto custom-scroll">
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div
              className={`w-2 h-2 rounded-full ${
                darkMode ? "bg-violet-400" : "bg-violet-500"
              }`}
            />
            <h2
              className={`text-lg font-bold tracking-tight ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              About
            </h2>
          </div>
          <p
            className={`text-xs tracking-widest uppercase font-mono ${
              darkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Who I Am
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p
            className={`text-xs leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm a 3rd-year BS Information Systems student at Naga College
            Foundation Inc., and honestly, I just really enjoy building things
            for the web. I got into Full Stack Development because I like seeing
            ideas turn into something real and functional something people can
            actually use
          </p>

          <p
            className={`text-xs leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm the type who learns by doing. I pick up new tools, break things,
            figure out why, and keep going. I've been leaning into AI tools
            lately too, not to replace the work but to do it smarter and faster.
          </p>

          <p
            className={`text-xs leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Right now I'm actively looking for an opportunity where I can
            actually apply what I've been building and learning on my own. I'm
            based in Naga City, Camarines Sur, and I'm 22 still early in the
            journey but genuinely passionate about where it's going.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
