import React, { useState } from "react";
import dribble from "../Images/dribble.svg";
import instagram from "../Images/instagram.svg";
import mail from "../Images/mail.svg";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // To solve the issue of hiding behind the block because of color
  const [lastBlockActive, setLastBlockActive] = useState(false);
  return (
    <div className="nav-container">
      <a className="logo nav-item" href="hero">
        $HAH
      </a>
      <div className="connect">
        <a className="nav-item" href="hero">
          INSTAGRAM
        </a>
        <a className="nav-item" href="hero">
          DRIBBLE
        </a>
        <a className="nav-item" href="hero">
          CONNECT
        </a>
      </div>
      <div
        className={`hamburger${lastBlockActive ? " change-color" : ""}`}
        onClick={() => setNavbarOpen((value) => !value)}
      >
        <div className={`dash${navbarOpen ? " active" : ""}`}></div>
        <div className={`dash${navbarOpen ? " active" : ""}`}></div>
      </div>
      <div className={`navbar-open${navbarOpen ? " active" : " deactivate"}`}>
        {navbarSections.map((value, index) => (
          <div
            className={`block${navbarOpen ? " active" : " deactivate"}`}
            key={index}
            onMouseEnter={
              index === 4 ? () => setLastBlockActive(true) : () => {}
            }
            onMouseLeave={
              index === 4 ? () => setLastBlockActive(false) : () => {}
            }
          >
            <div className="main-content">
              <span className="number">{index + 1}</span>
              <br />
              <span className="title">{value.title}</span>
            </div>
            <span className="description">{value.desc}</span>
          </div>
        ))}

        <div
          className={`block social-media-wrapper${
            navbarOpen ? " active" : " deactivate"
          }`}
        >
          <img src={mail} alt="Mail" />
          <img src={instagram} alt="Instagram" />
          <img src={dribble} alt="Dribble" />
        </div>
      </div>
    </div>
  );
}

// Navbar Sections Raw Data
const navbarSections = [
  {
    title: "Overview",
    desc:
      "welcome to my portfolio! take a look at my work overview. start here and discover here",
  },
  {
    title: "Work",
    desc: "Hey, my name is aryan shah based in india. UI and UX is my life",
  },
  {
    title: "Process",
    desc:
      "My Services are app design, website design, digital Strategies, UI and UX",
  },
  {
    title: "About me",
    desc: "Click here to see my projects",
  },
  {
    title: "Contact Me",
    desc:
      "The internet is not waiting for a new website. But your customers are waiting for a solution to their problem.",
  },
];

export default Navbar;
