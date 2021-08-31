import React, { useState, useEffect } from "react";
import "./css/Nav.css";

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-background"}`}>
      <div className="nav-left">
        <img
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <div className="nav-contents">
          <a href="" className="nav-items">
            Home
          </a>
          <a href="" className="nav-items">
            TV Shows
          </a>
          <a href="" className="nav-items">
            Movies
          </a>
          <a href="" className="nav-items">
            New &amp; Popular
          </a>
          <a href="" className="nav-items">
            My List
          </a>
        </div>
      </div>
      <div className="nav-right">
        <SearchIcon className="nav-icon" />
        <NotificationsIcon className="nav-icon" />
        
        <div className="accounts-menu">
          <img
            className="nav-avatar"
            src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
            alt="avatar"
          />
          <ArrowDropDownIcon className="nav-icon" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
