import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Добрый день, мне нужно знать, как работает процесс возврата.",
      sender: "client",
    },
    {
      id: 2,
      text: "Вы позвонили chatbot Supportzen. Меня зовут Иван.",
      sender: "operator",
    },
  ]);

  const quickReplies = [
    "Конечно! Я буду рад помочь вам.",
    "Приносим извинения за неудобства.",
    "Есть ли у вас какие-либо другие вопросы?",
  ];

  const [input, setInput] = useState("");
  const [status, setStatus] = useState("Открыт");
  const [logs, setLogs] = useState([]);
  const [category, setCategory] = useState("Платежи");
  const [subcategory, setSubcategory] = useState("Возвраты");

  // Логирование действий
  const logAction = (action) => {
    setLogs((prev) => [
      ...prev,
      { time: new Date().toLocaleTimeString(), action },
    ]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), text: input, sender: "operator" },
    ]);
    logAction(`Отправлено сообщение: "${input}"`);
    setInput("");
  };

  const insertQuickReply = (reply) => {
    setInput(reply);
    logAction(`Выбрана быстрая фраза: "${reply}"`);
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    logAction(`Статус изменён на: ${newStatus}`);
  };

  const handleCall = () => {
    logAction("Инициирован голосовой вызов с клиентом");
  };

  const handleConnect = () => {
    logAction("Соединение с другим оператором");
  };

  // Простая подсветка орфографических ошибок (длинные слова)
  const highlightTypos = (text) => {
    return text.split(" ").map((word, i) => {
      if (word.length > 12)
        return (
          <span key={i} className="typo">
            {word + " "}
          </span>
        );
      return word + " ";
    });
  };

  return (
    <div className="chat">
      {/* Заголовок чата */}
      <div className="chat-header">
        <div>
          <p className="chat-title">Как получить возврат средств? (MH5609)</p>
          <p className="chat-meta">
            Категория: <strong>{category}</strong> | Подкатегория:{" "}
            <strong>{subcategory}</strong>
          </p>
          <label>
            Статус:{" "}
            <select value={status} onChange={handleStatusChange}>
              <option>Открыт</option>
              <option>В обработке</option>
              <option>Решён</option>
              <option>Закрыт</option>
            </select>
          </label>
        </div>
        <div className="chat-actions">
          <button onClick={handleCall}>📞</button>
          <button onClick={handleConnect}>🔁</button>
          <button className="close">Закрыть</button>
        </div>
      </div>

      {/* Сообщения */}
      <div className="chat-body">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {highlightTypos(msg.text)}
          </div>
        ))}
      </div>

      {/* Быстрые фразы */}
      <div className="chat-replies">
        {quickReplies.map((reply, idx) => (
          <button key={idx} onClick={() => insertQuickReply(reply)}>
            {reply}
          </button>
        ))}
      </div>

      {/* Ввод */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>➡️</button>
      </div>

      {/* История действий */}
      {/* <div className="chat-logs">
        <h4>История действий</h4>
        <ul>
          {logs.map((log, i) => (
            <li key={i}>
              <strong>{log.time}</strong> — {log.action}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Chat;
