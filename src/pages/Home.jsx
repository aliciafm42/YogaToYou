import React, { useState, useEffect } from "react";
import "../App.css";
import yoga1 from "../assets/yoga1.jpeg";
import yoga2 from "../assets/yoga2.jpeg";
import yoga3 from "../assets/yoga3.jpeg";

const Home = () => {
  const [message, setMessage] = useState("Inhale calmness...");

  useEffect(() => {
    const messages = [
      "Inhale calmness...",
      "Exhale stress...",
      "Find your balance..."
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to YogaToYou 🌿</h1>
      <p className="home-subtitle">{message}</p>

      <div className="image-gallery">
        <img src={yoga1} alt="Yoga pose 1" className="gallery-image" />
        <img src={yoga2} alt="Yoga pose 2" className="gallery-image" />
        <img src={yoga3} alt="Yoga pose 3" className="gallery-image" />
      </div>

      <p className="home-description">
        YogaToYou is a space for mindfulness, strength, and connection.
        Whether you're new to yoga or a daily practitioner, our community
        welcomes you with open arms.
      </p>
    </div>
  );
};

export default Home;
