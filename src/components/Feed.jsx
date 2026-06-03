import React from "react";
import Post from "./Post";
import "./../styles/app.css";

function Feed({ posts, onSelectPost }) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} onClick={onSelectPost} />
      ))}
    </div>
  );
}

export default Feed;
