import React from "react";

const TicketsList = () => {
    const tickets = [
        { id: 1, title: "How can I get a refund?", status: "assigned" },
        { id: 2, title: "My card got declined", status: "started" },
        { id: 3, title: "Wrong Package Delivery", status: "solved" },
    ];

    return (
        <div className="tickets-list">
        <h3>Tickets</h3>
        {tickets.map((ticket) => (
            <div key={ticket.id} className={`ticket ${ticket.status}`}>
            <div className="status-dot"></div>
            <div className="ticket-info">
                <h4>{ticket.title}</h4>
                <p>Short preview of message...</p>
            </div>
            </div>
        ))}
        </div>
    );
};

export default TicketsList;
