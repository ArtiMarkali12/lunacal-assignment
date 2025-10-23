import React, { useState } from "react";
import "./ProfileWidget.css";

function ProfileWidget() {
  const [connected, setConnected] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const handleConnect = () => {
    setConnected(!connected);
    alert(connected ? "❌ Disconnected!" : "✅ You are now connected!");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <p>Hi, I'm Arti Markali, a React Developer Intern passionate about frontend development.</p>;
      case "experiences":
        return <ul>
          <li>Internship at XYZ Company</li>
          <li>React Projects at ABC Startup</li>
          <li>Open Source Contributions</li>
        </ul>;
      case "recommended":
        return <p>Recommended by 10+ mentors and peers for excellent coding skills.</p>;
      default:
        return null;
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

      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab === "about" ? "active" : ""} onClick={() => setActiveTab("about")}>About Me</button>
        <button className={activeTab === "experiences" ? "active" : ""} onClick={() => setActiveTab("experiences")}>Experiences</button>
        <button className={activeTab === "recommended" ? "active" : ""} onClick={() => setActiveTab("recommended")}>Recommended</button>
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
}

export default ProfileWidget;
