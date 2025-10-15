import React, { useState } from "react";

const TicketsList = () => {
    const [activeTab, setActiveTab] = useState("Assigned");

    const tickets = [
        { id: 1, title: "Как я могу получить возврат?", preview: "Добрый день, мне нужно знать, как работает процесс возврата...", status: "Assigned" },
        { id: 2, title: "Моя карта была отклонена", preview: "Доброе утро, карта отклонена и мне нужно...", status: "Started" },
        { id: 3, title: "Могу ли я получить до 90% скидку?", preview: "Я купил по крайней мере 50 элементов в этом месяце...", status: "Solved" },
        { id: 4, title: "Ваш процесс покупки ужасен", preview: "Привет, я коробка холодных шариков...", status: "Assigned" },
        { id: 5, title: "Неправильная доставка упаковки", preview: "Вместо этого мне доставили коробку с игрушками...", status: "Started" },
    ];

    const filteredTickets = tickets.filter((t) => t.status === activeTab);

    return (
        <div className="tickets-list">
        <div className="tickets-header">
            <div className="tickets-tabs">
                {["Assigned", "Started", "Solved"].map((tab) => (
                    <button
                    key={tab}
                    className={`tab ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab}
                    </button>
            ))}
            </div>
            
            <h3 className="tickets-title">Tickets</h3>
            
        </div>

        <div className="tickets-container">
            {filteredTickets.map((ticket) => (
            <div key={ticket.id} className={`ticket ${ticket.status.toLowerCase()}`}>
                <div className="status-dot"></div>
                <div>
                <p className="ticket-title">{ticket.title}</p>
                <p className="ticket-preview">{ticket.preview}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default TicketsList;






