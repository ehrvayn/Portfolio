import { useDarkMode } from "../../context/DarkmodeProvider";
// import Avatar from "./Avatar";

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

  const innerCard = `${darkMode ? "bg-[#2e2e2e] border border-[#3e3e3e]" : "bg-gray-50 border border-gray-100 shadow-[0_0_3px_rgba(0,0,0,0.08)]"} p-3 rounded-lg text-sm`;

  const SectionHeader = ({ label }) => (
    <div className="flex items-center gap-2 mb-1">
      <div className="w-[4px] h-5 rounded-full bg-gradient-to-b from-gray-300 to-gray-500" />
      <strong className="text-base tracking-tight">{label}</strong>
    </div>
  );

  return (
    <div
      className={`${darkMode ? "bg-[#1e1e1e] text-white" : "bg-white"} w-full h-full shadow-[0_0_6px_rgba(0,0,0,0.25)] p-4 md:p-6 rounded-sm flex flex-col md:flex-row gap-4 md:gap-5`}
    >
      {/* <div className="mb-16 md:mb-0">
        <Avatar />
      </div> */}

      <div className="flex-1 flex flex-col gap-3">
        <SectionHeader label="Find me on" />
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={`${innerCard} flex items-center justify-between ${
              darkMode
                ? "bg-[#2e2e2e] border border-[#3e3e3e] hover:border-red-500"
                : "bg-gray-50 border border-gray-200 hover:border-red-300"
            }`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="flex items-center gap-3 w-full">
              <i
                className={`bi ${link.icon} text-lg shrink-0 ${darkMode ? "text-white" : "text-black"}`}
              />
              <div className="flex items-center justify-between w-full gap-2">
                <p className="text-sm font-semibold shrink-0">{link.name}</p>
                <div
                  className={`flex-1 h-[1px] ${darkMode ? "bg-[#3e3e3e]" : "bg-gray-200"}`}
                />
              </div>
            </div>
            <i className="bi bi-chevron-right text-gray-400 text-xs ml-2 shrink-0" />
          </a>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <SectionHeader label="Get in touch" />
        {quickContacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noreferrer"
            className={`${innerCard} flex items-center justify-between ${
              darkMode
                ? "bg-[#2e2e2e] border border-[#3e3e3e] hover:border-red-500"
                : "bg-gray-50 border border-gray-200 hover:border-red-300"
            }`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="flex items-center gap-3 w-full">
              <i
                className={`bi ${contact.icon} text-lg shrink-0 ${darkMode ? "text-white" : "text-black"}`}
              />
              <div className="flex items-center justify-between w-full gap-2">
                <p className="text-sm font-semibold shrink-0">
                  {contact.label}
                </p>
                <div
                  className={`flex-1 h-[1px] ${darkMode ? "bg-[#3e3e3e]" : "bg-gray-200"}`}
                />
                <p
                  className={`text-[11px] font-mono shrink-0 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  {contact.sub}
                </p>
              </div>
            </div>
            <i className="bi bi-chevron-right text-gray-400 text-xs ml-2 shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
