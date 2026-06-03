import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import ModalPost from "./components/ModalPost";
import { getCatImages } from "./api/catApi";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    getCatImages().then((data) => {
      const formattedPosts = data.map((item, index) => ({
        id: index,
        image: item.url,
        user: "catlover_" + index,
        caption: "Foto de mi gato #" + (index + 1),
        likes: Math.floor(Math.random() * 500),
        comments: ["Hermoso 😻", "Qué ternura 🐾"],
        date: "Junio 2026"
      }));
      setPosts(formattedPosts);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Feed posts={posts} onSelectPost={setSelectedPost} />
        <Profile posts={posts} />
      </div>
      {selectedPost && (
        <ModalPost post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

export default App;
