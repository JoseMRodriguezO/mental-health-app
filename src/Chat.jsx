import { useState } from "react";

export function Chat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const message = messageInput.value;
    setMessages([...messages, message]);
    messageInput.value = "";
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
