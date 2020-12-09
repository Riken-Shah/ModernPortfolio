import React, { useState } from "react";
import dribble from "../Images/dribble.svg";
import instagram from "../Images/instagram.svg";
import mail from "../Images/mail.svg";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // To solve the issue of hiding behind the block because of color
  const [lastBlockActive, setLastBlockActive] = useState(false);
  const goTo = (to) => {
    setNavbarOpen(false);
    setTimeout(() =>  document.querySelector(`${to}`).scrollIntoViewIfNeeded({ 
      behavior: 'smooth' 
    }), 1000)
   
  }
  return (
    <div className="nav-container">
      <a className="logo nav-item" href="hero">
        $HAH
      </a>
      <div className="connect">
        <a
          className="nav-item"
          href="https://www.instagram.com/aryan.ui.ux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>
        <a
          className="nav-item"
          href="https://dribbble.com/AryanUI"
          target="_blank"
          rel="noopener noreferrer"
        >
          DRIBBLE
        </a>
        <a
          className="nav-item"
          href="mailto:aryan.ui.ux@gmail.com?subject = Something&body = Message"
        >
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
            onClick={() => goTo(value.to)}
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
          <a href="mailto:aryan.ui.ux@gmail.com?subject = Something&body = Message">
            <img src={mail} alt="Mail" />
          </a>
          <a
            href="https://www.instagram.com/aryan.ui.ux/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://dribbble.com/AryanUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dribble} alt="Dribble" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Navbar Sections Raw Data
const navbarSections = [
  {
    title: "HOME",
    desc: "welcome to my portfolio!",
    to: "#home"
  },
  {
    title: "WORK",
    desc: "Click here to see my projects",
    to: "#projects"
  },
  {
    title: "SOLUTIONS",
    desc: "i design UI/UX app , website , and digital Strategies.",
    to: "#solutions"
  },
  {
    title: "ACHIVEMENTS",
    desc: "i design UI/UX app , website , and digital Strategies.",
    to: "#achivements"
  },
  {
    title: "Contact Me",
    desc:
      "The internet is not waiting for a new website. But your customers are waiting for a solution to their problem.",
      to:"#connect"
  },
];

export default Navbar;
