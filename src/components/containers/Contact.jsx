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
      className={`w-full flex-1 min-h-0 p-6 backdrop-blur-sm border flex flex-col gap-5 ${
        darkMode
          ? "bg-[#17171a] border-gray-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4 md:gap-5 md:flex-row flex-1 min-h-0">
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2
                className={`text-lg uppercase font-mono font-bold tracking-tight ${
                  darkMode ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Find me on
              </h2>
            </div>
          </div>

          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`p-3 py-4  flex items-center justify-between bg-gray-500/10 hover:bg-gray-500/20 border border-gray-600/30 text-gray-200`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="flex items-center gap-3">
                <i
                  className={`bi ${link.icon} text-lg shrink-0 ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                />
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  {link.name}
                </p>
              </div>
              <i
                className={`bi bi-arrow-up-right text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              />
            </a>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2
                className={`text-lg uppercase font-mono font-bold tracking-tight ${
                  darkMode ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Get in touch
              </h2>
            </div>
          </div>

          {quickContacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className={`p-3 flex items-center justify-between bg-gray-500/10 hover:bg-gray-500/20 border border-gray-600/30 text-gray-200`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <i
                  className={`bi ${contact.icon} text-lg shrink-0 ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                />
                <div className="flex flex-col min-w-0">
                  <p
                    className={`text-sm font-semibold ${
                      darkMode ? "text-gray-200" : "text-gray-900"
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
                className={`bi bi-arrow-up-right text-xs shrink-0 ml-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
