import { useDarkMode } from "../../context/DarkmodeProvider";

function About() {
  const { darkMode } = useDarkMode();

  return (
<div className={`flex flex-col shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6 rounded-lg gap-4 ${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"}`}>
      <div className="flex items-center gap-2">
        <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
        <strong className="text-base tracking-tight">
          <i className="bi bi-person-circle mr-1" /> About
        </strong>
      </div>

      <p
        className={`text-justify text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        I am a 3rd-year Bachelor of Science in Information Systems student at
        Naga College Foundation Inc. Passionate about building modern and
        user-centered digital solutions by focusing on Full Stack Web
        Development.
      </p>

      <p
        className={`text-justify text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        I enjoy solving real-world problems through technology whether by
        developing systems that improve daily processes or by creating
        innovative ideas and turning them into functional applications. I
        embrace modern development practices including the use of AI tools and
        technologies to build smarter, more efficient solutions. I am
        continuously learning, exploring new tools, and enhancing my skills to
        grow into a professional developer.
      </p>

      <p
        className={`text-justify text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        I am actively seeking an Internship opportunity where I can apply what
        I've learned and gain hands-on industry experience. I am open to
        leveraging AI-powered tools and integrations to deliver impactful,
        forward-thinking applications. I am based in Naga City, Camarines Sur,
        Philippines, and I am 22 years old with a strong passion for technology
        and continuous improvement.
      </p>
    </div>
  );
}

export default About;
