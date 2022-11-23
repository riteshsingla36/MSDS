import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./navbar.css";

const Navbar = ({home}) => {
  const [check, setCheck] = useState(home);
  const [cls, setCls] = useState(false);

  const [newCls, setNewCls] = useState(false);

  const changeClass = () => {
    if(window.innerWidth<500) {
      console.log("test")
      setCheck(true)
      setNewCls(false)
    }
    else {
      home? setCheck(true): setCheck(false);
    }
    if(window.scrollY >= 650 && window.innerWidth> 500) {
      setNewCls(true);
    }
    else {
      setNewCls(false);
    }
  }
  window.addEventListener("scroll", changeClass)
  return (
    <>
      <nav className="Header_nav__2YzZy">
        <button
          className="Button_button__2RxXb btn mobile-only Header_burgerBtn__2V9_x"
          aria-label="Open menu"
          onClick={() => setCls(prev => !prev)}
        >
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="36px" height="36px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
        </button>
        <div className={`Header_panel__2XDEn ${cls? "Header_isOpened__1PsSm": ""} ${newCls? "navback": ""}`}>
          <button
            className="Button_button__2RxXb btn mobile-only Header_closeBtn__wzNvb"
            aria-label="Close menu"
            onClick={() => setCls(prev => !prev)}
          >
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="36px" height="36px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
          </button>
          <ul className="Header_list__1jN0i" style={{color: `${check? (newCls? "rgb(226, 82, 57)":"white"):"rgb(226, 82, 57)"}`}}>
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
