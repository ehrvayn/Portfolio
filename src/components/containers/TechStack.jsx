import { useDarkMode } from "../../context/DarkmodeProvider";
import htmlImg from "../../assets/img/html.png";
import cssImg from "../../assets/img/css.png";
import jsImg from "../../assets/img/js.png";
import reactImg from "../../assets/img/react.png";
import tailwindImg from "../../assets/img/tailwind.png";
import nodejsImg from "../../assets/img/nodejs.png";
import mysqlImg from "../../assets/img/mysql.png";
import githubImg from "../../assets/img/github.png";
import vscodeImg from "../../assets/img/vscode.png";
import figmaImg from "../../assets/img/figma.png";
import typescript from "../../assets/img/typescript.png";
import postgres from "../../assets/img/postgres.png";
import bootstrap from "../../assets/img/Bootstrap.png";

function TechStack() {
  const { darkMode } = useDarkMode();

  const categoryColors = {
    Frontend: "from-red-500 to-gray-500",
    Backend: "from-red-500 to-gray-500",
    Tools: "from-red-500 to-gray-500",
    "Foundational Skills": "from-red-500 to-gray-500",
    Mobile: "from-red-500 to-gray-500",
    Security: "from-red-500 to-gray-500",
  };

  return (
    <div
      className={`shadow-[0_0_6px_rgba(0,0,0,0.25)] h-[420px] p-6 rounded-lg flex flex-col ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}
    >
      <div className="flex items-center gap-2 mb-4 shrink-0">
        <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
        <strong className="text-base tracking-tight">
          <i className="bi bi-gear-fill mr-1" /> Tech Stack
        </strong>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto pr-1">
        {[
          {
            label: "Frontend",
            techs: [
              { name: "HTML", img: htmlImg },
              { name: "CSS", img: cssImg },
              { name: "JavaScript", img: jsImg },
              { name: "TypeScript", img: typescript },
              { name: "React", img: reactImg },
              { name: "Tailwind CSS", img: tailwindImg },
              { name: "Bootstrap", img: bootstrap },
            ],
          },
          {
            label: "Backend",
            techs: [
              { name: "Node.js", img: nodejsImg },
              { name: "MySQL", img: mysqlImg },
              { name: "PostgreSQL", img: postgres },
            ],
          },
          {
            label: "Tools",
            techs: [
              { name: "GitHub", img: githubImg },
              { name: "VSCode", img: vscodeImg },
              { name: "Figma", img: figmaImg },
            ],
          },
          {
            label: "Mobile",
            techs: [{ name: "React Native", img: reactImg }],
          },
          {
            label: "Security",
            techs: [
              { name: "JWT", img: null },
              { name: "bcrypt", img: null },
            ],
          },
        ].map((section, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-[10px] uppercase tracking-[0.15em] font-mono font-semibold bg-gradient-to-r ${categoryColors[section.label]} bg-clip-text text-transparent`}
              >
                {section.label}
              </span>
              <div
                className={`flex-1 h-[1px] bg-gradient-to-r ${categoryColors[section.label]} opacity-20`}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {section.techs.map((tech, index) => (
                <span
                  key={index}
                  className={`rounded-lg px-3 py-1.5 text-sm flex items-center gap-1.5 transition-all duration-200 ${
                    darkMode
                      ? "bg-[#2e2e2e] hover:bg-[#3a3a3a] border border-[#3e3e3e]"
                      : "bg-gray-50 hover:bg-gray-100 shadow-[0_0_3px_rgba(0,0,0,0.15)] border border-gray-100"
                  }`}
                >
                  {tech.img && (
                    <img src={tech.img} className="w-4 h-4 object-contain" />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
