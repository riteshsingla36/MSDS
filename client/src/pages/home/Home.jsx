import React, { useState } from 'react';
import {Link} from "react-router-dom";
import AnimationDiv from '../../components/animation_div/AnimationDiv';
import Navbar from '../../components/navbar/Navbar';
import "./home.css";

const Home = () => {
  let [a, setA] = useState(1);
  const changeImage = (id) => {
    setA(Number(id.split(" ")[1].split("-")[1]));
  }
  return (
    <div>
      <AnimationDiv/>
      <Navbar/>
      <div className='main-img-container'>
        <div className='home-img-container'>
          <div id="home-img home-1" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-2" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-3" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-4" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-5" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-6" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-7" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-8" onMouseOver={(e) => changeImage(e.target.id)}></div>
          <div id="home-img home-9" onMouseOver={(e) => changeImage(e.target.id)}></div>
        </div>
        <img src={require(`../../images/${a}.jpeg`)} alt="#" width={"100%"} height={"100%"} className="banner-img"/>
        <Link className='main-txt prevent-select' to="/">Numbered</Link>
        <Link to="/client/src/pages/about" className='bottom-txt prevent-select'>Amsterdam & New-york</Link>
      </div>
      <div className='second-container'>
          <p>
            We’re a full service creative agency, working globally with brands and businesses at all stages of their journey.
          </p>
          <Link to="/about">ABOUT US</Link>
      </div>
      <div className='third-container'>
        <div className='third-container-one'>
          <span><p>CASES <br></br>STUDIES</p></span>
          <span><Link>VIEW ALL</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Home
