import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./home.scss";

import profile from "../images/profile.jpeg";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img width="100%" src={profile} alt="profile" />
    </div>
  );
};

export default Home;
