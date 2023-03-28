import { useState } from "react";
import "./Chat.css"; // Import the CSS file

export function Chat() {
  const [messages, setMessages] = useState([]);
  const users = ["Jose", "Mary"]; // Define two fake users

  const sendMessage = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const message = messageInput.value;
    const user = users[Math.floor(Math.random() * users.length)]; // Pick a random user
    setMessages([...messages, { user, message }]);
    messageInput.value = "";
  };

  return (
    <div className="chat-box">
      <ul className="message-list">
        {messages.map((message, index) => (
          <li key={index} className="message-item">
            <strong>{message.user}:</strong> {message.message}
          </li>
        ))}
      </ul>
      <form onSubmit={sendMessage} className="message-form">
        <input type="text" name="message" className="message-input" />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
