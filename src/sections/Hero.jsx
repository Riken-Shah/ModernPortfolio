import React, { useState } from "react";
import aryan from "../Images/aryan.png";
import arrow from "../Images/arrow.svg";

// Function to return a text with shadow effect
function Word({ text, highlight = false, ...left }) {
  return (
    <div className="word">
      <div className="shadow"></div>
      <span className={highlight ? "highlight" : undefined} {...left}>
        {text}
      </span>
    </div>
  );
}

// Main Function
function Hero() {
  const [showImg, setShowImg] = useState(false);
  const goTo = (to) => 
    document.querySelector(`${to}`).scrollIntoView({ 
      behavior: 'smooth' 
    });
  return (
    <div className="hero-wrapper" id="home">
      <div className="main-heading">
        <div className={`self-pic${showImg ? " show" : ""}`}>
          <img src={aryan} alt="Aryan"></img>
        </div>
        {/* <Word
          text="I"
          highlight={true}
          onMouseEnter={() => setShowImg(true)}
          onMouseLeave={() => setShowImg(false)}
        /> */}
        <div className="word">
          <div className="shadow"></div>
          <a
            href="#/"
            className="highlight"
            onMouseEnter={() => setShowImg(true)}
            onMouseLeave={() => setShowImg(false)}
          >
            <span data-content="I" aria-hidden="true"></span>I
          </a>
          {/* <span className="highlight">I</span> */}
        </div>

        {"am designer working with startups to create great products"
          .split(" ")
          .map((word, index) => (
            <Word key={index} text={word} highlight={word === "I"} />
          ))}
      </div>

      <div className="button-wrapper">
        <button onClick={() => goTo("#projects")}>PROJECTS</button>
      </div>

      <div className="arrow-wrapper" onClick={() => goTo("#overview")}>
        <img src={arrow} alt="Arrow"></img>
      </div>
    </div>
  );
}

export default Hero;
