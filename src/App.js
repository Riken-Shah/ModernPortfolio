import React from "react";
import "./App.scss";
import { Navbar, Hero, Overview, Project, Connection, Solutions, Achievements } from "./sections";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Overview />
      <Project />
      <Solutions />
      <Achievements />
      <Connection />
    </div>
  );
}

export default App;
