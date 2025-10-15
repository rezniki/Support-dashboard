import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TicketsList from "./TicketsList";
import Chat from "./Chat";
import SuggestionsPanel from "./SuggestionsPanel";
import MetricsBar from "./MetricsBar";

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [focusMode, setFocusMode] = useState(false);

    return (
        <div className={`dashboard ${darkMode ? "dark" : ""}`}>
        <MetricsBar
            darkMode={darkMode}
            toggleDark={() => setDarkMode(!darkMode)}
            focusMode={focusMode}
            toggleFocus={() => setFocusMode(!focusMode)}
        />
        <div className="dashboard-body">
            {!focusMode && <Sidebar />}
            <TicketsList />
            <Chat />
            {!focusMode && <SuggestionsPanel />}
        </div>
        </div>
    );
};

export default Dashboard;
