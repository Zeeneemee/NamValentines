import React, { useState, useEffect } from "react";
import { getExperiences, clearExperiences } from "../utils/firestoreservice";
import Announcement from "../components/announcement";
import '../components/css/year2.css'
const MemoryLog = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getExperiences();
      setExperiences(data);
    };
    fetchExperiences();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown Date"; // Handle missing date
    const date = timestamp.seconds
      ? new Date(timestamp.seconds * 1000) // Convert Firestore timestamp
      : new Date(timestamp); // If already a valid date
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleClear = async () => {
    await clearExperiences();
    setExperiences([]);
  };

  return (
    <div className="memory-log">
      <Announcement text="Recall our past memories and create more 🎉" />
      <h2>📜 Past Birthday Experiences 📜</h2>

      {experiences.length === 0 ? (
        <p>No past experiences found.</p>
      ) : (
        <ul className="memory-list">
          {experiences.map((exp, index) => (
            <li key={index}>
              <strong>{formatDate(exp.date)}</strong> -  
              <span> 🍕 {exp.eat.toUpperCase()}, </span>
              <span> 🎮 {exp.play.toUpperCase()}, </span>
              <span> 🎢 {exp.do.toUpperCase()} </span>
            </li>
          ))}
        </ul>
      )}

      <button className="clear-btn" onClick={handleClear}>🗑️ Clear Memories</button>

      <div className="back-link">
        <a href="/year2">⬅️ Back to Tickets</a>
      </div>
    </div>
  );
};

export default MemoryLog;
