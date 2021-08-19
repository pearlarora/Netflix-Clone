import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY) {
      handleShow(true);
    }
    else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    }
  }, [])


  return (
    <div className={`nav ${show && 'nav-background'}`}>
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
        <svg
          stroke="currentColor"
          fill="white"
          stroke-width="0"
          viewBox="0 0 20 20"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="white"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path>
        </svg>
        <div className="accounts-menu">
          <img
            className="nav-avatar"
            src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
            alt="avatar"
          />
          <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M128 192l128 128 128-128z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
