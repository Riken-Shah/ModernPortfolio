import React from "react";
import arrow from "../Images/small-arrow.svg";
import aryan from "../Images/aryan.png";

function Connection() {
  return (
    <div className="connection-wrapper">
      <div>
        <span>Let's Talk</span>
        <img src={arrow} alt="Arrow" />
      </div>
      <div className="shadow"></div>
      <a
        data-text="aryan.ui.ux@gmail.com"
        href="mailto:aryan.ui.ux@gmail.com?subject = Something&body = Message"
      >
        aryan.ui.ux@gmail.com
      </a>
      <div className="picture">
        <img src={aryan} alt="Aryan" />
      </div>
    </div>
  );
}

export default Connection;
