import { useState } from "react";
import { API_URL } from "../config";
import "./ChatBot.css";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I’m InsureAI Assistant 🤖. Ask me about policies, appointments, or how to use this app.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  async function handleSend(e) {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages = [
      ...messages,
      { from: "user", text: trimmed },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { from: "bot", text: data.reply || "Sorry, I didn’t get that." },
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { from: "bot", text: "Server error, please try again later!" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button className="chatbot-toggle-btn" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-window shadow-lg">
          <div className="chatbot-header d-flex justify-content-between align-items-center">
            <span>InsureAI Assistant</span>
            <button className="btn-close" onClick={toggleChat}></button>
          </div>

          <div className="chatbot-body">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`chat-msg ${m.from === "user" ? "chat-msg-user" : "chat-msg-bot"}`}
              >
                {m.text}
              </div>
            ))}
            {loading && <div className="chat-msg chat-msg-bot">Typing...</div>}
          </div>

          <form className="chatbot-input d-flex" onSubmit={handleSend}>
            <input
              className="form-control"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary ms-2" type="submit">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
