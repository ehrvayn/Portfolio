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
import canva from "../../assets/img/CanvaLogo.png";
import nextLogo from "../../assets/img/NextLogo.png";

function TechStack() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`p-6 rounded-md overflow-hidden backdrop-blur-sm border flex flex-col ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col mb-0 md:mb-[43px] gap-4 shrink-0 mb-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div
              className={`w-2 h-2 rounded-full ${
                darkMode ? "bg-orange-400" : "bg-orange-500"
              }`}
            />
            <h2
              className={`text-lg font-bold tracking-tight ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Tech Stack
            </h2>
          </div>
          <p
            className={`text-xs tracking-widest uppercase font-mono ${
              darkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Technologies I Use
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[300px] custom-scroll pr-2">
        {[
          {
            label: "Frontend",
            techs: [
              { name: "HTML", img: htmlImg },
              { name: "CSS", img: cssImg },
              { name: "JavaScript", img: jsImg },
              { name: "TypeScript", img: typescript },
              { name: "React", img: reactImg },
              { name: "Tailwind", img: tailwindImg },
              { name: "Bootstrap", img: bootstrap },
              { name: "Next.js", img: nextLogo },
            ],
          },
          {
            label: "Backend",
            techs: [
              { name: "Node.js", img: nodejsImg },
              { name: "MySQL", img: mysqlImg },
              { name: "PostgreSQL", img: postgres },
              { name: "ExpressJS", img: jsImg },
            ],
          },
          {
            label: "Mobile",
            techs: [{ name: "React Native", img: reactImg }],
          },
          {
            label: "Tools",
            techs: [
              { name: "GitHub", img: githubImg },
              { name: "VSCode", img: vscodeImg },
              { name: "Figma", img: figmaImg },
              { name: "Canva", img: canva },
            ],
          },
          {
            label: "Security",
            techs: [
              { name: "JWT", img: null },
              { name: "bcrypt", img: null },
              { name: "OAuth", img: null },
            ],
          },
          {
            label: "Cloud",
            techs: [{ name: "GCP", img: null }],
          },
        ].map((section, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-[9px] uppercase tracking-[0.15em] font-mono font-semibold bg-gradient-to-r ${
                  darkMode
                    ? "from-orange-400 to-pink-400"
                    : "from-orange-500 to-pink-500"
                } bg-clip-text text-transparent`}
              >
                {section.label}
              </span>
              <div
                className={`flex-1 h-[1px] bg-gradient-to-r ${
                  darkMode
                    ? "from-orange-400 to-pink-400"
                    : "from-orange-500 to-pink-500"
                } opacity-20`}
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {section.techs.map((tech, index) => (
                <span
                  key={index}
                  className={`rounded px-2 py-1 text-xs flex items-center gap-1 ${
                    darkMode
                      ? "bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-gray-200"
                      : "bg-orange-50 hover:bg-orange-100 border border-orange-200 text-gray-800"
                  }`}
                >
                  {tech.img && (
                    <img src={tech.img} className="w-3 h-3 object-contain" />
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
