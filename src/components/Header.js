import React from "react";
import '../css/Header.css';

function Header(props) {
  return (
  <div className="header-container">
      <h1>{props.heading}</h1>
      <h6>{props.subheading}</h6>
  </div>
  );
}

export default Header;
