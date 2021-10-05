import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";

import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";

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