import React from "react";
import "./App.css";
import ProfileWidget from "./components/ProfileWidget";
import GalleryWidget from "./components/GalleryWidget";

function App() {
  return (
    <div className="app">
      <h1>Lunacal Assignment</h1>

      <div className="widgets">
        <ProfileWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;
