import React from "react";

import "./styles/Projects.css";
import { ExternalLinkSVG, GithubSVG } from "./SVGs";

interface ProjectProps {
  alignment: "left" | "right";
  imgSrc: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  alignment,
  imgSrc,
  title,
  description,
  technologies,
  githubLink,
  externalLink,
}) => (
  <div className={`project project-${alignment}`}>
    {externalLink ? (
      <a target="_blank" href={externalLink}>
        <img src={imgSrc} className="project-image" />
      </a>
    ) : githubLink ? (
      <a target="_blank" href={githubLink}>
        <img src={imgSrc} className="project-image" />
      </a>
    ) : (
      <img src={imgSrc} className="project-image" />
    )}

    <div className="project-text-container">
      <h3 className="project-title">{title}</h3>
      <div className="project-description-container">
        <p>{description}</p>
      </div>
      <ul>
        {technologies.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
      <div className="project-links">
        {githubLink && (
          <a target="_blank" href={githubLink}>
            <GithubSVG />
          </a>
        )}
        {externalLink && (
          <a target="_blank" href={externalLink}>
            <ExternalLinkSVG />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <>
      <section id="projects" />
      <section className="projects-wrapper">
        <h1>Project Spotlight</h1>
        <Project
          alignment="left"
          title="The Onion Or Not"
          imgSrc="the-onion-or-not.png"
          description="A web-based game with over 13000 news headlines that lets you
                guess whether the article presented is a fake one (coming from
                the Onion) or a real one."
          technologies={["NextJS", "Typescript", "Prisma", "Firebase"]}
          externalLink="https://the-onion-or-not.vercel.app/"
        />
        <Project
          alignment="right"
          title="Impericion"
          imgSrc="ITS.jpeg"
          description="A fullstack band merchandise website with own authentication implementation and chat feature via web sockets, that offers various data filtering and visualizing operations."
          technologies={[
            "React",
            "Express",
            "Javascript",
            "Socket.io",
            "MongoDB",
          ]}
          githubLink="https://github.com/Maimunar/its-frontend"
        />
        <Project
          alignment="left"
          title="Developer Environment"
          imgSrc="dev-env.png"
          description="My keyboard-centered neovim/mac setup, fully themed with tokyonight"
          technologies={["Lua", "Bash", "Neovim", "zsh"]}
          githubLink="https://github.com/Maimunar/dev-env"
        />
      </section>
    </>
  );
};

export default Projects;
