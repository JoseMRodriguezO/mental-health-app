import { useState } from "react";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const users = ["Jose", "Mary"];

  const sendMessage = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const message = messageInput.value;
    const user = users[Math.floor(Math.random() * users.length)];
    setMessages([...messages, { user, message }]);
    messageInput.value = "";
  };

  return (
    <div className="chat-box">
      <div className="container">
        {users.map((user, index) => (
          <div
            key={index}
            className={`talk-bubble border round tri-right ${index % 2 === 0 ? "left-top" : "btm-left-in"}`}
          >
            <div className="talktext"></div>
            {messages.map(
              (message, index) =>
                message.user === user && (
                  <li key={index} className="message-item">
                    <strong>{message.user}:</strong> {message.message}
                  </li>
                )
            )}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="message-form">
        <input type="text" name="message" className="message-input" />
        <button type="submit" className="send-button btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
