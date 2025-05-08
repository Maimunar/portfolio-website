import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

import "./styles/AboutMe.css";

const skills = [
  "javascript",
  "node",
  "react",
  "nextJS",
  "trpc",
  "tailwindcss",
  "styled-components",
  "mongoDB",
  "SQL",
  "lighthouse",
  "cypress",
  "jest",
  "typescript",
  "zod",
  "vite",
  "react native",
  "express",
  "firebase",
  "prisma",
  "google pub/sub",
  "astro",
  "nvim",
  "golang",
  "gin",
  "python",
  "lua",
  "neovim",
  "docker",
  "kubernetes",
  "gitlab CI",
  "github actions",
  "unix",
];
const AboutMe = () => {
  return (
    <>
      <section id="about-me" />
      <section className="about-me-wrapper">
        <h1>About Me</h1>
        <section className="about-me-container">
          <section className="about-me-text-container">
            <p>
              My name is Aleksandar and I love tackling problems with software.
              I initially got into programming as an excuse to expand my math
              knowledge, but it quickly became clear that the world of software
              was where I belonged. With endless possibilities for making
              people's lives easier and so many exciting new technologies to
              learn, I've never looked back.
            </p>
            <p>
              While I started out in web development, I've recently been diving
              deeper into the world of unix commands, CLI tools, and nvim. It's
              been an amazing learning experience, opening up a whole new realm
              of possibilities for me.
            </p>
            <p>
              I've worked at several startups, always eager to take on the
              challenge of building a product from start to finish. It's the
              best way to learn, and I'm always hungry for new opportunities to
              grow my skills. Product and user analytics have been a particular
              interest of mine ever since I built an analytics solution from
              scratch for the company I currently work at.
            </p>
            <p>
              When I'm not busy coding, you might find me making music or
              checking out concerts around the Netherlands. And in my downtime,
              I love to unwind by gaming or hitting the gym.
            </p>
          </section>
          <section className="about-me-skills-container">
            <TagCloud
              options={(w: Window & typeof globalThis) => ({
                radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "slow",
                itemClass: "skill-item",
              })}
            >
              {skills}
            </TagCloud>
          </section>
        </section>
      </section>
    </>
  );
};

export default AboutMe;
