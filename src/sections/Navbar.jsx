import React from "react";

function Navbar() {
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
      <div className="hamburger">
        <div className="dash"></div>
        <div className="dash"></div>
      </div>
    </div>
  );
}

export default Navbar;
