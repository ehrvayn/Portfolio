import { useDarkMode } from "../../context/DarkmodeProvider";
import { useState } from "react";
import NavsumaroImg from "../../assets/img/NavSumaroImg.png";
import QuickNotesImg from "../../assets/img/QuickNotesImg.png";
import PortfolioImg from "../../assets/img/PortfolioImg.png";
import InterviewSparkImg from "../../assets/img/InterviewSparkImg.png";

function RecentProjects() {
  const { darkMode } = useDarkMode();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  const projects = [
    {
      name: "InterviewSpark",
      description:
        "InterviewSpark is an AI-powered interview coaching platform that simulates real-world technical and behavioral interviews. Get instant AI-driven feedback on every answer with detailed scoring across 6 performance metrics: clarity, confidence, relevance, communication, conciseness, and technical depth. Track your progress with an analytics dashboard that visualizes your improvement over time, identifies skill gaps, and provides actionable insights.",
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
        "NavSumaro is the all-in-one student platform that replaces multiple fragmented campus tools. Access a verified academic Q&A forum, secure peer-to-peer marketplace for textbooks and supplies, and built-in collaboration tools all powered by institutional email verification for trust and safety. Connect with real classmates, buy and sell with confidence, and get academic help from verified students in your university community.",
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
        "QuickNotes is my first full-stack application a fast, secure note management platform. I built a clean REST API with robust authentication and a responsive user interface, focusing on performance and simplicity so users can capture and organize ideas without friction.",
      link: "ehrvayn.vercel.app",
      code: "github.com/ehrvayn/Portfolio",
      image: PortfolioImg,
      tech: ["Groq AI", "JavaScript", "React", "Tailwind"],
    },
    {
      name: "QuickNotes",
      description:
        "This is my first full-stack application, designed to provide a fast and reliable way to manage daily notes. I focused on building a clean and secure REST API and a user-friendly interface.",
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
    <div
      className={`p-6 rounded-md overflow-hidden backdrop-blur-sm border flex flex-col gap-5 ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-1">
          <div
            className={`w-2 h-2 rounded-full ${
              darkMode ? "bg-red-400" : "bg-red-500"
            }`}
          />
          <h2
            className={`text-lg font-bold tracking-tight ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Recent Projects
          </h2>
        </div>
        <p
          className={`text-xs tracking-widest uppercase font-mono ${
            darkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          Featured Work
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 max-h-[750px] overflow-y-auto pr-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden cursor-pointer border ${
              darkMode
                ? "bg-[#1a1a1a] border-gray-700 hover:border-red-500/50"
                : "bg-gray-50 border-gray-200 hover:border-red-300"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col lg:flex-row gap-0">
              <div
                className={`lg:w-90 w-full p-5 flex-shrink-0 overflow-hidden ${
                  darkMode ? "bg-black/30" : "bg-gray-100"
                } flex items-center justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full h-full object-contain transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                  onError={handleImageError}
                />
              </div>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <div>
                  <h3
                    className={`text-lg font-bold mb-2 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent`}
                  >
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed line-clamp-3 ${
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

                <div className="flex gap-4 items-center pt-2">
                  {project.link && (
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        darkMode
                          ? "text-red-400 hover:text-red-300"
                          : "text-red-600 hover:text-red-700"
                      }`}
                    >
                      View Project
                      <i className="bi bi-arrow-up-right text-xs" />
                    </a>
                  )}
                  {project.code && (
                    <>
                      <span
                        className={`${
                          darkMode ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        |
                      </span>
                      <a
                        href={`https://${project.code}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                          darkMode
                            ? "text-red-400 hover:text-red-300"
                            : "text-red-600 hover:text-red-700"
                        }`}
                      >
                        View Code
                        <i className="bi bi-arrow-up-right text-xs" />
                      </a>
                    </>
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
