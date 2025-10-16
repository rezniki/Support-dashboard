import React from "react";

const MetricsBar = ({ darkMode, toggleDark, focusMode, toggleFocus }) => {
    return (
        <div className="metrics-bar">
        <div className="metrics">
            <div className="metric-label">Новые запросы: <span>86</span></div>
            <div className="metric-label">Завершенные запросы: <span>24</span></div>
            <div className="metric-label">В обработке: <span>60</span></div>
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
