import React, { useEffect, useState } from "react";
import arrow from "../Images/arrow.svg";
import project1 from "../Images/project1.jpeg";
import ImageDistort from "react-image-list-distort";
import project2 from "../Images/project2.png";

const projectBreakpoint = 3;

function Project() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  useEffect(() => {
    // Remember You have to manually add this function to react-image-list-distort/index.js
    // Function that solves the black rect bug
    /*     
    global.bugFix = () => {
      this.onMouseEnter();
      this.onMouseOver(0);
      this._onMouseLeave()
    }*/
    global.bugFix && global.bugFix();
  }, [showMoreProjects]);

  return (
    <div className="project-wrapper" id="projects">
      <div className="main-projects" >
        {projectDetails.slice(0, projectBreakpoint).map((value, index) => (
          <ProjectBlock key={index} number={++index} {...value} active={true} />
        ))}

        <div className={`extra-projects${showMoreProjects ? " active" : ""}`}>
          {projectDetails
            .slice(projectBreakpoint, projectDetails.length)
            .map((value, index) => (
              <ProjectBlock
                key={index + projectBreakpoint}
                number={index + projectBreakpoint + 1}
                active={showMoreProjects}
                {...value}
              />
            ))}
        </div>
      </div>
      <div
        className={`hide${showMoreProjects ? " show" : ""}`}
        onClick={() => setShowMoreProjects((value) => !value)}
      >
        <img
          src={arrow}
          alt="Arrow"
          className={showMoreProjects ? "rotate" : ""}
        />
        <span>More projects</span>
      </div>
      <ImageDistort
        // Image Distort Library
        styles={{
          zIndex: 10,
        }}
        listRoot={".main-projects"}
        itemRoot={".project"}
        options={{
          effect: "redshift",
          strength: 0.15,
          geometry: {
            shape: "plane",
            width: 0.5,
            height: 0.5,
            radius: 0.5,
          },
        }}
      />
    </div>
  );
}

// Project Block
const ProjectBlock = ({ title, number, type, active, img }) => {
  return (
    <div className={`project${active ? " active" : ""}`}>
      <img src={img} alt={"Project-" + number + 1} />
      <span className="number">{number < 9 ? `0${number}` : number}</span>
      <div className="title-wrapper">
        <div className="mobile">
          <span className="number">{number < 9 ? `0${number}` : number}</span>

          <h1 className="title">{title}</h1>
        </div>

        <span className="type">{type}</span>
      </div>
    </div>
  );
};

// Project Raw Data
const projectDetails = [
  { title: "educational portal", type: "website design", img: project1 },
  { title: "shopping app", type: "app design", img: project1 },
  { title: "music app", type: "app design", img: project2 },
  { title: "music app", type: "app design", img: project1 },
  { title: "music app", type: "app design", img: project2 },
];
export default Project;
