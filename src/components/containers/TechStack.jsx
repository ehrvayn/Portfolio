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

function TechStack() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 rounded-lg ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}
    >
      <strong>
        <i className="bi bi-gear-fill"></i> Tech Stack
      </strong>
      <div className="flex flex-col gap-3 mt-3">
        {[
          {
            label: "Frontend",
            techs: [
              { name: "HTML", img: htmlImg },
              { name: "CSS", img: cssImg },
              { name: "JavaScript", img: jsImg },
              { name: "TypeScript", img: typescript },
              { name: "React (Vite)", img: reactImg },
              { name: "Tailwind CSS", img: tailwindImg },
            ],
          },
          {
            label: "Backend",
            techs: [
              { name: "Node.js", img: nodejsImg },
              { name: "MySQL", img: mysqlImg },
            ],
          },
          {
            label: "Tools & Frameworks",
            techs: [
              { name: "GitHub", img: githubImg },
              { name: "VSCode", img: vscodeImg },
              { name: "Figma", img: figmaImg },
            ],
          },
        ].map((section, i) => (
          <div key={i}>
            <strong>{section.label}</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {section.techs.map((tech, index) => (
                <span
                  key={index}
                  className={`rounded-md px-3 py-1 text-sm flex items-center gap-1 ${darkMode ? " bg-[#3e3e3e]" : "border-gray-200 shadow-[0_0_3px_rgba(0,0,0,0.25)]"}`}
                >
                  <img src={tech.img} className="w-4 h-4 object-contain" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div>
          <strong>Foundational Skills</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "UI Design Basics",
              "API Integration (Beginner)",
              "Responsive Web Design",
            ].map((skill, index) => (
              <span
                key={index}
                className={`rounded-md px-3 py-1 text-sm ${darkMode ? "bg-[#3e3e3e]" : "border-gray-200 shadow-[0_0_3px_rgba(0,0,0,0.25)]"}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
