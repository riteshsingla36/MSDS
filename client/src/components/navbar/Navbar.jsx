import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ home }) => {
  const [check, setCheck] = useState(home);
  const [navDiv, setNavDiv] = useState(true);
  const [cls, setCls] = useState(false);

  const [newCls, setNewCls] = useState(false);

  const changeClass = () => {
    if (window.innerWidth < 600) {
      console.log("test");
      setNavDiv(false);
      setCheck(true);
      setNewCls(false);
    } else {
      home ? setCheck(true) : setCheck(false);
      setNavDiv(true)
    }
    if (window.scrollY >= 650 && window.innerWidth > 500) {
      setNewCls(true);
    } else {
      setNewCls(false);
    }
  };
  window.addEventListener("scroll", changeClass);
  return (
    <>
      <nav className="Header_nav__2YzZy">
        <button
          className="Button_button__2RxXb btn mobile-only Header_burgerBtn__2V9_x"
          aria-label="Open menu"
          onClick={() => setCls((prev) => !prev)}
          style={{border: "2px solid rgb(226, 82, 57)", paddingBottom: "36px", borderRadius: '5px'}}
        >
          <div>
            <svg
              fill="rgb(226, 82, 57)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36px"
              height="36px"  
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg>
          
          </div>
        </button>
        <div
          className={`Header_panel__2XDEn ${
            cls ? "Header_isOpened__1PsSm" : ""
          } ${newCls ? "navback" : ""}`}
        >
          <button
            className="Button_button__2RxXb btn mobile-only Header_closeBtn__wzNvb"
            aria-label="Close menu"
            onClick={() => setCls((prev) => !prev)}
          >
            <svg fill="#ffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="36px" height="36px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
          </button>
          <ul
            className="Header_list__1jN0i"
            style={{
              color: `${
                check
                  ? newCls
                    ? "rgb(226, 82, 57)"
                    : "white"
                  : "rgb(226, 82, 57)"
              }`,
            }}
          >
            <li className="Header_link__2wQjN">
              <Link className="underlined" to="/">
                Home
              </Link>
            </li>
            <li className="Header_link__2wQjN work_hover" style={{ position: "relative" }}>
              <Link className="underlined" to="/projects/all">
                Work
              </Link>
              { navDiv ? <div
              className="hover_div"
              >
                <ul style={{ display: "grid", gap: "20rem" }}>
                  <li>
                    <Link to="/projects/all">ALL</Link>
                  </li>
                  <li>
                    <Link to={`/projects/brand-development`}>BRAND DEVELOPMENT</Link>
                  </li>
                  <li>
                    <Link to={`/projects/packaging-design`}>PACKAGING DESIGN</Link>
                  </li>
                  <li>
                    <Link to={`/projects/print-design`}>PRINT DESIGN</Link>
                  </li>
                  <li>
                    <Link to={`/projects/web-and-social-media`}>WEB & SOCIAL MEDIA</Link>
                  </li>
                </ul>
              </div> : <></>}
            </li>
            <li className="Header_link__2wQjN">
              <Link className="underlined" to="/about">
                About
              </Link>
            </li>
            <li className="Header_link__2wQjN">
              <Link className="underlined" to="/blogs">
                Blog
              </Link>
            </li>
            <li className="Header_link__2wQjN">
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
