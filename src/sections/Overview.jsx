import React from "react";

function Overview() {
  return (
    <div className="overview-wrapper" id="overview">
      <div className="item">
        <h1 data-text="Welcome" className="title">
          WELCOME
        </h1>

        <span className="description">
          I’m Aryan Shah, a UI/UX & visual designer based in India. I design
          beautiful websites and apps which enables your business to grow
          exponentially.
          <br />
          <span className="space-top">Want to talk? aryan.ui.ux@gmail.com</span>
        </span>
      </div>
      <div className="item">
        <h1 data-text="SERVICES" className="title">
          SERVICES
        </h1>
        <span className="description">
          A key component of the digital strategy: enjoying the idea of
          ​​creating things and improving the user experience through innovation
          and modern design.
        </span>
      </div>
    </div>
  );
}

export default Overview;
