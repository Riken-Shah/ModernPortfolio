import React, { useEffect, useState } from "react";
import arrow from "../Images/arrow.svg";
import AudiR8 from "../Images/AudiR8.png";
import CocoCola from "../Images/CocoColaNightPortal.png";
import EducationalPortal from "../Images/EducationalPortal.png";
import MusicAppConcept from "../Images/MusicApp.jpg";
import ECommerce from "../Images/E-CommerceApp.jpg";
import ElectronicApp from "../Images/ElectronicApp.jpg"
import ImageDistort from "react-image-list-distort";

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
    if(document.getElementsByTagName('canvas').length === 1)
    document.getElementsByTagName('canvas')[0].addEventListener("webglcontextlost", () => { window.location.reload(); });
    try{
    global.bugFix && global.bugFix();
    }
    catch{}
  }, [showMoreProjects]);

  return (
    <div className="project-wrapper" id="projects">
      <div className="main-projects" >
        <h1 className="phone-title">
          Project
        </h1>

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
        <span>{!showMoreProjects ? 'More projects':'Less projects'}</span>
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
          strength: 0.1,
          geometry: {
            shape: "plane",
            width: 0.7,
            height: 0.7,
            radius: 0.5,
            segmentsWidth: 500,
            segmentsHeight: 300
          },
        }}
      />
    </div>
  );
}

// Project Block
const ProjectBlock = ({ title, number, type, active, img, to }) => {
  return (
    <div className={`project${active ? " active" : ""}`} onClick={() => window.open(to, 'mywindow')}>
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
  { title: "Audi R8 Website", type: "website design", img: AudiR8, to: "https://www.instagram.com/p/CF1gEMOgZNj/?igshid=1wipjktdmznfy" },
  { title: "Coco Cola Night Portal", type: "website design", img: CocoCola, to: "https://www.instagram.com/p/CCaG6ZrA_x-/?igshid=hbf3dz3pw1rx" },
  { title: "Music App concept", type: "app design", img: MusicAppConcept, to: "https://www.instagram.com/p/CCp3HdbAH6q/?igshid=po5x1h2pklek" },
  { title: "Educational Portal", type: "website design", img: EducationalPortal, to: "https://www.instagram.com/p/B_zi-GADllA/?igshid=pbg8xalum5ox" },
  { title: "E-commerce app concept", type: "app design", img: ECommerce, to: "https://www.instagram.com/p/CCS6rYbgGqH/?igshid=hy1leio2g58y" },
  { title: "Electronic app concept", type: "app design", img: ElectronicApp, to: "https://www.instagram.com/p/B_5Kl3NDCpO/?igshid=x1xjeniy1w53" },

];
export default Project;


