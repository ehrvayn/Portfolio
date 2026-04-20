import { useDarkMode } from "../../context/DarkmodeProvider";
import { useState } from "react";
import NavsumaroImg from "../../assets/img/NavSumaroImg.png";
import QuickNotesImg from "../../assets/img/QuickNotesImg.png";
import PortfolioImg from "../../assets/img/PortfolioImg.png";
import InterviewSparkImg from "../../assets/img/InterviewSparkImg.png";

function RecentProjects() {
  const { darkMode } = useDarkMode();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "InterviewSpark",
      description:
        "InterviewSpark is an AI-powered interview coaching platform that simulates real-world technical and behavioral interviews.",
      link: "interviewsparks.netlify.app",
      code: "github.com/ehrvayn/InterviewSpark",
      image: InterviewSparkImg,
      tech: [
        "Groq AI",
        "TypeScript",
        "React",
        "Tailwind",
        "Node.js",
        "ExpressJS",
        "Postgres",
      ],
    },
    {
      name: "NavSumaro",
      description:
        "NavSumaro is the all-in-one student platform that replaces multiple fragmented campus tools.",
      link: "navsumaro.vercel.app",
      code: "github.com/ehrvayn/navSumaro",
      image: NavsumaroImg,
      tech: [
        "TypeScript",
        "React",
        "Tailwind",
        "Node.js",
        "ExpressJS",
        "Postgres",
      ],
    },
    {
      name: "My Portfolio",
      description:
        "QuickNotes is my first full-stack application a fast, secure note management platform.",
      link: "ehrvayn.vercel.app",
      code: "github.com/ehrvayn/Portfolio",
      image: PortfolioImg,
      tech: ["Groq AI", "JavaScript", "React", "Tailwind"],
    },
    {
      name: "QuickNotes",
      description:
        "This is my first full-stack application, designed to provide a fast and reliable way to manage daily notes.",
      link: "qcknotes.vercel.app",
      code: "github.com/ehrvayn/QuickNotes",
      image: QuickNotesImg,
      tech: [
        "JavaScript",
        "React",
        "BootStrap",
        "Node.js",
        "MySQL",
        "ExpressJS",
      ],
    },
  ];

  return (
    <section
      className={`w-full rounded-lg backdrop-blur-sm border flex flex-col gap-6 p-6 ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <header>
        <div className="flex items-center gap-3 mb-1">
          <div
            className={`w-2 h-2 rounded-full ${darkMode ? "bg-red-400" : "bg-red-500"}`}
          />
          <h2
            className={`text-lg font-bold tracking-tight ${darkMode ? "text-white" : "text-black"}`}
          >
            Recent Projects
          </h2>
        </div>
        <p
          className={`text-xs tracking-widest uppercase font-mono ${darkMode ? "text-gray-500" : "text-gray-600"}`}
        >
          Featured Work
        </p>
      </header>

      <div className="space-y-4 h-auto">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`rounded-lg border p-5 transition-all duration-200 cursor-pointer ${
              darkMode
                ? "bg-[#1a1a1a] border-gray-700 hover:border-red-500/50"
                : "bg-gray-50 border-gray-200 hover:border-red-300"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div
                className={`w-full md:w-64 h-48 rounded flex-shrink-0 overflow-hidden ${
                  darkMode ? "bg-black/30" : "bg-gray-100"
                } flex items-center justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full h-full object-contain transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded font-medium ${
                        darkMode
                          ? "bg-red-500/10 text-red-300 border border-red-500/30"
                          : "bg-red-100 text-red-700 border border-red-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 items-center pt-2 text-sm">
                  {project.link && (
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`font-semibold transition-colors ${
                        darkMode
                          ? "text-red-400 hover:text-red-300"
                          : "text-red-600 hover:text-red-700"
                      }`}
                    >
                      View Project <i className="bi bi-arrow-up-right ml-1" />
                    </a>
                  )}
                  {project.code && (
                    <>
                      <span
                        className={darkMode ? "text-gray-600" : "text-gray-400"}
                      >
                        |
                      </span>
                      <a
                        href={`https://${project.code}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`font-semibold transition-colors ${
                          darkMode
                            ? "text-red-400 hover:text-red-300"
                            : "text-red-600 hover:text-red-700"
                        }`}
                      >
                        View Code <i className="bi bi-arrow-up-right ml-1" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;
