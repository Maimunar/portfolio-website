import React from "react";
import { GithubSVG, LinkedinSVG } from "./SVGs";

import "./styles/ContactMe.css";
const ContactMe = () => {
  return (
    <>
      <section id="contacts" />
      <section className="contacts-wrapper">
        <h1>Congratulations</h1>
        <h2>You made it to the end!</h2>
        <section className="contacts-text-container">
          <p>Lets keep in touch!</p>
          <p>Here's where you can find me:</p>
          <p>Email: aleksander.iv2000@gmail.com</p>
          <div className="social-container">
            <p>Github:</p>

            <a target="_blank" href="https://github.com/Maimunar">
              <GithubSVG />
            </a>
          </div>
          <div className="social-container">
            <p>Linkedin:</p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aleksandar-ivanov-1a35981a1/"
            >
              <LinkedinSVG />
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactMe;
