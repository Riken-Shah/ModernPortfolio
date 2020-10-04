import React, { useEffect, useRef, useState } from "react";

function Achievements() {
  const containerRef = useRef(null);
  const descRef = useRef(null);
  const [activeP, setActiveP] = useState(0);
  const [lastP, setLastP] = useState(-1);
  const [acknowledge, setAcknowledge] = useState(false);
  useEffect(() => {
    document.body.addEventListener("wheel", handleMouseWheel);
    return () => document.body.removeEventListener("wheel", handleMouseWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    let timeout = null;
    timeout = setTimeout(() => {
      document.body.addEventListener("wheel", handleMouseWheel);

      setAcknowledge(false);
    }, 800);
    return () => timeout && clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acknowledge]);
  const handleMouseWheel = (e) => {
    const mainDiv = containerRef.current || null;
    const descDiv = descRef.current || null;

    if (mainDiv && descRef) {
      const isMainDivEnd =
        e.deltaY > 0
          ? mainDiv.getBoundingClientRect().bottom + 200 <= window.innerHeight
          : mainDiv.getBoundingClientRect().top >= 200;
      if (
        (e.deltaY > 0 && activeP === descDiv.childElementCount - 1) ||
        (e.deltaY < 0 && activeP === 0)
      ) {
        document.body.classList.remove("stop");
      } else if (isMainDivEnd && Math.abs(e.wheelDeltaY) > 50) {
        document.body.classList.add("stop");
        elementToggle(e.deltaY > 0 ? "up" : "down");
      }
    }
  };

  const elementToggle = (type = "up") => {
    const div = descRef.current;
    const c = type === "up" ? +1 : -1;
    const nextActive =
      activeP + c >= 0 && activeP + c < div.childElementCount
        ? activeP + c
        : activeP;

    const nextPrev = nextActive - 1;
    setActiveP(nextActive);
    setLastP(nextPrev);
    document.body.removeEventListener("wheel", handleMouseWheel);
    setAcknowledge(true);
  };

  return (
    <div className="overview-wrapper achievements-wrapper" ref={containerRef}>
      <div className="item">
        <h1 data-text="Achievements" className="title">
          Achievements
        </h1>

        <div className="description" ref={descRef}>
          {paragraphData.map((item, index) => (
            <p
              key={index}
              className={`${index === activeP ? "active" : ""}${
                index === lastP ? " prev" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;

const paragraphData = [
  "1)  I’m Aryan Shah, a UI/UX & visual designer based in India. I design beautiful websites and apps which enables your business to grow exponentially.",
  "2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum molestiae dicta dolor, veniam nostrum placeat totam similique minimasint blanditiis at incidunt omnis aliquam sit assumenda atque. Voluptatem, amet.",
  "3)   I’m Aryan Shah, a UI/UX & visual designer based in India. I design beautiful websites and apps which enables your business to grow exponentially.",
];
