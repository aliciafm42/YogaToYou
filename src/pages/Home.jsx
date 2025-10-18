import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "YogaToYou | Home";
  }, []);

  return (
    <div className="page home">
      <h1>Welcome to YogaToYou</h1>
      <p>
        YogaToYou brings mindfulness and balance to your daily life — anytime,
        anywhere. Explore classes designed to help you stretch, strengthen, and
        find peace.
      </p>
    </div>
  );
}
