import React from "react";
import Blurb from "../components/Blurb";
import Header from "../components/Header";

import Info from "../assets/JS/Info";

function Projects() {
  return (
    <div>
      <Header heading="My Projects" subheading="Explore my projects" />

      <Blurb 
      image={Info.Projects.project1.image} 
      text={Info.Projects.project1.text} 
      textPosition="left" />
      <Blurb image={Info.Projects.project2.image} 
      text={Info.Projects.project2.text} 
      textPosition="right" />
      <Blurb image={Info.Projects.project3.image} 
      text={Info.Projects.project3.text} 
      textPosition="left" />
    </div>
  );
}

export default Projects;
