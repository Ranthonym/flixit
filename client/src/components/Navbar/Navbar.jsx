import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../images/logo.png";
import profile from "../../images/profile.jpeg";

import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    // cleanup
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Films</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={profile} alt="profile" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
