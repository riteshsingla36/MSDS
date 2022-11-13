import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./navbar.css";

const Navbar = () => {
  const [cls, setCls] = useState(false);
  return (
    <>
      <nav className="Header_nav__2YzZy">
        <button
          className="Button_button__2RxXb btn mobile-only Header_burgerBtn__2V9_x"
          aria-label="Open menu"
          onClick={() => setCls(prev => !prev)}
        >
          <svg
            width="18"
            height="9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h18v1H0V0zM0 4h18v1H0V4zM0 8h18v1H0V8z"
              fill="rgb(80, 48,19)"
            ></path>
          </svg>
        </button>
        <div className={`Header_panel__2XDEn ${cls? "Header_isOpened__1PsSm": ""}`}>
          <button
            className="Button_button__2RxXb btn mobile-only Header_closeBtn__wzNvb"
            aria-label="Close menu"
            onClick={() => setCls(prev => !prev)}
          >
            <svg
              width="18"
              height="9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0h18v1H0V0zM0 4h18v1H0V4zM0 8h18v1H0V8z"
                fill="#fff"
              ></path>
            </svg>
          </button>
          <ul className="Header_list__1jN0i">
          <li
              className="Header_link__2wQjN"
              
            >
              <Link className="underlined" to="/">
                Home
              </Link>
            </li>
            <li
              className="Header_link__2wQjN"
              
            >
              <Link className="underlined" to="/projects/all">
                Work
              </Link>
            </li>
            <li
              className="Header_link__2wQjN"
              
            >
              <Link className="underlined" to="/about">
                About
              </Link>
            </li>
            <li
              className="Header_link__2wQjN"
              
            >
              <Link className="underlined" to="/contact">
                Contact
              </Link>
            </li>
            {/* <li
              className="Header_link__2wQjN"
              
            >
              <a className="underlined" href="/projectdetails">
                Jobs
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
