import React from "react";
import "./../styles/app.css";

function Post({ post, onClick }) {
  // hecho por IA: aprendí que los props son como "pasar datos de un lado a otro".
  return (
    <div className="post" onClick={() => onClick(post)}>
      <img
        src={post.image}
        alt="cat"
        style={{ transform: "rotate(-3deg)" }} // requisito: rotar 3 grados
      />
      <div className="post-info">
        <p><strong>{post.user}</strong></p>
        <p>{post.caption}</p>
        <p>❤️ {post.likes} likes</p>
      </div>
    </div>
  );
}

export default Post;
