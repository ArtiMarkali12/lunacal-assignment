import React, { useState } from "react";
import "./ProfileWidget.css";

function ProfileWidget() {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    if (!connected) {
      setConnected(true);
      alert("✅ You are now connected!");
    } else {
      setConnected(false);
      alert("❌ Disconnected!");
    }
  };

  return (
    <div className="profile-widget">
      <img
        src="https://img.freepik.com/free-photo/beautiful-young-woman-portrait-outdoor_624325-1081.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Profile"
        className="profile-img"
      />
      <h2>Arti Markali</h2>
      <p>React Developer Intern</p>
      <button
        className={`btn ${connected ? "connected" : ""}`}
        onClick={handleConnect}
      >
        {connected ? "Connected" : "Connect"}
      </button>
    </div>
  );
}

export default ProfileWidget;
