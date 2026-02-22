import { useDarkMode } from "../../context/DarkmodeProvider";

function Contact() {
  const { darkMode } = useDarkMode();

  const goals = [
    "Build production-ready applications that solve real problems and demonstrate my capabilities as a developer.",
    "Continuously improve my full stack skills and stay updated with modern technologies and best practices.",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/ehrvayn-rayven-olivera-7228a83b2/",
    },
    { name: "GitHub", icon: "bi-github", url: "https://github.com/ehrvayn" },
    {
      name: "Facebook",
      icon: "bi-facebook",
      url: "https://www.facebook.com/ehrvayn.rayven.1",
    },
  ];

  const quickContacts = [
    {
      label: "Email",
      sub: "rjmomong@gmail.com",
      icon: "bi-envelope",
      url: "https://mail.google.com/mail/?view=cm&to=rjmomong@gmail.com",
    },
    {
      label: "Reach me",
      sub: "099276485",
      icon: "bi-telephone",
    },
    {
      label: "Messenger",
      sub: "Chat with me",
      icon: "bi-messenger",
      url: "https://m.me/ehrvayn.rayven.1",
    },
  ];

  const innerCard = `${darkMode ? "bg-[#3e3e3e]" : "bg-gray-100"} p-3 rounded-lg text-sm`;

  return (
    <div
      className={`${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"} w-full shadow-[0_0_6px_rgba(0,0,0,0.25)] p-4 md:p-6 rounded-lg flex flex-col md:flex-row gap-4 md:gap-5`}
    >
      <div className="flex-1 flex flex-col gap-3">
        <strong>
          <i className="bi bi-bullseye"></i> Goals
        </strong>
        {goals.map((goal, index) => (
          <div key={index} className={innerCard}>
            {goal}
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <strong>
          <i className="bi bi-link-45deg"></i> Social Links
        </strong>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className={`${innerCard} flex items-center gap-3 hover:opacity-80`}
          >
            <i className={`bi ${link.icon} text-lg`}></i>
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <strong>
          <i className="bi bi-chat-dots"></i> Contact me at your convenience
        </strong>

        {quickContacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            className={`${innerCard} flex items-center justify-between hover:opacity-80`}
          >
            <div className="flex items-center gap-3">
              <i className={`bi ${contact.icon} text-lg`}></i>
              <div>
                <p className="text-sm font-semibold">{contact.label}</p>
                <p
                  className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  {contact.sub}
                </p>
              </div>
            </div>
            <i className="bi bi-chevron-right text-gray-400 text-xs"></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
