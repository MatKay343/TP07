
import React from "react";
import "./../styles/app.css";

function Profile({ posts }) {
  return (
    <div className="profile">
      <img src="https://placekitten.com/100/100" alt="profile" />
      <h2>Usuario: cat_master</h2>
      <p>Biografía: Amante de los gatos 🐱</p>
      <p>Publicaciones: {posts.length}</p>
      <p>Seguidores: 120</p>
      <p>Seguidos: 80</p>
      <button>Editar perfil</button>
    </div>
  );
}

export default Profile;
