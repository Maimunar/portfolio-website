import React from "react";
import "./styles/Introduction.css";
import DancingLines from "./dancing-lines/DancingLines";

const DownArrowSVG = () => (
  <svg width="111.36" height="111.36" xmlns="http://www.w3.org/2000/svg">
    <g className="layer">
      <title>Layer 1</title>
      <ellipse
        cx="55.52"
        cy="55.52"
        id="svg_1"
        rx="53.92"
        ry="53.92"
        stroke="#748a50"
        stroke-width="5"
      />
      <line
        fill="none"
        id="svg_2"
        stroke="#748a50"
        stroke-width="5"
        x1="55.56"
        x2="55.56"
        y1="20.56"
        y2="89.47"
      />
      <line
        fill="none"
        id="svg_3"
        stroke="#748a50"
        stroke-width="5"
        x1="54.72"
        x2="72.8"
        y1="89.68"
        y2="72.16"
      />
      <line
        fill="none"
        id="svg_4"
        stroke="#748a50"
        stroke-width="5"
        x1="59.48"
        x2="39.76"
        y1="89.68"
        y2="72.16"
      />
    </g>
  </svg>
);

const Introduction = () => {
  return (
    <section className="introduction">
      <DancingLines></DancingLines>

      <h1>Hello</h1>
      <h2>I am Alex</h2>
      <p>a Software Engineer</p>
      <a href="#about-me">
        <DownArrowSVG />
      </a>
    </section>
  );
};

export default Introduction;
