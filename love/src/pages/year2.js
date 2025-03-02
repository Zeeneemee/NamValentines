import React, { useState, useEffect } from "react";
import Announcement from "../components/announcement";
import TicketCard from "../components/ticketCard";
import { saveExperiencesBatch, getExperiences } from "../utils/firestoreservice";

const Year2 = () => {
  const [selectedExperiences, setSelectedExperiences] = useState({
    eat: null,
    play: null,
    do: null,
  });

  const [experiences, setExperiences] = useState([]);
  const [randomChoice, setRandomChoice] = useState(null);
  const sexy = [" You get: **One Free Hug & Kiss Anytime! 💋**", " You get: **spicy and hard tonight  🌶️🌶️", " You get: **Ready for the style you like 🐶 or 🚁", "You get: **Yuzu drink made by baby 👶", "You get: **Pick you up service from anywhere! 🌉🌇"]

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getExperiences();
      setExperiences(data);
    };
    fetchExperiences();
    setRandomChoice(Math.floor(Math.random() * sexy.length));
  }, []);

  const handleSelect = async (type, choice) => {
    setSelectedExperiences((prev) => ({
      ...prev,
      [type]: choice,
    }));
  };

  // **Save when all three are selected**
  useEffect(() => {
    const saveIfComplete = async () => {
      if (selectedExperiences.eat && selectedExperiences.play && selectedExperiences.do) {
        await saveExperiencesBatch(selectedExperiences);

        // Refresh Firestore experiences
        const updatedExperiences = await getExperiences();
        setExperiences(updatedExperiences);
      }
    };

    saveIfComplete();
  }, [selectedExperiences]);

  const eatActivities = [
    "Sushi Night 🍣", "Pizza Party 🍕", "Burger 🍔", "Pasta Evening 🍝",
    "Taco Fiesta 🌮", "BBQ  🍖", "Salad  🥗", "Steak Dinner 🥩",
    "Seafood  🦞", "Dim Sum Brunch 🥟", "Ramen Night 🍜",
    "Hot Pot Dinner 🍲", "Korean BBQ 🔥", "French Bistro 🥐",
    "Mediterranean Feast 🍇", "Sushi Roll-Making 🍣", "Dessert Date 🍰", "Ice Cream Social 🍦"
  ];

  const playActivities = [
    "Board Game Night 🎲", "Video Game Marathon 🎮", "Escape Room Adventure 🔐",
    "Movie Night 🎥", 
    "Arcade Fun 👾", "Bowling Night 🎳", "Mini-Golf Outing ⛳",
    "Card Games ♠️", "Chess Tournament ♟️", "Ping Pong Battle 🏓",
    "Dance-Off 💃", "Laser Tag 🔫", 
    "Crafting Session 🎨", "Outdoor Picnic Games 🌳"
  ];

  const doActivities = [
    "Movie Marathon 🎬", "Karaoke Night 🎤", "Stargazing Picnic 🌠",
    "Spa Day 🧖", "Beach Day 🏖️",
    "Art Gallery Visit 🖼️", "Live Concert 🎵", "Theater Show 🎭",
    "Cooking Class 🍳", "Wine Tasting 🍷", "Bike Ride 🚴",
    "Museum Tour 🏛️", "Park Picnic 🌳",
    "Farmers Market Trip 🥕", "Yoga Session 🧘", "Pottery Class 🏺",
  ];

  return (
    <div className="app">
      <Announcement text="It's numnum's birthday today 🎉 Don't know what to do or what to eat? Use this website!"/>

      <div className="web-body">
        <h2 className="header">🎟️ Choose Your Birthday Ticket 🎟️</h2>

        <div className="ticket-container">
          <TicketCard
            title="🍕 What to Eat?"
            options={eatActivities}
            redeemed={!!selectedExperiences.eat}
            onRedeem={(choice) => handleSelect("eat", choice)}
          />
          <TicketCard
            title="🎮 What to Play?"
            options={playActivities}
            redeemed={!!selectedExperiences.play}
            onRedeem={(choice) => handleSelect("play", choice)}
          />
          <TicketCard
            title="🎢 What to Do?"
            options={doActivities}
            redeemed={!!selectedExperiences.do}
            onRedeem={(choice) => handleSelect("do", choice)}
          />
        </div>

        {/* Show past experiences link */}
        <div className="memory-link">
          <a href="/memory-log">📜 View Past Experiences</a>
        </div>
        <div className="memory-link">
          <a href="/year1">🧠 Recall experiences</a>
        </div>

        {/* Show Mystery Ticket when all are selected */}
        {selectedExperiences.eat && selectedExperiences.play && selectedExperiences.do && (
          <div className="secret-ticket">
            🎁 **Mystery Ticket Unlocked!** 🎁  
            <p>{sexy[randomChoice]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Year2;
