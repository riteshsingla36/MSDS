import React from 'react'
import { useNavigate } from 'react-router-dom';
import AnimationDiv from '../../components/animation_div/AnimationDiv';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import "./contact.css"

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <AnimationDiv />
      <div className='main-tt'>
        <span onClick={() => navigate("/")} style={{ fontSize: "250px", cursor: "pointer" }}>Numbered</span>
        <div className='upper'>
          <p>We are an Amsterdam and New-york based studio with a strong french accent working all over the world.
            <br /> 
            <br /> 
            <br /> 
          We like to support our clients at all stages of their projects, don't hesitate to contact us!</p>
          <p>
            FOR PROJECTS INQUIRIES
            CONTACT@NUMBERED.COM
            <br />
            <br />
            WE ARE ALWAYS LOOKING FOR NEW TALENT, FEEL FREE TO CONTACT US!
            FOR JOBS AND INTERNSHIPS
            JOBS@NUMBERED.COM
            <br />
            <br />
            NUMBERED AMS
            HERENGRACHT 342-1
            1016CG AMSTERDAM
            THE (SUNNY) NETHERLANDS
            <br />
            <br />
            NUMBERED NYC
            29-35 9TH AVE,
            NEW YORK, NY 10014
            UNITED STATES
            <br />
            <br />
            CHAMBER OF COMMERCE (KVK) 81354789
          </p>
        </div>
        <div className='img-container'>
          <img src={require("../../images/contact.jpg")} alt="not found" />
          <span>
            <h3>Our <br /> Works</h3>
            <br />
            <span>Watch Our Case Studies</span>
          </span>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
