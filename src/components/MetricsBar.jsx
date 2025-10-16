import React, { useMemo } from "react";
import Logo from '../assets/img/bot_zabot_logo.png';

const MetricsBar = ({ darkMode, toggleDark, focusMode, toggleFocus, tickets = [] }) => {
  // tickets — массив объектов вида:
  // { id, status: "Новые" | "В обработке" | "Завершенные", responseTime: number }

    const metrics = useMemo(() => {
        let newCount = 0;
        let processingCount = 0;
        let solvedCount = 0;
        let totalResponse = 0;
        let responseCount = 0;

        tickets.forEach((t) => {
        const status = (t.status || "").toLowerCase();

        if (status.includes("нов")) newCount++;
        else if (status.includes("обработ") || status.includes("текущ")) processingCount++;
        else if (status.includes("заверш") || status.includes("реш")) solvedCount++;

        if (t.responseTime && !isNaN(t.responseTime)) {
            totalResponse += t.responseTime;
            responseCount++;
        }
        });

        const avgResponse = responseCount > 0 ? Math.round(totalResponse / responseCount) : 0;

        return { newCount, processingCount, solvedCount, avgResponse };
    }, [tickets]);

    return (
        <div className="metrics-bar">
        <div className="metrics">
            <img className="metric-image" src={Logo} alt="Logo" />
            <div className="metric-logo">VTB Suppport</div>
            <div className="metric-label">
            Новые запросы: <span>{metrics.newCount}</span>
            </div>
            <div className="metric-label">
            Завершенные запросы: <span>{metrics.solvedCount}</span>
            </div>
            <div className="metric-label">
            В обработке: <span>{metrics.processingCount}</span>
            </div>
            <div className="metric-label">
            Время ответа: <span>{metrics.avgResponse}s</span>
            </div>
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
