import React from "react";

const Leaderboard = () => {
    const leaders = [
        { name: "Akin Majekodunmi", issues: 301 },
        { name: "Lola Ifeanyichukwu", issues: 289 },
        { name: "Corrine Amadi", issues: 280 },
    ];

    return (
        <div className="leaderboard">
        <h3>Leaderboard 🏅</h3>
        {leaders.map((l, i) => (
            <div key={i} className="leader">
            <span>{i + 1}.</span>
            <p>{l.name}</p>
            <span>{l.issues}</span>
            </div>
        ))}
        </div>
    );
};

export default Leaderboard;

