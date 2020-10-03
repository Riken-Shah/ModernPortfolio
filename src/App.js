import React from "react";
import "./App.scss";
import { Navbar, Hero, Overview, Project } from "./sections";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Overview />
      <Project />
    </div>
  );
}

export default App;
