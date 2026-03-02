import { useDarkMode } from "../../context/DarkmodeProvider";

function RecentProjects() {
  const { darkMode } = useDarkMode();
  const projects = [
    {
      name: "QuickNotes",
      description:
        "A lightweight full-stack notes app for quick thoughts and ideas",
      link: "qcknotes.vercel.app",
    },
    {
      name: "My Portfolio",
      description: "My personal portfolio website with Grok A.I chat bot",
      link: "ehrvayn.vercel.app",
    },
    { name: "", description: "", link: "" },
    { name: "", description: "", link: "" },
    { name: "", description: "", link: "" },
    { name: "", description: "", link: "" },
  ];

  return (
    <div
      className={`${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"} flex-1 shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 rounded-lg flex flex-col gap-5`}
    >
      <div className="flex items-center gap-2">
        <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
        <strong className="text-base tracking-tight">
          <i className="bi bi-folder-fill mr-1" /> Recent Projects
        </strong>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 h-[250px] p-2 overflow-y-auto gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 flex flex-col gap-2 ${darkMode ? "bg-[#2e2e2e] border border-[#3e3e3e]" : "shadow-[0_0_3px_rgba(0,0,0,0.15)] border border-gray-100"}`}
          >
            <strong className="text-sm">{project.name}</strong>
            <p
              className={`text-[12px] font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {project.description}
            </p>
            {project.link && (
              <a
                href={`https://${project.link}`}
                target="_blank"
                rel="noreferrer"
                className={`text-[11px] font-mono px-2 py-1 rounded-md w-fit ${darkMode ? "bg-[#3e3e3e] text-violet-400" : "bg-violet-50 text-violet-500"}`}
              >
                ↗ {project.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
