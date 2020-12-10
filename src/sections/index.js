import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Overview from "./Overview";
import Project from "./Project";
import Achievements from "./Achievements";
import Solutions from "./Solutions";
import Connection from "./Connection";
const HomePage = () => (<div className="main-container">
      <Navbar />
      <Hero />
      <Overview />
      <Project />
      <Solutions />
      <Achievements />
      <Connection />
    </div>)
export default HomePage;
