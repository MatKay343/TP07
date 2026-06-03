import React from "react";
import "./../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Catstagram</h1>
      <input type="text" placeholder="Buscar usuario o hashtag..." />
      <div className="icons">
        <span>⚙️</span>
        <span>✉️</span>
        <button>➕ New Post</button>
      </div>
    </div>
  );
}

export default Header;
