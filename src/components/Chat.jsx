import React, { useState } from "react";

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Good day, I need to know how the refund process works.", sender: "client" },
        { id: 2, text: "You have reached Supportzen chatbot. My name is Yinka.", sender: "operator" },
    ]);

    const quickReplies = [
        "Sure! I'll be happy to help you out.",
        "We apologize for the inconvenience.",
        "Do you have any other questions?",
    ];

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { id: Date.now(), text: input, sender: "operator" }]);
        setInput("");
    };

    return (
        <div className="chat">
        <div className="chat-header">
            <div>
            <p>How can I get a refund? (MH5609)</p>
            </div>
            <div className="chat-actions">
            <button>📞</button>
            <button>✉️</button>
            <button className="close">Close Ticket</button>
            </div>
        </div>

        <div className="chat-body">
            {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.text}
            </div>
            ))}
        </div>

        <div className="chat-replies">
            {quickReplies.map((reply, idx) => (
            <button key={idx} onClick={() => setInput(reply)}>
                {reply}
            </button>
            ))}
        </div>

        <div className="chat-input">
            <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>➡️</button>
        </div>
        </div>
    );
};

export default Chat;
