import React from "react";
import avatar from "../assets/images/avatar.jpg";
import "../css/Home.css";
import Header from "../components/Header";

function Home() {
  return (
    <div className="about-container">
      <Header heading="Stephen Sarfo" subheading="Learn more about me" />

      <img src={avatar} className="profile-img" />
      <div className="about-info">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse interdum consectetur libero id faucibus nisl tincidunt
          eget nullam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Eget
          gravida cum sociis natoque penatibus. Ipsum a arcu cursus vitae. Mi
          eget mauris pharetra et ultrices neque ornare. At augue eget arcu
          dictum varius duis at. Ac tortor dignissim convallis aenean. Purus sit
          amet luctus venenatis lectus magna fringilla urna porttitor.
        </p>

        <p>
          Convallis tellus id interdum velit laoreet id donec ultrices
          tincidunt. Nulla facilisi nullam vehicula ipsum a arcu cursus.
          Tincidunt praesent semper feugiat nibh. Urna condimentum mattis
          pellentesque id nibh tortor. Neque laoreet suspendisse interdum
          consectetur libero id. Suscipit tellus mauris a diam maecenas sed enim
          ut. Ultricies leo integer malesuada nunc. Vitae semper quis lectus
          nulla at volutpat.
        </p>
      </div>
    </div>
  );
}

export default Home;
