import React from "react";
import "./styles/Introduction.css";
import DancingLines from "./dancing-lines/DancingLines";
import { DownArrowSVG } from "./SVGs";

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
