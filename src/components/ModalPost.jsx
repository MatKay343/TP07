import React from "react";
import "./../styles/app.css";

function ModalPost({ post, onClose }) {

  return (
    <div className="modal">
      <button onClick={onClose}>Cerrar</button>
      <img src={post.image} alt="cat enlarged" />
      <h2>{post.user}</h2>
      <p>{post.caption}</p>
      <p>❤️ {post.likes} likes</p>
      <div className="comments">
        {post.comments.map((c, i) => (
          <p key={i}>💬 {c}</p>
        ))}
      </div>
      <p>{post.date}</p>
    </div>
  );
}

export default ModalPost;
