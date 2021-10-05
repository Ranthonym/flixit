import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./home.scss";

import Featured from "../../Featured/Featured";
import List from "../../List/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <Featured type="movie" />
      <List />
      <List />
    </div>
  );
};

export default Home;
