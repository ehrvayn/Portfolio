import { useState, useRef, useEffect } from "react";
import { useDarkMode } from "../context/DarkmodeProvider";
import Groq from "groq-sdk";
import MyInfo from "../assets/info/MyInfo";
import profilePic from "../assets/img/profile.jpg";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

function ChatBot() {
  const welcomeMessage = {
    role: "bot",
    text: "Hello!👋 I'm Ehrvayn a passionate developer always looking to grow and connect. Feel free to ask me anything, I'm happy to chat! ",
  };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { darkMode } = useDarkMode();

  const latestChat = useRef(null);

  useEffect(() => {
    latestChat.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const result = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: MyInfo },
          { role: "user", content: input },
        ],
      });
      const botMessage = {
        role: "bot",
        text: result.choices[0].message.content,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Try again!" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {open && (
        <div
className={`fixed bottom-24 right-4 md:right-6 w-[90%] sm:max-w-sm md:w-auto h-[60vh] max-h-[500px] rounded-xl shadow-xl z-50 flex flex-col ${darkMode ? "bg-[#3e3e3e] text-white" : "border border-gray-200 bg-white"}`}
        >
          <div
            className={`${darkMode ? "bg-[#3e3e3e] text-white border-b border-gray-500" : "bg-white text-black border-b border-gray-200"} p-4 rounded-t-2xl flex justify-between items-center`}
          >
            <span className="font-semibold gap-3 flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={profilePic}
              />
              <div className="flex flex-col">
                <span>Ask me anything</span>
                <span className="flex items-center gap-1 text-xs font-normal">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                  Online
                </span>
              </div>
            </span>
            <button onClick={() => setOpen(false)} className="cursor-pointer">
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                {msg.role === "bot" && (
                  <div className="flex items-center gap-1 mb-1">
                    <img
                      src={profilePic}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span
                      className={`text-xs font-semibold ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Ehrvayn
                    </span>
                  </div>
                )}

                <div
                  className={`whitespace-pre-wrap break-words text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? darkMode
                        ? "bg-white text-black"
                        : "bg-[#2e2e2e] text-white"
                      : darkMode
                        ? "bg-[#2e2e2e]"
                        : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div
                className={`text-sm px-3 py-2 rounded-lg max-w-[80%] self-start ${darkMode ? "bg-[#3e3e3e]" : "bg-gray-100"}`}
              >
                Typing...
              </div>
            )}
            <div ref={latestChat}></div>
          </div>

          <div
            className={`${darkMode ? "bg-[#3e3e3e] text-white border-b border-gray-500" : "bg-white text-black border-b border-gray-200"} p-3 border-t rounded-b-2xl flex gap-2`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className={`flex-1 rounded-lg px-3 py-2 text-sm outline-none border ${darkMode ? "bg-[#3e3e3e] border-gray-600 text-white" : "border-gray-300"}`}
            />
            <button
              onClick={sendMessage}
              className={`${darkMode ? "bg-white text-black" : "bg-[#2e2e2e] text-white"} px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-500`}
            >
              <i className="bi bi-send text-[20px]"></i>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 w-14 h-14 ${darkMode ? "bg-white hover:bg-[#3e3e3e] text-black" : "bg-[#3e3e3e] hover:bg-gray-500 text-white"} rounded-full shadow-lg flex items-center justify-center text-2xl cursor-pointer z-50`}
      >
        {open ? "✕" : <i className={`bi bi-chat-dots-fill`}></i>}
      </button>
    </>
  );
}

export default ChatBot;
