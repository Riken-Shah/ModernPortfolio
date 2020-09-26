import React from "react";
import "./App.scss";
import { Navbar, Hero } from "./sections";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
