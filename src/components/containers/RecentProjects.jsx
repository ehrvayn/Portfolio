import { useDarkMode } from "../../context/DarkmodeProvider";

function RecentProjects() {
  const { darkMode } = useDarkMode();
  const projects = [
    {
      name: "QuickNotes",
      description: "A lightweight note-taking app for quick thoughts and ideas",
      link: "myqnotes.vercel.app",
    },
    {
      name: "My Portfolio",
      description: "My personal Portfolio Website",
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
      <strong>
        <i className="bi bi-folder-fill"></i> Recent Projects
      </strong>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-[250px] p-2 overflow-y-auto gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${darkMode ? "bg-[#3e3e3e]" : "border-gray-200 shadow-[0_0_3px_rgba(0,0,0,0.25)]"} rounded-lg p-4 flex flex-col gap-2`}
          >
            <strong className="text-sm">{project.name}</strong>
            <p
              className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {project.description}
            </p>
            {project.link && (
              <a
                href={`https://${project.link}`}
                target="_blank"
                className={`${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-500"} text-xs px-2 py-1 rounded-md w-fit`}
              >
                {project.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
