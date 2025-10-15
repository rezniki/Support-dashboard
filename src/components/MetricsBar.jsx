import React from "react";

const MetricsBar = ({ darkMode, toggleDark, focusMode, toggleFocus }) => {
    return (
        <div className="metrics-bar">
        <div className="metrics">
            <div className="metric-label">Назначенный: <span>86</span></div>
            <div className="metric-label">Решено: <span>24</span></div>
            <div className="metric-label">Ожидающие: <span>60</span></div>
            <div className="metric-label">Распространена: <span>2</span></div>
            <div className="metric-label">Время ответа: <span>60s</span></div>
        </div>
        <div className="controls">
            <button onClick={toggleDark}>
            {darkMode ? "Светлый режим" : "Темный режим"}
            </button>
            <button onClick={toggleFocus}>
            {focusMode ? "Выход из фокуса" : "Режим фокусировки"}
            </button>
        </div>
        </div>
    );
};

export default MetricsBar;
