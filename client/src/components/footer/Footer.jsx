import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer style={{backgroundColor: 'rgb(251, 250, 242)', color: 'rgb(91, 91, 92)'}}>
      <nav className="Footer_nav__33YjX">
        <div className="Footer_column__3d3oT">
          <h2>Let&#x27;s work together</h2>
          <p>
            <a
              href="mailto:info@manavsachdevdesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined1 inverted"
            >
              info@manavsachdevdesign.com
            </a>
          </p>
        </div>
        <div className="Footer_column__3d3oT">
          <p>
            <a className="underlined1 inverted" href="/projects/all">
              Work
            </a>
          </p>
          <p>
            <a className="underlined1 inverted" href="/about">
              About
            </a>
          </p>
          <p>
            <a className="underlined1 inverted" href="/contact">
              Contact
            </a>
          </p>
          {/* <p>
            <a className="underlined1 inverted" href="careers.html">
              Jobs
            </a>
          </p> */}
        </div>
        <div className="Footer_column__3d3oT">
          <p>
            <a
              href="https://www.facebook.com/manavsachdevdesignstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined1 inverted"
            >
              FaceBook
            </a>
            <br />
            <a
              href="https://www.instagram.com/manavsachdevdesignstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined1 inverted"
            >
              Instagram
            </a>
            <br />
            <a
              href="https://www.behance.net/manavs"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined1 inverted"
            >
              Behance
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/manavsachdevdesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined1 inverted"
            >
              Linkedin
            </a>
          </p>
        </div>
        <div className="Footer_column__3d3oT">
          <p>Manav Sachdev Design Studio | MSDS</p>
          <p>CoworkInsta 8th Floor</p>
          <p>Supermart-I DLF Phase IV</p>
          <p>Gurugram, Haryana</p>
        </div>
      </nav>
      <a aria-label="Back to home page" className="footer_main_logo_parent" href="/">
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1802.67 546.09"
            className="footer_main_logo"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{ __html: ".cls-2{fill:rgb(226, 82, 57);}" }}
              />
            </defs>
            <path
              className="cls-2"
              d="M465.86,172.33,298.06,396.08H278.92L114.82,171.6V449.07a97.16,97.16,0,0,1-97.15,97.14V31H129.52L290.71,252.55,451.88,31H563V546.21H465.86Z"
              transform="translate(-17.67 -12.62)"
            />
            <path
              className="cls-2"
              d="M886.57,154.67c-17.66-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.84,64.77,107.42,13.23,207.54,41.2,207.54,164.11,0,114.8-101.58,164.12-216.4,164.12-105.23,0-186.18-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.76,30,104.25,30,61.06,0,118.48-21.33,118.48-77.26,0-48.57-50.78-68.44-119.23-75.8C659.17,306.27,562,278.31,562,162.77c0-106,104.51-149.4,199.45-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
              transform="translate(-17.67 -12.62)"
            />
            <path
              className="cls-2"
              d="M1429.77,283.46c2.2,130.27-77.27,262-257.59,262H969.8V30.29h202.38c176.65,0,255.4,125.85,257.59,253.17M1066.21,452h106c117,0,163.38-85.38,161.19-169.27-2.21-80.23-49.3-160.43-161.19-160.43h-106Z"
              transform="translate(-17.67 -12.62)"
            />
            <path
              className="cls-2"
              d="M1726.85,154.67c-17.67-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.83,64.77,107.43,13.23,207.54,41.2,207.54,164.11,0,114.8-101.57,164.12-216.39,164.12-105.23,0-186.19-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.75,30,104.24,30,61.07,0,118.49-21.33,118.49-77.26,0-48.57-50.79-68.44-119.23-75.8-105.24-12.52-202.4-40.48-202.4-156,0-106,104.52-149.4,199.46-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
              transform="translate(-17.67 -12.62)"
            />
          </svg>
      </a>
      <div className="Footer_subfooter__HzC3Y">
        <span className="Footer_subfooterLeft__3DT1W">
          <span>All right reserved 2022</span>
          <a aria-label="Legals" href="legals.html">
            Legals
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
