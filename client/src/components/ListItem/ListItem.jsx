import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./ListItem.scss";

const ListItem = ({ index }) => {
  const [isHover, setIsHover] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=hQXKyIG_NS4";

  return (
    <div
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src="https://indiehoy.com/wp-content/uploads/2019/09/Seinfeld-1200x701.jpg"
        alt="poster"
      />
      {isHover && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hr 14 mins</span>
              <span className="ageLimit">16+</span>
              <span>1989</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </div>
            <div className="genre">Comedy</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
