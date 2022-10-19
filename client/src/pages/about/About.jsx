import React from 'react'
import "./about.css";
import {Link} from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import AnimationDiv from '../../components/animation_div/AnimationDiv';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <AnimationDiv/>
      <div class="about-margin">
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
      </div>
      
      <Footer/>
    </div>
  )
}

export default About
