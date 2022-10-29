import React from "react";
import "./about.css";
import "./css/0d2542c292c41cff19d7.css";
import "./css/3e520a9ee9ba77d53b1b.css";
import "./css/4df0a70341fe577ec304.css";
import "./css/50261a2a8fe2c7b041ae.css";
import "./css/8fcb77293d5f3067c722.css";
import "./css/b434fa6220e7ca6f2758.css";
import "./css/c2c9954a227782e6134c.css";
import "./css/ce610c75de66e0109297.css";
import "./css/d20aac4ad3356fdb832c.css";
import "./css/f98c79ad35ad3581a056.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import AnimationDiv from "../../components/animation_div/AnimationDiv";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <AnimationDiv />
      {/* <div class="about-margin">
        <Link className='text' to="/">Numbered</Link>
        <p className='text2'>Numbered is a full-service creative agency based in Amsterdam & New-york. We collaborate closely with our clients to tell their stories, engaging audiences by building unique experiences & products.</p>
        <div><picture><img class="pic1" src="https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?auto=compress,format&rect=267,0,998,1313&w=456&h=600" alt="" /></picture></div>
        <div ><picture><img class="pic2" src="https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?auto=compress,format&rect=0,18,2090,2750&w=456&h=600" alt="" /></picture></div>
        <p className='text3' >We like to support our clients at all stages of their projects from strategy, design and technical development. Insight driven and user centric. We strongly believe every brand and project is unique and should be tailor-made from industry leaders to early stage companies. We don’t do one size fits all.</p>
        <div class="services">
          <div className="line"><hr /></div>
        </div>
        <header class="about_header"></header>
        <section>
          <section className='service_section'>
            <h2 class="Listtitle_1">Our services</h2>
            <dl class="ListSlice_2">
              <dt>IDEAS & STRATEGY</dt>
              <p></p>
              <dd>CONSULTING</dd>
              <dd>POSITIONING</dd>
              <dd>E-COMMERCE STRATEGY</dd>
              <dd>BRAND STRATEGY</dd>
              <dd>BRAND CONTENT</dd>
              <dd>COPYWRITING</dd>
              <dd>TONE OF VOICE</dd>
            </dl>
            <dl class="ListSlice_2">
              <dt>CREATION & DESIGN</dt>
              <p></p>
              <dd>ART DIRECTION</dd>
              <dd>BRAND IDENTITY</dd>
              <dd>USER EXPERIENCE (UX)</dd>
              <dd>WIREFRAME & PROTOTYPING</dd>
              <dd>PRINT & PACKAGING</dd>
              <dd>CGI</dd>
              <dd>SOCIAL MEDIA ASSETS</dd>
              <dd>WEBSITE & E-COMMERCE</dd>
              <dd>VIDEOS</dd>
              <dd>MOBILE APP</dd>
              <dd>PHOTOGRAPHY</dd>
            </dl>
            <dl className="ListSlice_2">
              <dt>TECHNOLOGY</dt>
              <p></p>
              <dd>CREATIVE DEVELOPMENT</dd>
              <dd>FRONT-END DEVELOPMENT</dd>
              <dd>BACK-END DEVELOPMENT</dd>
              <dd>SHOPIFY DEVELOPMENT</dd>
              <dd>SHOPIFY PLUS</dd>
              <dd>HEADLESS SHOPIFY</dd>
              <dd>MOBILE & IOS WEB APP</dd>
            </dl>
          </section>
        </section>
      </div>
      <div>
          <section className='sec_logos'>
            <ul>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li class="selected_clients">
                <h2>Selected clients</h2>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
              <li>
                <a href="https://www.chanel.com" >
                  <img class="sec_image" src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format" alt="Chanel" />
                </a>
              </li>
            </ul>

          </section>
      </div>
      <div class="QuoteSlice_quote__1H6VJ QuoteSlice_isWhite__2CGiu"> 
        <section class="thankyou_quote">
          <blockquote>
            <p>
              Thanks 
              <br />
              to you, we also 
              <br />
              won a bunch of 
              <br />
              awards!*
            </p>
          </blockquote>
          <span>*We don't work only for awards, but they are the recognition of 
            <br /> all the effort that we put into our work.</span>
        </section>
      </div>
      <div class="three_pictures">
        <picture><img class="pic4" src="https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?auto=compress,format&rect=0,37,400,527&w=460&h=606" alt="" /></picture>
        <picture><img class="pic3" src="https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?auto=compress,format&rect=0,18,2090,2750&w=456&h=600" alt="" /></picture>
        <picture><img class="pic5" src="https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?auto=compress,format&rect=413,0,1093,1440&w=460&h=606" alt="" /></picture>
        <ul class="AwardsSlice_list__1KXRd">
          <li>35 AWWWARDS</li>
          <li>2 CANNES LIONS</li>
          <li>35 AWWWARDS</li>
          <li>2 CANNES LIONS</li>
          <li>35 AWWWARDS</li>
          <li>2 CANNES LIONS</li>
          <li>35 AWWWARDS</li>
          <li>2 CANNES LIONS</li>
          <li>35 AWWWARDS</li>
        </ul>
      </div>
      <div>
        <Link to="/">
          <picture><img class="pic6" src="https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?auto=compress,format" alt="" /></picture>
        </Link>
        <Link to="/">
        <figcaption class="figure_caption">
          <h3>OUR WORK</h3>
          <span>Watch our cases studies</span>
        </figcaption>
        </Link>
      </div> */}

      <header class="Hero_header__1cZhA about_hero__2OoYY">
        <h1>
          <a aria-label="Back to home page" href="/">
            <span class="Hero_logo__1aZ0K">
              <svg
                fill="none"
                viewBox="0 0 1189 202"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="M165.61 157.75l-.5-78c0-11.667-1.166-21.583-3.5-29.75-2.333-8.167-6.333-14.75-12-19.75-5.666-5-12.75-8-21.25-9-.333 0-.666-.083-1-.25-.166-.167-.166-.333 0-.5.334-.333.667-.5 1-.5 12.5 0 23.167-.333 32-1 9-.833 17-2.417 24-4.75.5-.167.834 0 1 .5.334.333.167.583-.5.75-3.333.833-6.333 3-9 6.5-2.666 3.333-4.916 8.917-6.75 16.75-1.833 7.667-2.75 21.083-2.75 40.25 0 35.167.084 60.083.25 74.75.334 14.5.917 29.833 1.75 46 .167 1 0 1.5-.5 1.5-.5.167-.916 0-1.25-.5-16.166-21.833-39.333-50.583-69.5-86.25-28.5-33.833-49.75-58-63.75-72.5-.166 7.167-.166 23.083 0 47.75.334 24.5.5 39.083.5 43.75 0 12.333 1.167 22.5 3.5 30.5 2.5 8 6.5 14.5 12 19.5s12.25 8.417 20.25 10.25c.834.167 1.167.5 1 1-.166.333-.5.417-1 .25-8.833-1.333-18.5-1.917-29-1.75s-20 1-28.5 2.5c-.666.167-1.083 0-1.25-.5-.166-.333.084-.583.75-.75 5-1.333 9-4.083 12-8.25 3-4.333 5.25-10.083 6.75-17.25 1.5-7.333 2.25-19.167 2.25-35.5 0-43.833-.333-70.833-1-81-.666-9.833-4.333-17.417-11-22.75-3.166-2.5-6.5-4.5-10-6-3.333-1.667-6.333-2.5-9-2.5-.666 0-1-.167-1-.5 0-.5.334-.75 1-.75 14 0 26.5-1.667 37.5-5 1.334-.333 2.334-.417 3-.25.667 0 1.25.583 1.75 1.75 8.167 12.167 30.75 40 67.75 83.5 22.667 26.667 40.667 45.917 54 57.75zM290.478 179v-9.25c-6.334 8.5-13.584 15.25-21.75 20.25-8.167 5-16.084 7.5-23.75 7.5-10.667 0-19-3.583-25-10.75-6-7.333-9-17.417-9-30.25l.25-28c0-2.167-.084-5.917-.25-11.25 0-5.333-.25-11.917-.75-19.75-.334-8-1.584-13.917-3.75-17.75-2-4-5.417-6-10.25-6-.5 0-.75-.167-.75-.5 0-.5.25-.75.75-.75 6.5 0 13.083-.667 19.75-2 6.666-1.5 11.75-3.417 15.25-5.75 1.5-1 2.083-.667 1.75 1-1 13.833-1.5 35.667-1.5 65.5l1 18.25c1.166 13.333 4 22.917 8.5 28.75s10.75 8.75 18.75 8.75c11 0 21.25-6.333 30.75-19l.5-36.75c0-15.167-.334-26.667-1-34.5-.667-7.833-2-13.583-4-17.25-2-3.833-5.417-5.75-10.25-5.75-.667 0-1-.167-1-.5s.333-.583 1-.75c6.666 0 12.833-.417 18.5-1.25 5.833-1 11.25-3.083 16.25-6.25a9.68 9.68 0 0 1 1.25-.5c.666-.333 1 .167 1 1.5-1 13.833-1.5 35.583-1.5 65.25 0 9.667.083 18.333.25 26 .333 7.5.916 13.333 1.75 17.5.833 4.167 2 7.667 3.5 10.5 1.666 2.833 5.25 5.083 10.75 6.75.5.167.75.417.75.75s-.25.5-.75.5c-13.834 0-25.167 1-34 3-1.334.167-2.084-.417-2.25-1.75-.5-2.833-.75-8-.75-15.5zM378.276 91.25V90c-.333 10.5-.5 24.333-.5 41.5 0 24 .5 39.917 1.5 47.75 1.167 7.833 3.75 12.667 7.75 14.5.5.167.75.417.75.75s-.25.5-.75.5c-15.666-1.833-29.75-1.667-42.25.5-.666.167-1.083 0-1.25-.5 0-.333.417-.583 1.25-.75 4.667-1 7.667-3.5 9-7.5 1.334-4.167 2.25-10.083 2.75-17.75.667-7.833 1-20.333 1-37.5v-11c0-5.333-.25-12.083-.75-20.25s-1.833-14.583-4-19.25c-2-4.833-5.416-7.25-10.25-7.25-.666 0-1-.167-1-.5 0-.5.334-.75 1-.75 5.834 0 12.084-.667 18.75-2 6.834-1.5 12.25-3.5 16.25-6 1.334-.833 1.917-.417 1.75 1.25l-1 23.5c6-7.833 12.584-13.917 19.75-18.25 7.334-4.5 14.417-6.75 21.25-6.75 3.5 0 7.25.833 11.25 2.5 4.167 1.5 7.834 4.417 11 8.75 3.334 4.167 5.584 9 6.75 14.5 6.834-8.333 13.834-14.667 21-19 7.167-4.5 14-6.75 20.5-6.75 10 0 17.584 3.417 22.75 10.25 5.334 6.667 8 16.25 8 28.75 0 26.167.084 43.417.25 51.75.334 8.167 1 14.667 2 19.5 1 4.667 2.417 8.5 4.25 11.5 2 2.833 5.084 4.833 9.25 6 .5.167.75.417.75.75s-.25.5-.75.5c-10-.5-21.083.5-33.25 3-1.5.167-2.333-.583-2.5-2.25-.5-2.5-.75-7.583-.75-15.25 0-3.5.084-11.5.25-24 .167-12.5.167-22 0-28.5-.166-6.5-.416-11.833-.75-16-1.833-23.167-10.166-34.75-25-34.75-3.5 0-7.583 1.167-12.25 3.5-4.5 2.167-9 6.417-13.5 12.75.667 2.833 1 6.333 1 10.5l-.25 32.75c-.5 19.5-.166 33.75 1 42.75 1.167 8.833 4.584 14.167 10.25 16 .334.167.5.5.5 1 0 .333-.333.417-1 .25-6-1-13.166-1.5-21.5-1.5-8.166 0-15.416.667-21.75 2-.666.167-1 0-1-.5 0-.333.334-.583 1-.75 3.667-1 6.25-3.167 7.75-6.5 1.667-3.5 2.834-9.25 3.5-17.25.667-8.167 1-20.083 1-35.75 0-9.833-.333-18.917-1-27.25-.833-9.833-3.333-17.667-7.5-23.5-4.166-6-9.583-9-16.25-9-9.666 0-18.333 5.417-26 16.25zM577.534 180.5c-7.833 4.667-14 9.667-18.5 15-.333.5-.667.667-1 .5s-.333-.583 0-1.25c2-3 3.333-7.167 4-12.5.667-5.5 1-27.917 1-67.25 0-30.167-.333-52.083-1-65.75-.5-13.833-1.667-23.583-3.5-29.25-1.833-5.833-5.333-8.75-10.5-8.75-.667 0-1-.167-1-.5 0-.5.333-.75 1-.75 6 0 12.167-.667 18.5-2 6.5-1.5 12-3.417 16.5-5.75.833-.5 1.417-.667 1.75-.5.333 0 .417.5.25 1.5L583.284 86c5.5-6.167 12.167-11.333 20-15.5 8-4.167 16.333-6.25 25-6.25 6.5 0 12.833 1.417 19 4.25 6.333 2.833 11.917 7 16.75 12.5 5 5.5 8.917 12.25 11.75 20.25 3 7.833 4.5 16.417 4.5 25.75 0 10.167-1.833 19.667-5.5 28.5-3.5 8.667-8.333 16.167-14.5 22.5-6.167 6.167-13.167 11-21 14.5-7.833 3.333-15.75 5-23.75 5-4.833 0-9.833-.75-15-2.25-5-1.333-9.5-3.333-13.5-6-3.833-2.833-7-5.75-9.5-8.75zm5.75-92.75V109c.167 21.333 2 37.417 5.5 48.25 2.167 7 5.667 13.417 10.5 19.25 4.833 5.667 9.5 9.583 14 11.75 4.667 2.167 8.167 3.417 10.5 3.75 2.333.167 3.917.25 4.75.25 10.167 0 18.167-3.417 24-10.25 6-6.833 9-17 9-30.5 0-8.833-1.333-17.917-4-27.25-2.5-9.5-6.083-18.167-10.75-26-4.5-7.833-9.75-14.083-15.75-18.75-6-4.833-12.167-7.25-18.5-7.25-5.167 0-10.333 1.417-15.5 4.25-5.167 2.667-9.75 6.417-13.75 11.25zM722.372 125.75c1.167 8 3.167 15.583 6 22.75 3 7.167 6.75 13.5 11.25 19 4.5 5.333 9.667 9.5 15.5 12.5 6 3 12.333 4.5 19 4.5 6.167 0 12-1.167 17.5-3.5 5.667-2.5 10-5.583 13-9.25.333-.5.667-.667 1-.5.5.167.5.583 0 1.25-6.833 7.5-14.583 13.583-23.25 18.25-8.5 4.5-17.167 6.75-26 6.75-3.333 0-7.25-.5-11.75-1.5-4.333-1-8.75-2.917-13.25-5.75s-8.917-6.75-13.25-11.75c-4.167-5.167-7.667-11.75-10.5-19.75-2.667-8-4-16.667-4-26 0-10.667 1.833-20.333 5.5-29 3.667-8.833 8.5-16.083 14.5-21.75 6-5.833 12.583-10.25 19.75-13.25 7.333-3 14.417-4.5 21.25-4.5 4.167 0 8.667.833 13.5 2.5 5 1.5 9.75 4.167 14.25 8s8.417 9 11.75 15.5c3.5 6.333 5.417 13.917 5.75 22.75l-.75 1c-5.167 1-17.5 2.917-37 5.75-19.333 2.667-35.917 4.667-49.75 6zm-.25-1.25c19-2 37.083-4.333 54.25-7 3-.5 5.25-1.417 6.75-2.75 1.667-1.333 2-4.583 1-9.75-.833-4.167-2.5-8.917-5-14.25-2.5-5.5-6.333-10.333-11.5-14.5-5-4.333-10.667-6.5-17-6.5-9.333 0-16.583 3.417-21.75 10.25s-7.75 16.583-7.75 29.25c0 5.667.333 10.75 1 15.25zM860.198 115.5v15.75c0 20.333.25 34.083.75 41.25.667 7.167 1.834 12.333 3.5 15.5 1.834 3 4.75 4.917 8.75 5.75.5.167.667.5.5 1 0 .333-.25.417-.75.25-6.666-.833-14.166-1.25-22.5-1.25-8.333-.167-16.25.417-23.75 1.75-.5.167-.75 0-.75-.5 0-.333.25-.583.75-.75 3.667-1 6.084-2.333 7.25-4 1.334-1.833 2.334-4.25 3-7.25.834-3.167 1.5-8.167 2-15 .667-7 1-19.25 1-36.75V119.5c0-5.667-.25-12.583-.75-20.75-.5-8.333-1.833-14.583-4-18.75-2-4.167-5.416-6.25-10.25-6.25-.5 0-.75-.167-.75-.5 0-.5.25-.75.75-.75 5.5 0 11.584-.583 18.25-1.75 6.834-1.333 12.417-3.333 16.75-6 .167-.167.5-.333 1-.5s.75.333.75 1.5c-1 18-1.5 33.333-1.5 46 5.834-15.5 13.5-27.5 23-36s19.25-12.333 29.25-11.5c.667 0 1 .417 1 1.25 0 13.667 1 25.417 3 35.25.167.167.084.333-.25.5-.166.167-.333.167-.5 0-2.333-5.167-5.5-9.167-9.5-12-3.833-2.833-8.166-4.25-13-4.25-7.166 0-13.75 2.583-19.75 7.75-5.833 5.167-10.25 12.75-13.25 22.75zM944.784 125.75c1.167 8 3.167 15.583 6 22.75 3 7.167 6.75 13.5 11.25 19 4.5 5.333 9.667 9.5 15.5 12.5 6 3 12.333 4.5 19 4.5 6.166 0 11.996-1.167 17.496-3.5 5.67-2.5 10-5.583 13-9.25.34-.5.67-.667 1-.5.5.167.5.583 0 1.25-6.83 7.5-14.58 13.583-23.25 18.25-8.496 4.5-17.163 6.75-25.996 6.75-3.333 0-7.25-.5-11.75-1.5-4.333-1-8.75-2.917-13.25-5.75s-8.917-6.75-13.25-11.75c-4.167-5.167-7.667-11.75-10.5-19.75-2.667-8-4-16.667-4-26 0-10.667 1.833-20.333 5.5-29 3.667-8.833 8.5-16.083 14.5-21.75 6-5.833 12.583-10.25 19.75-13.25 7.333-3 14.417-4.5 21.25-4.5 4.167 0 8.667.833 13.496 2.5 5 1.5 9.75 4.167 14.25 8s8.42 9 11.75 15.5c3.5 6.333 5.42 13.917 5.75 22.75l-.75 1c-5.16 1-17.5 2.917-36.996 5.75-19.333 2.667-35.917 4.667-49.75 6zm-.25-1.25c19-2 37.083-4.333 54.25-7 2.996-.5 5.246-1.417 6.746-2.75 1.67-1.333 2-4.583 1-9.75-.83-4.167-2.5-8.917-5-14.25-2.496-5.5-6.329-10.333-11.496-14.5-5-4.333-10.667-6.5-17-6.5-9.333 0-16.583 3.417-21.75 10.25s-7.75 16.583-7.75 29.25c0 5.667.333 10.75 1 15.25zM1151.49 172.75c-5.83 7.833-12.91 13.917-21.25 18.25-8.16 4.333-16.75 6.5-25.75 6.5-6.83 0-13.41-1.667-19.75-5-6.33-3.5-11.91-8.25-16.75-14.25-4.83-6.167-8.58-13.167-11.25-21-2.66-8-4-16.167-4-24.5 0-8.5 1.34-16.917 4-25.25 2.84-8.333 7.17-15.667 13-22 5.84-6.5 12.75-11.667 20.75-15.5 8.17-3.833 16.42-5.75 24.75-5.75 7.67 0 14.92 1.667 21.75 5 6.84 3.167 11.5 6.5 14 10-.16-18.167-.66-31.917-1.5-41.25-.66-9.5-2-16.333-4-20.5-1.83-4.167-5-6.25-9.5-6.25-.66 0-1-.167-1-.5 0-.5.34-.75 1-.75 16.34 0 27.84-2.75 34.5-8.25 1.5-1.333 2.17-.917 2 1.25-.83 14.167-1.25 47.167-1.25 99 0 18 .17 32.333.5 43 .34 10.667.92 19.333 1.75 26 1 6.5 2.42 11.333 4.25 14.5 2 3 5.25 5.167 9.75 6.5.5.167.75.417.75.75s-.25.5-.75.5c-11.33 0-22.33 1-33 3-1.33.167-2.08-.5-2.25-2-.5-3.833-.75-11-.75-21.5zm0-2.25l.5-23c0-16.667-1.58-30-4.75-40-3.5-10.667-9.33-19.583-17.5-26.75-8-7.333-17.16-11-27.5-11-10.16 0-18.08 3.417-23.75 10.25-5.66 6.667-8.5 15.667-8.5 27 0 9.667 1.75 19.667 5.25 30s7.75 19.333 12.75 27c5.17 7.5 10.67 13 16.5 16.5 5.84 3.5 11.5 5.25 17 5.25s11-1.25 16.5-3.75c5.67-2.5 10.17-6.333 13.5-11.5z"></path>
                </g>
              </svg>
            </span>
          </a>
        </h1>
        <p>
          Numbered is a full-service creative agency based in Amsterdam &amp;
          New-york. We collaborate closely with our clients to tell their
          stories, engaging audiences by building unique experiences &amp;
          products.
        </p>
        <div class="about_images__1646e">
          <div
            class="about_image1__3649O"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "131.579%" }}
            ></div>
            <picture>
              <source
                srcset="https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=320&amp;rect=267,0,998,1313&amp;auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=620&amp;rect=267,0,998,1313&amp;auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=960&amp;rect=267,0,998,1313&amp;auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1280&amp;rect=267,0,998,1313&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1600&amp;rect=267,0,998,1313&amp;auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1920&amp;rect=267,0,998,1313&amp;auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=2240&amp;rect=267,0,998,1313&amp;auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=2560&amp;rect=267,0,998,1313&amp;auto=format,compress 2560w"
                sizes="33.333333333333336vw"
              />
              <img
                src="https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?auto=compress,format&amp;rect=267,0,998,1313&amp;w=456&amp;h=600"
                alt=""
                loading="lazy"
                decoding="async"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  opacity: "1",
                  transition:
                    "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s",
                }}
              />
            </picture>
            <noscript>
              <picture>
                <source
                  srcset="https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=320&rect=267,0,998,1313&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=620&rect=267,0,998,1313&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=960&rect=267,0,998,1313&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1280&rect=267,0,998,1313&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1600&rect=267,0,998,1313&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1920&rect=267,0,998,1313&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=2240&rect=267,0,998,1313&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=2560&rect=267,0,998,1313&auto=format,compress 2560w"
                  sizes="33.333333333333336vw"
                />
                <img
                  loading="lazy"
                  sizes="33.333333333333336vw"
                  srcset="https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=320&rect=267,0,998,1313&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=620&rect=267,0,998,1313&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=960&rect=267,0,998,1313&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1280&rect=267,0,998,1313&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1600&rect=267,0,998,1313&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=1920&rect=267,0,998,1313&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=2240&rect=267,0,998,1313&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?w=2560&rect=267,0,998,1313&auto=format,compress 2560w"
                  src="https://images.prismic.io/autumn-amsterdam/154f2bf3-9cda-4c33-85b9-c157d2c3e8dc_DSCF6395.jpg?auto=compress,format&rect=267,0,998,1313&w=456&h=600"
                  alt=""
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 1,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </picture>
            </noscript>
          </div>
          <div
            class="about_image2__2vLxz"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "131.579%" }}
            ></div>
            <picture>
              <source
                srcset="https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=320&amp;rect=0,18,2090,2750&amp;auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=620&amp;rect=0,18,2090,2750&amp;auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=960&amp;rect=0,18,2090,2750&amp;auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1280&amp;rect=0,18,2090,2750&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1600&amp;rect=0,18,2090,2750&amp;auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1920&amp;rect=0,18,2090,2750&amp;auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=2240&amp;rect=0,18,2090,2750&amp;auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=2560&amp;rect=0,18,2090,2750&amp;auto=format,compress 2560w"
                sizes="33.333333333333336vw"
              />
              <img
                src="https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?auto=compress,format&amp;rect=0,18,2090,2750&amp;w=456&amp;h=600"
                alt=""
                loading="lazy"
                decoding="async"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  opacity: 1,
                  transition:
                    "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s",
                }}
              />
            </picture>
            <noscript>
              <picture>
                <source
                  srcset="https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=320&rect=0,18,2090,2750&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=620&rect=0,18,2090,2750&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=960&rect=0,18,2090,2750&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1280&rect=0,18,2090,2750&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1600&rect=0,18,2090,2750&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1920&rect=0,18,2090,2750&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=2240&rect=0,18,2090,2750&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=2560&rect=0,18,2090,2750&auto=format,compress 2560w"
                  sizes="33.333333333333336vw"
                />
                <img
                  loading="lazy"
                  sizes="33.333333333333336vw"
                  srcset="https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=320&rect=0,18,2090,2750&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=620&rect=0,18,2090,2750&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=960&rect=0,18,2090,2750&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1280&rect=0,18,2090,2750&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1600&rect=0,18,2090,2750&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=1920&rect=0,18,2090,2750&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=2240&rect=0,18,2090,2750&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?w=2560&rect=0,18,2090,2750&auto=format,compress 2560w"
                  src="https://images.prismic.io/autumn-amsterdam/9ed13e11-10cb-4243-8b6c-757690e801dc_NR+S20+Look+12.jpg?auto=compress,format&rect=0,18,2090,2750&w=456&h=600"
                  alt=""
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 1,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </picture>
            </noscript>
          </div>
        </div>
        <p>
          We like to support our clients at all stages of their projects from
          strategy, design and technical development. Insight driven and user
          centric. We strongly believe every brand and project is unique and
          should be tailor-made from industry leaders to early stage companies.
          We don’t do one size fits all.
        </p>
      </header>

      <section>
        <section class="ListSlice_main__mKXcM">
          <h2 class="ListSlice_title__3zHBd">Our services</h2>
          <dl class="ListSlice_list__3B0uk">
            <dt>Ideas &amp; Strategy</dt>
            <p></p>
            <dd>Consulting</dd>
            <dd>Positioning</dd>
            <dd>E-commerce strategy</dd>
            <dd>Brand strategy</dd>
            <dd>Brand content</dd>
            <dd>Copywriting</dd>
            <dd>Tone of voice</dd>
          </dl>
          <dl class="ListSlice_list__3B0uk">
            <dt>Creation &amp; Design</dt>
            <p></p>
            <dd>Art Direction</dd>
            <dd>Brand identity</dd>
            <dd>User Experience (UX)</dd>
            <dd>User Interface (UI)</dd>
            <dd>Wireframe &amp; Prototyping</dd>
            <dd>Print &amp; Packaging</dd>
            <dd>CGI </dd>
            <dd>Social Media assets</dd>
            <dd>Website &amp; E-commerce</dd>
            <dd>Videos</dd>
            <dd>Mobile App</dd>
            <dd>Photography</dd>
          </dl>
          <dl class="ListSlice_list__3B0uk">
            <dt>Technology</dt>
            <p></p>
            <dd>Creative Development</dd>
            <dd>Front-end development</dd>
            <dd>Back-end development</dd>
            <dd>Shopify development</dd>
            <dd>Shopify Plus</dd>
            <dd>Headless Shopify</dd>
            <dd>Mobile &amp; IOS web app</dd>
          </dl>
        </section>
        <section class="ClientsSlice_main__1EeZO">
          <ul>
            <li>
              <a
                href="https://www.chanel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/45cf01dc-5eb1-4098-8303-7853ab7f577c_chanel.svg?auto=compress,format"
                  alt="Chanel"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.louisvuitton.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/f6392363-d9b1-4ff6-9b06-2f570d4950b2_louis-vuitton.svg?auto=compress,format"
                  alt="Louis Vuitton"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.dyson.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/6dfc7af7-757f-49d5-896a-57826af9a856_dyson.svg?auto=compress,format"
                  alt="Dyson"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.jeanpaulgaultier.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/1304a980-07dc-4a98-b6a5-7c408de0e7f7_jean-paul-gaultier.svg?auto=compress,format"
                  alt="Jean Paul Gautlier"
                />
              </a>
            </li>
            <li>
              <a
                href="http://made.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/19a5a790-d2b6-490a-b0d6-f6e90c49b0b4_made.svg?auto=compress,format"
                  alt="Made.com"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/ea7721a7-05e4-4f67-92c0-16e86ca60a6e_google.svg?auto=compress,format"
                  alt="google"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.printemps.com/fr/fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/cecc2502-16e1-4ed1-af69-dd6350b8243d_printemps.svg?auto=compress,format"
                  alt="Printemps"
                />
              </a>
            </li>
            <li class="ClientsSlice_title__2yFoa">
              <h2>Selected clients</h2>
            </li>
            <li>
              <a
                href="https://edition.cnn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/bcc808fb-451f-4558-aec9-5b442ed6dc92_cnn.svg?auto=compress,format"
                  alt="CNN"
                />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  src="https://images.prismic.io/autumn-amsterdam/3913867d-b7ca-43f4-9169-a549c22a11d2_typology.svg?auto=compress,format"
                  alt="Typology"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.sezane.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/0f78556f-13fb-4d39-912a-1e644270c601_sezane.svg?auto=compress,format"
                  alt="Sezane"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.mollie.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/53c29541-0962-450b-94f8-93c35a02f8a7_mollie.svg?auto=compress,format"
                  alt="Mollie"
                />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  src="https://images.prismic.io/autumn-amsterdam/02e90e59-9e1d-44dc-8ef4-5a4325a0b7af_superfluid.svg?auto=compress,format"
                  alt="Superfluid"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.ubisoft.com/en-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/autumn-amsterdam/d84b8c63-6c05-43b9-838d-bf219f889778_ubisoft.svg?auto=compress,format"
                  alt="Ubisoft"
                />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  src="https://images.prismic.io/autumn-amsterdam/0a602e76-15ab-44f1-924c-69776d42dffd_miista.svg?auto=compress,format"
                  alt="Miista"
                />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  src="https://images.prismic.io/autumn-amsterdam/4243cfd6-5f19-4bac-a310-0bd2b8a6701d_cann.svg?auto=compress,format"
                  alt="Drink Cann"
                />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  src="https://autumn-amsterdam.cdn.prismic.io/autumn-amsterdam/43f5e75a-36ba-4f99-8880-c5c4896caf14_veloretti.svg"
                  alt="Veloretti"
                />
              </a>
            </li>
          </ul>
        </section>
        <section class="QuoteSlice_quote__1H6VJ QuoteSlice_isWhite__2CGiu">
          <blockquote>
            <p>
              Thanks <br />
              to you, we also <br />
              won a bunch of <br />
              awards!*
            </p>
          </blockquote>
          <span>
            *We don&#x27;t work only for awards, but they are the recognition of
            all the effort that we put into our work.
          </span>
        </section>
        <section class="AwardsSlice_main__1aMoU">
          <div class="AwardsSlice_images__3BK3b">
            <div
              class="AwardsSlice_image__1L8sw AwardsSlice_image1__1DKmJ"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div
                aria-hidden="true"
                style={{ width: "100%", paddingBottom: "131.739%" }}
              ></div>
              <picture>
                <source
                  srcset="https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=320&amp;rect=551,0,820,1080&amp;auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=620&amp;rect=551,0,820,1080&amp;auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=960&amp;rect=551,0,820,1080&amp;auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1280&amp;rect=551,0,820,1080&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1600&amp;rect=551,0,820,1080&amp;auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1920&amp;rect=551,0,820,1080&amp;auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=2240&amp;rect=551,0,820,1080&amp;auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=2560&amp;rect=551,0,820,1080&amp;auto=format,compress 2560w"
                  sizes="33.333333333333336vw"
                />
                <img
                  src="https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?auto=compress,format&amp;rect=551,0,820,1080&amp;w=460&amp;h=606"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', objectFit: 'cover', objectPosition: "center center", opacity: '1', transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s" }}
                />
              </picture>
              <noscript>
                <picture>
                  <source
                    srcset="https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=320&rect=551,0,820,1080&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=620&rect=551,0,820,1080&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=960&rect=551,0,820,1080&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1280&rect=551,0,820,1080&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1600&rect=551,0,820,1080&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1920&rect=551,0,820,1080&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=2240&rect=551,0,820,1080&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=2560&rect=551,0,820,1080&auto=format,compress 2560w"
                    sizes="33.333333333333336vw"
                  />
                  <img
                    loading="lazy"
                    sizes="33.333333333333336vw"
                    srcset="https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=320&rect=551,0,820,1080&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=620&rect=551,0,820,1080&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=960&rect=551,0,820,1080&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1280&rect=551,0,820,1080&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1600&rect=551,0,820,1080&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=1920&rect=551,0,820,1080&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=2240&rect=551,0,820,1080&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?w=2560&rect=551,0,820,1080&auto=format,compress 2560w"
                    src="https://images.prismic.io/autumn-amsterdam/225ed48d-c8f0-4528-b6bc-27afc5bf1acb_awwwards.jpg?auto=compress,format&rect=551,0,820,1080&w=460&h=606"
                    alt=""
                    style={{ position: 'absolute', top: 0, left: 0, opacity: 1, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </picture>
              </noscript>
            </div>
            <div
              class="AwardsSlice_image__1L8sw AwardsSlice_image2__2nQcP"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div
                aria-hidden="true"
                style={{ width: '100%', paddingBottom: "131.739%" }}
              ></div>
              <picture>
                <source
                  srcset="https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=320&amp;rect=0,37,400,527&amp;auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=620&amp;rect=0,37,400,527&amp;auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=960&amp;rect=0,37,400,527&amp;auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1280&amp;rect=0,37,400,527&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1600&amp;rect=0,37,400,527&amp;auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1920&amp;rect=0,37,400,527&amp;auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=2240&amp;rect=0,37,400,527&amp;auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=2560&amp;rect=0,37,400,527&amp;auto=format,compress 2560w"
                  sizes="33.333333333333336vw"
                />
                <img
                  src="https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?auto=compress,format&amp;rect=0,37,400,527&amp;w=460&amp;h=606"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: '1', transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s" }}
                />
              </picture>
              <noscript>
                <picture>
                  <source
                    srcset="https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=320&rect=0,37,400,527&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=620&rect=0,37,400,527&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=960&rect=0,37,400,527&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1280&rect=0,37,400,527&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1600&rect=0,37,400,527&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1920&rect=0,37,400,527&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=2240&rect=0,37,400,527&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=2560&rect=0,37,400,527&auto=format,compress 2560w"
                    sizes="33.333333333333336vw"
                  />
                  <img
                    loading="lazy"
                    sizes="33.333333333333336vw"
                    srcset="https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=320&rect=0,37,400,527&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=620&rect=0,37,400,527&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=960&rect=0,37,400,527&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1280&rect=0,37,400,527&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1600&rect=0,37,400,527&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=1920&rect=0,37,400,527&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=2240&rect=0,37,400,527&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?w=2560&rect=0,37,400,527&auto=format,compress 2560w"
                    src="https://images.prismic.io/autumn-amsterdam/b7bb8f1d-f95e-4c67-9e68-8a081b45aa0d_image.png?auto=compress,format&rect=0,37,400,527&w=460&h=606"
                    alt=""
                    style={{ position: 'absolute', top: 0, left: 0, opacity: 1, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </picture>
              </noscript>
            </div>
            <div
              class="AwardsSlice_image__1L8sw AwardsSlice_image3__2EoCy"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div
                aria-hidden="true"
                style={{ width: "100%", paddingBottom: "131.739%" }}
              ></div>
              <picture>
                <source
                  srcset="https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=320&amp;rect=413,0,1093,1440&amp;auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=620&amp;rect=413,0,1093,1440&amp;auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=960&amp;rect=413,0,1093,1440&amp;auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1280&amp;rect=413,0,1093,1440&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1600&amp;rect=413,0,1093,1440&amp;auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1920&amp;rect=413,0,1093,1440&amp;auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=2240&amp;rect=413,0,1093,1440&amp;auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=2560&amp;rect=413,0,1093,1440&amp;auto=format,compress 2560w"
                  sizes="33.333333333333336vw"
                />
                <img
                  src="https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?auto=compress,format&amp;rect=413,0,1093,1440&amp;w=460&amp;h=606"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 1, transition: 'opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s' }}
                />
              </picture>
              <noscript>
                <picture>
                  <source
                    srcset="https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=320&rect=413,0,1093,1440&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=620&rect=413,0,1093,1440&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=960&rect=413,0,1093,1440&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1280&rect=413,0,1093,1440&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1600&rect=413,0,1093,1440&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1920&rect=413,0,1093,1440&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=2240&rect=413,0,1093,1440&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=2560&rect=413,0,1093,1440&auto=format,compress 2560w"
                    sizes="33.333333333333336vw"
                  />
                  <img
                    loading="lazy"
                    sizes="33.333333333333336vw"
                    srcset="https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=320&rect=413,0,1093,1440&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=620&rect=413,0,1093,1440&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=960&rect=413,0,1093,1440&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1280&rect=413,0,1093,1440&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1600&rect=413,0,1093,1440&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=1920&rect=413,0,1093,1440&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=2240&rect=413,0,1093,1440&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?w=2560&rect=413,0,1093,1440&auto=format,compress 2560w"
                    src="https://images.prismic.io/autumn-amsterdam/8e40a9a7-01fe-419a-be0f-1e51801e4983_IMG_0741.JPG?auto=compress,format&rect=413,0,1093,1440&w=460&h=606"
                    alt=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 1,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </picture>
              </noscript>
            </div>
          </div>
          <ul class="AwardsSlice_list__1KXRd">
            <li>35 AWWWARDS</li>
            <li>2 Cannes Lions</li>
            <li>21 FWA</li>
            <li>53 SITESINSPIRE</li>
            <li>20 BEHANCE FEATURED</li>
            <li>6 Nominations “E-commerce of the year”</li>
            <li>Awwwards “independant of the year” 2018</li>
            <li>Nominee “studio of the year” 2019</li>
            <li>Nominee “studio of the year” 2020</li>
          </ul>
        </section>
        <section class="SectionPushSlice_main__8CNrO">
          <article class="SectionPushSlice_article__1Sltj">
            <a
              aria-label="Our
    work"
              href="/projects"
            ><figure>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    aria-hidden="true"
                    style={{ width: "100%", paddingBottom: "75%" }}
                  ></div>
                  <picture
                  ><source
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcset="
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=320&amp;rect=515,0,911,1458&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=620&amp;rect=515,0,911,1458&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=960&amp;rect=515,0,911,1458&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1280&amp;rect=515,0,911,1458&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1600&amp;rect=515,0,911,1458&amp;auto=format,compress 1600w
              "
                      sizes="100vw" />
                    <source
                      srcset="
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1280&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1600&amp;auto=format,compress 1600w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1920&amp;auto=format,compress 1920w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=2240&amp;auto=format,compress 2240w,
                https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=2560&amp;auto=format,compress 2560w
              "
                      sizes="100vw" />
                    <img
                      src="https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?auto=compress,format"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        opacity: 1,
                        transition: ' opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s'
                      }} /></picture
                  ><noscript
                  ><picture
                  ><source
                        media="(max-width: 1024px) and (orientation: portrait)"
                        srcset="
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=320&rect=515,0,911,1458&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=620&rect=515,0,911,1458&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=960&rect=515,0,911,1458&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1280&rect=515,0,911,1458&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1600&rect=515,0,911,1458&auto=format,compress 1600w
                "
                        sizes="100vw" />
                      <source
                        srcset="
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1280&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1600&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1920&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=2240&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=2560&auto=format,compress 2560w
                "
                        sizes="100vw" />
                      <img
                        loading="lazy"
                        sizes="100vw"
                        srcset="
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1280&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1600&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=1920&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=2240&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?w=2560&auto=format,compress 2560w
                "
                        src="https://images.prismic.io/autumn-amsterdam/e4d77013-c1f5-4e50-af1b-b0da0a8f767b_numbered-jorik-lilklein-ecommerce.jpg?auto=compress,format"
                        alt=""
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          opacity: 1,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }} /></picture
                    ></noscript>
                </div>
                <figcaption class="SectionPushSlice_caption__19ik9">
                  <h3>Our work</h3>
                  <span>Watch our cases studies</span>
                </figcaption>
              </figure></a
            >
          </article>
        </section>

      </section>
      <Footer />
    </div>
  );
};

export default About;
