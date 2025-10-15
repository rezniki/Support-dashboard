import React, { useState } from "react";

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Добрый день, мне нужно знать, как работает процесс возврата.", sender: "client" },
        { id: 2, text: "Вы позвонили chatbot Supportzen. Меня зовут Иван.", sender: "operator" },
    ]);

    const quickReplies = [
        "Конечно! Я буду рад помочь вам.",
        "Приносим извинения за неудобства.",
        "Есть ли у вас какие-либо другие вопросы?",
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
            <p>Как получить возврат средств? (MH5609)</p>
            </div>
            <div className="chat-actions">
            <button>📞</button>
            <button>✉️</button>
            <button className="close">Закрыть диалог</button>
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
            placeholder="Введите сообщение..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>➡️</button>
        </div>
        </div>
    );
};

export default Chat;
