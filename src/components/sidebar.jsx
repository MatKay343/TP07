import React from "react";
import "./../styles/app.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>🏠 Home</li>
        <li>🔍 Explore</li>
        <li>🎬 Reels</li>
        <li>📺 IGTV</li>
        <li>🔔 Notifications</li>
      </ul>
    </div>
  );
}

export default Sidebar;
