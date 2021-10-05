import React from "react";

import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://www.youtube.com/watch?v=hQXKyIG_NS4"
        className="video"
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
};

export default Watch;
