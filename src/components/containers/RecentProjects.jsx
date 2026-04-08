import { useDarkMode } from "../../context/DarkmodeProvider";
import { useState } from "react";
import NavsumaroImg from "../../assets/img/NavSumaroImg.png";
import QuickNotesImg from "../../assets/img/QuickNotesImg.png";
import PortfolioImg from "../../assets/img/PortfolioImg.png";


function RecentProjects() {
  const { darkMode } = useDarkMode();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  const projects = [
    {
      name: "NavSumaro",
      description:
        "A unified student ecosystem designed to eliminate fragmented campus tools. Built a secure marketplace, academic collaboration hub, and research grouping system authenticated via institutional email.",
      link: "navsumaro.vercel.app",
      code: "github.com/ehrvayn/navSumaro",
      image: NavsumaroImg,
      tech: ["TypeScript", "React", "Tailwind", "Node.js", "ExpressJS", "Postgres"],
    },
    {
      name: "My Portfolio",
      description:
        "I built this simple portfolio to showcase my skills that has a custom Grok AI assistant that answers questions about my tech stack and experience in real-time.",
      link: "ehrvayn.vercel.app",
      code: "github.com/ehrvayn/Portfolio",
      image: PortfolioImg,
      tech: ["Grok AI", "JavaScript", "React", "Tailwind"],
    },
    {
      name: "QuickNotes",
      description:
        "This is my first full-stack application, designed to provide a fast and reliable way to manage daily notes. I focused on building a clean and secure REST API and a user-friendly interface.",
      link: "qcknotes.vercel.app",
      code: "github.com/ehrvayn/QuickNotes",
      image: QuickNotesImg,
      tech: ["JavaScript", "React", "Tailwind", "BootStrap", "Node.js", "MySQL"],
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"
      } shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 md:p-8 rounded-sm flex flex-col gap-6 md:gap-8`}
    >
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
        <h2 className="text-lg md:text-xl font-semibold tracking-tight">
          <i className="bi bi-folder-fill mr-2" /> Recent Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 auto-rows-max max-h-[750px] overflow-y-auto pr-2 custom-scrollbar">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative rounded-md overflow-hidden transition-all duration-300 cursor-pointer ${
              darkMode
                ? "bg-[#2e2e2e] border border-[#3e3e3e] hover:border-red-500"
                : "bg-gray-50 border border-gray-200 hover:border-red-300"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col lg:flex-row gap-0 lg:items-center">
              <div className={`w-full lg:w-[450px] h-[320px] md:h-[350px] flex-shrink-0 overflow-hidden bg-black/5 ${darkMode && "bg-black/20"} flex items-center justify-center`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={`h-100 object-contain transition-transform pl-2 duration-500 mt-[-50px] ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                  onError={handleImageError}
                />
              </div>

              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm md:text-base text-justify leading-relaxed ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-md font-medium ${
                        darkMode
                          ? "bg-white/5 text-gray-300 border border-white/10"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  {project.link && (
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500 hover:underline mt-2"
                    >
                      <span>View Project</span>
                      <i className="bi bi-arrow-up-right text-xs" />
                    </a>
                  )}
                  <span className="text-gray-500 text-[20px]">|</span>
                  {project.code && (
                    <a
                      href={`https://${project.code}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500 hover:underline mt-2"
                    >
                      <span>View Code</span>
                      <i className="bi bi-arrow-up-right text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
