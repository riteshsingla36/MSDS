import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <ul>
          <li><Link to="/projects">WORK</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/jobs">JOBS</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
