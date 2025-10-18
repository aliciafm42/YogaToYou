import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "YogaToYou | About";
  }, []);

  return (
    <div className="page about">
      <h1>About Us</h1>
      <p>
        At YogaToYou, we believe yoga is for everyone. Our mission is to make
        wellness accessible and personal. Whether you’re a beginner or an
        experienced yogi, our instructors will guide you on your journey toward
        harmony and strength.
      </p>
    </div>
  );
}
