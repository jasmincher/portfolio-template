import React from "react";
import person from "../assets/images/person.jpg";
import Info from "../assets/JS/Info";
import "../css/Home.css";
import Header from "../components/Header";

function Home() {
  return (
    <div className="about-container">
      <Header heading="Jane Doe" subheading="Learn more about me" />
      
      {/* square images are ideal  */}

      <img src={person} alt="profile" className="profile-img" />

      <div className="about-info">
        <h1>About Me</h1>
        <p>{Info.home.about1}</p>
        <p>{Info.home.about2}</p>
      </div>
    </div>
  );
}

export default Home;
