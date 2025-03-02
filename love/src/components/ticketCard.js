import React, { useState } from "react";
import './css/year2.css'
const TicketCard = ({ title, options, redeemed, onRedeem }) => {
  const [chosen, setChosen] = useState(null);

  const handleClick = () => {
    if (!redeemed) {
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      setChosen(randomChoice);
      onRedeem(randomChoice);
    }
  };

  return (
    <div className={`ticket ${redeemed ? "redeemed" : ""}`} onClick={handleClick}>
      <h3>{title}</h3>
      {redeemed ? <p className="chosen-text">🎉 {chosen} 🎉</p> : <p>Click to reveal</p>}
    </div>
  );
};

export default TicketCard;
