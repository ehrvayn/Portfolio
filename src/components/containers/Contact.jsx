import { useDarkMode } from "../../context/DarkmodeProvider";

function Contact() {
  const { darkMode } = useDarkMode();

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
    { label: "Reach me", sub: "099276485", icon: "bi-telephone" },
    {
      label: "Messenger",
      sub: "Chat with me",
      icon: "bi-messenger",
      url: "https://m.me/ehrvayn.rayven.1",
    },
  ];

  return (
    <div
      className={`w-full p-6 rounded-md backdrop-blur-sm border flex flex-col gap-5 ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4 md:gap-5 md:flex-row">
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  darkMode ? "bg-pink-400" : "bg-pink-500"
                }`}
              />
              <h2
                className={`text-lg font-bold tracking-tight ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Find me on
              </h2>
            </div>
            <p
              className={`text-xs tracking-widest uppercase font-mono ${
                darkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Social Links
            </p>
          </div>

          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`p-3 py-4 rounded-lg  flex items-center justify-between ${
                darkMode
                  ? "bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/60"
                  : "bg-cyan-50 border border-cyan-200 hover:border-cyan-300"
              }`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="flex items-center gap-3">
                <i
                  className={`bi ${link.icon} text-lg shrink-0 ${
                    darkMode ? "text-pink-400" : "text-pink-600"
                  }`}
                />
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {link.name}
                </p>
              </div>
              <i
                className={`bi bi-arrow-up-right text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}
              />
            </a>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  darkMode ? "bg-cyan-400" : "bg-cyan-500"
                }`}
              />
              <h2
                className={`text-lg font-bold tracking-tight ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Get in touch
              </h2>
            </div>
            <p
              className={`text-xs tracking-widest uppercase font-mono ${
                darkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Quick Contact
            </p>
          </div>

          {quickContacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className={`p-3 rounded-lg flex items-center justify-between ${
                darkMode
                  ? "bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/60"
                  : "bg-cyan-50 border border-cyan-200 hover:border-cyan-300"
              }`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <i
                  className={`bi ${contact.icon} text-lg shrink-0 ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                />
                <div className="flex flex-col min-w-0">
                  <p
                    className={`text-sm font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {contact.label}
                  </p>
                  <p
                    className={`text-xs font-mono truncate ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {contact.sub}
                  </p>
                </div>
              </div>
              <i
                className={`bi bi-arrow-up-right text-xs shrink-0 ml-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
