import React, { useState, useEffect } from "react";

const ChatWindow = ({ user }) => {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  let ws;

  useEffect(() => {
    ws = new WebSocket(`ws://localhost:3000/ws/${user}`);

    ws.onmessage = (event) => {
      const encryptedMessage = event.data;
      // Decrypt the message using the Signal Protocol
      // TODO: Decrypt message here
      const decryptedMessage = encryptedMessage; // Replace with real decrypted message
      setChatLog((prevLog) => [...prevLog, { user: "Bob", message: decryptedMessage }]);
    };

    return () => {
      ws.close();
    };
  }, [user]);

  const sendMessage = () => {
    // Encrypt the message using the Signal Protocol
    // TODO: Encrypt message here
    const encryptedMessage = message; // Replace with real encrypted message
    ws.send(`Bob|${encryptedMessage}`);
    setChatLog((prevLog) => [...prevLog, { user: "Alice", message }]);
    setMessage("");
  };

  return (
    <div>
      <div>
        {chatLog.map((entry, index) => (
          <div key={index}>
            <strong>{entry.user}:</strong> {entry.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatWindow;
