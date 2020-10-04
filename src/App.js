import React from "react";
import "./App.scss";
import { Navbar, Hero, Overview, Project, Connection } from "./sections";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Overview />
      <Project />
      <Connection />
    </div>
  );
}

export default App;
