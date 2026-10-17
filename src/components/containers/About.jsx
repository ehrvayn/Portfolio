import { useDarkMode } from "../../context/DarkmodeProvider";

function About() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col p-6 shrink-0 backdrop-blur-sm border ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto custom-scroll">
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <h2
              className={`text-lg uppercase font-mono font-bold tracking-tight ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              About
            </h2>
          </div>
        </div>

        <div className="flex text-justify flex-col gap-3">
          <p
            className={`text-sm font-mono leading-relaxed ${
              darkMode ? "text-gray-200" : "text-gray-900"
            }`}
          >
            4th-year BS Information Systems student at Naga College Foundation
            Inc. who loves building full stack web and mobile apps and learns by doing. I
            use AI tools to work smarter and build faster. Right now I’m looking for an opportunity to
            apply my skills in a real project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
