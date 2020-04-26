import React from "react";
import Blurb from "../components/Blurb";
import project from "../assets/images/project.jpg";
import Header from "../components/Header";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function Projects() {
  return (
    <div>
      <Header heading="My Projects" subheading="Explore my projects" />

      <Blurb image={project} text={text} textPosition="left" />
      <Blurb image={project} text={text} textPosition="right" />
      <Blurb image={project} text={text} textPosition="left" />
    </div>
  );
}

export default Projects;
