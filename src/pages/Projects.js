import React from "react";
import Blurb from "../components/Blurb";
import Header from "../components/Header";
import Info from "../assets/JS/Info";

function Projects() {
  return (
    <div>
      <Header heading="My Projects" subheading="Explore my projects" />

      <Blurb 
      image={Info.projects.project1.image} 
      text={Info.projects.project1.text} 
      textPosition="left" />

      <Blurb image={Info.projects.project2.image} 
      text={Info.projects.project2.text} 
      textPosition="right" />

      <Blurb image={Info.projects.project3.image} 
      text={Info.projects.project3.text} 
      textPosition="left" />
    </div>
  );
}

export default Projects;
