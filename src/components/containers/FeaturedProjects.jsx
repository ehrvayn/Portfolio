import { useDarkMode } from "../../context/DarkmodeProvider";
import { useState } from "react";
import NavsumaroImg from "../../assets/img/NavSumaroImg.png";
import TechHubImg from "../../assets/img/TechHubImg.png";
import PortfolioImg from "../../assets/img/PortfolioImg.png";
import InterviewSparkImg from "../../assets/img/InterviewSparkImg.png";
import StartSmartImg from "../../assets/img/StartSmartImg.png";
import MochikuImg from "../../assets/img/Mochiku-Img.png";

function FeaturedProjects() {
  const { darkMode } = useDarkMode();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // On small screens descriptions are clamped behind a "View Details" toggle.
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      name: "Mochiku",
      description:
        "An offline-first mobile app that turns photos of bills, receipts, and notices into structured, reviewable data. A vision-AI backend extracts each item's title, category, and deadline with a confidence score per field, flagging low-confidence results for review instead of silently trusting them. Deadline items require confirmation before a local reminder is scheduled; the rest auto-files into a photo grid, filterable by category. Photos save instantly to on-device SQLite regardless of connectivity, and failed uploads retry automatically once the device is back online.",
      link: "",
      code: "",
      image: MochikuImg,
      tech: [
        "TypeScript",
        "React Native",
        "Expo",
        "NativeWind",
        "Node.js",
        "SQLite",
        "Groq AI",
      ],
    },
    {
      name: "TechHub",
      description:
        "TechHub is a full end-to-end e-commerce architecture, built from the database schema up through a layered backend to a complete customer storefront and admin back office. Customers browse products, manage a cart, check out, track real-time order status, and leave verified purchase reviews. Admins get a live dashboard with revenue analytics, order and inventory management, customer insights, and sales reports, all backed by real-time notifications via server-sent events. Authentication runs through Auth0 with role-based access control separating customer and admin experiences across every layer of the stack.",
      link: "techhub-shop.vercel.app",
      code: "github.com/ehrvayn/TechHub",
      image: TechHubImg,
      tech: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind",
        "Postgres",
        "Auth0",
        "Groq AI",
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
      name: "InterviewSpark",
      description:
        "InterviewSpark is an AI-powered interview coaching platform that simulates real-world technical and behavioral interviews. Get instant AI-driven feedback on every answer with detailed scoring across 6 performance metrics: clarity, confidence, relevance, communication, conciseness, and technical depth. Track your progress with an analytics dashboard that visualizes your improvement over time, identifies skill gaps, and provides actionable insights. Perfect for job seekers preparing for interviews at top tech companies.",
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
      name: "StartSmart",
      description:
        "StartSmart is an AI-powered business idea analyzer that breaks down any concept into a full viability report no sign-up needed. Just type your idea and instantly get a viability score, startup cost breakdown, launch timeline, market and risk assessment, and a legal compliance checklist. Plus, an AI chatbot that knows your idea and can answer any follow-up questions. Turn your idea into a roadmap in seconds.",
      link: "startsmartgo.vercel.app",
      code: "github.com/ehrvayn/StartSmart",
      image: StartSmartImg,
      tech: [
        "Groq AI",
        "TypeScript",
        "React",
        "Tailwind",
        "Node.js",
        "ExpressJS",
      ],
    },
    {
      name: "My Portfolio",
      description:
        "My Portfolio showcases my full-stack development work with a clean, responsive design highlighting my projects, certifications, and technical skills. It features an AI-powered chatbot built with Groq API integration, demonstrating my ability to create engaging interfaces and implement advanced technologies.",
      link: "ehrvayn.vercel.app",
      code: "github.com/ehrvayn/Portfolio",
      image: PortfolioImg,
      tech: ["Groq AI", "JavaScript", "React", "Tailwind"],
    },
  ];

  return (
    <section
      className={`w-full backdrop-blur-sm border flex flex-col gap-6 px-2 sm:px-6 py-6 ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <header>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h2
              className={`text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  uppercase font-mono font-bold tracking-tight ${darkMode ? "text-gray-200" : "text-gray-900"}`}
            >
              Featured Projects
            </h2>
          </div>
        </div>
      </header>

      <div className="space-y-4 h-[60vh] lg:h-[800px] max-h-[800px] overflow-y-auto custom-scroll">
        {projects.map((project, index) => (
          <article
            key={index}
            className={` border p-5 transition-all duration-200 ${
              darkMode
                ? "bg-[#212124] border-gray-700 hover:border-gray-500"
                : "bg-gray-50 border-gray-200 hover:border-gray-400"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className={`w-full sm:w-1/2 lg:w-2/5 h-56 sm:h-64 lg:h-70 p-3 rounded flex-shrink-0 overflow-hidden ${
                  darkMode ? "bg-black/40" : "bg-gray-100"
                } flex items-center justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`h-full object-contain transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>

              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <div>
                  <h3 className={`text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl  font-bold mb-2 ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm text-justify leading-relaxed ${
                      expandedIndex === index ? "" : "line-clamp-3 sm:line-clamp-none"
                    } ${darkMode ? "text-gray-200" : "text-gray-900"}`}
                  >
                    {project.description}
                  </p>

                  {/* toggle only where the text is actually clamped */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    aria-expanded={expandedIndex === index}
                    className={`mt-2 sm:hidden inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.15em] transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:text-gray-100"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {expandedIndex === index ? "View Less" : "View Details"}
                    <i
                      className={`bi bi-chevron-${
                        expandedIndex === index ? "up" : "down"
                      } transition-transform`}
                    />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 font-medium ${
                        darkMode
                          ? "bg-gray-500/10 hover:bg-gray-500/20 border border-gray-600/30 text-gray-200"
                          : "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800"
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
                          ? "text-gray-200 hover:text-gray-100"
                          : "text-gray-900 hover:text-gray-700"
                      }`}
                    >
                      View Project <i className="bi bi-arrow-up-right ml-1" />
                    </a>
                  )}
                  {project.code && (
                    <>
                      <span
                        className={darkMode ? "text-gray-500" : "text-gray-400"}
                      >
                        |
                      </span>
                      <a
                        href={`https://${project.code}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`font-semibold transition-colors ${
                          darkMode
                            ? "text-gray-200 hover:text-gray-100"
                            : "text-gray-900 hover:text-gray-700"
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

export default FeaturedProjects;
