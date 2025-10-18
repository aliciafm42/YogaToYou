import React, { useEffect } from "react";

export default function Classes() {
  useEffect(() => {
    document.title = "YogaToYou | Classes";
  }, []);

  return (
    <div className="page classes">
      <h1>Our Classes</h1>
      <ul>
        <li>Morning Flow — Energize your day with mindful movement</li>
        <li>Evening Relaxation — Unwind and release tension</li>
        <li>Power Yoga — Build strength and flexibility</li>
        <li>Meditation — Find calm and clarity through guided practice</li>
      </ul>
    </div>
  );
}
