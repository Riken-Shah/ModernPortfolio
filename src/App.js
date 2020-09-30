import React from "react";
import "./App.scss";
import { Navbar, Hero, Overview } from "./sections";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Overview />
    </div>
  );
}

export default App;
