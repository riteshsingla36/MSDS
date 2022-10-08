import React, { useState } from 'react';
import {Link} from "react-router-dom";
import AnimationDiv from '../../components/animation_div/AnimationDiv';
import Footer from '../../components/footer/Footer';
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
        <img src={require(`../../images/${a}.jpg`)} alt="#" width={"100%"} height={"100%"} className="banner-img"/>
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
          <span className='view'><Link>VIEW ALL</Link></span>
        </div>
        <div className='img-div-main'>
          <div className='img-div-one'>
            <img src={require(`../../images/9.jpg`)} alt="#" width="100%" height="100%"/>
          </div>
          <div className='img-div-two'>
            <img src={require(`../../images/5.jpg`)} alt="#" width="100%" max-height="50%"/>
            <img src={require(`../../images/8.jpg`)} alt="#" width="100%" height="50%"/>
          </div>
        </div>
      </div>
      <div className="forth-container">
        <div className="inside-four">
          <p>Collaborating with international brands, founders, start-ups, venture capitals, and more – producing, results-driven, unique products and experiences from conception to delivery.</p>
        </div>
      </div>
      <div className='five-container'>
        <img src={require("../../images/10.jpg")} alt="#" width="50%"/>
        <img src={require("../../images/8.jpg")} alt="#" width="50%" />
      </div>
      <div className="six-container">
        <p>With more than 10 years of experience in working with fashion and beauty brands, start-ups, and technology companies, we help brands succeed.</p>
      </div>
      <div className='seven-container'>
        <img src={require("../../images/11.jpg")} alt="#" width="100%"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
