import React from "react";

const MetricsBar = ({ darkMode, toggleDark, focusMode, toggleFocus }) => {
    return (
        <div className="metrics-bar">
        <div className="metrics">
            <div>Assigned: <span>86</span></div>
            <div>Solved: <span>24</span></div>
            <div>Pending: <span>60</span></div>
            <div>Escalated: <span>2</span></div>
            <div>Response Time (avg): <span>60s</span></div>
        </div>
        <div className="controls">
            <button onClick={toggleDark}>
            {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <button onClick={toggleFocus}>
            {focusMode ? "Exit Focus" : "Focus Mode"}
            </button>
        </div>
        </div>
    );
};

export default MetricsBar;
