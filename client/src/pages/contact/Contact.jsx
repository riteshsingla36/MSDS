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
      {/* <div className='main-tt'>
        <span onClick={() => navigate("/")}>Numbered</span>
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
            <p>Watch Our Case Studies</p>
          </span>
        </div>
      </div> */}
      <header class="Hero_header__1cZhA"><a aria-label="Back to home page" href="index.html"><span
        class="Hero_logo__1aZ0K"><svg fill="none" viewBox="0 0 1189 202"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="#fff">
            <path
              d="M165.61 157.75l-.5-78c0-11.667-1.166-21.583-3.5-29.75-2.333-8.167-6.333-14.75-12-19.75-5.666-5-12.75-8-21.25-9-.333 0-.666-.083-1-.25-.166-.167-.166-.333 0-.5.334-.333.667-.5 1-.5 12.5 0 23.167-.333 32-1 9-.833 17-2.417 24-4.75.5-.167.834 0 1 .5.334.333.167.583-.5.75-3.333.833-6.333 3-9 6.5-2.666 3.333-4.916 8.917-6.75 16.75-1.833 7.667-2.75 21.083-2.75 40.25 0 35.167.084 60.083.25 74.75.334 14.5.917 29.833 1.75 46 .167 1 0 1.5-.5 1.5-.5.167-.916 0-1.25-.5-16.166-21.833-39.333-50.583-69.5-86.25-28.5-33.833-49.75-58-63.75-72.5-.166 7.167-.166 23.083 0 47.75.334 24.5.5 39.083.5 43.75 0 12.333 1.167 22.5 3.5 30.5 2.5 8 6.5 14.5 12 19.5s12.25 8.417 20.25 10.25c.834.167 1.167.5 1 1-.166.333-.5.417-1 .25-8.833-1.333-18.5-1.917-29-1.75s-20 1-28.5 2.5c-.666.167-1.083 0-1.25-.5-.166-.333.084-.583.75-.75 5-1.333 9-4.083 12-8.25 3-4.333 5.25-10.083 6.75-17.25 1.5-7.333 2.25-19.167 2.25-35.5 0-43.833-.333-70.833-1-81-.666-9.833-4.333-17.417-11-22.75-3.166-2.5-6.5-4.5-10-6-3.333-1.667-6.333-2.5-9-2.5-.666 0-1-.167-1-.5 0-.5.334-.75 1-.75 14 0 26.5-1.667 37.5-5 1.334-.333 2.334-.417 3-.25.667 0 1.25.583 1.75 1.75 8.167 12.167 30.75 40 67.75 83.5 22.667 26.667 40.667 45.917 54 57.75zM290.478 179v-9.25c-6.334 8.5-13.584 15.25-21.75 20.25-8.167 5-16.084 7.5-23.75 7.5-10.667 0-19-3.583-25-10.75-6-7.333-9-17.417-9-30.25l.25-28c0-2.167-.084-5.917-.25-11.25 0-5.333-.25-11.917-.75-19.75-.334-8-1.584-13.917-3.75-17.75-2-4-5.417-6-10.25-6-.5 0-.75-.167-.75-.5 0-.5.25-.75.75-.75 6.5 0 13.083-.667 19.75-2 6.666-1.5 11.75-3.417 15.25-5.75 1.5-1 2.083-.667 1.75 1-1 13.833-1.5 35.667-1.5 65.5l1 18.25c1.166 13.333 4 22.917 8.5 28.75s10.75 8.75 18.75 8.75c11 0 21.25-6.333 30.75-19l.5-36.75c0-15.167-.334-26.667-1-34.5-.667-7.833-2-13.583-4-17.25-2-3.833-5.417-5.75-10.25-5.75-.667 0-1-.167-1-.5s.333-.583 1-.75c6.666 0 12.833-.417 18.5-1.25 5.833-1 11.25-3.083 16.25-6.25a9.68 9.68 0 0 1 1.25-.5c.666-.333 1 .167 1 1.5-1 13.833-1.5 35.583-1.5 65.25 0 9.667.083 18.333.25 26 .333 7.5.916 13.333 1.75 17.5.833 4.167 2 7.667 3.5 10.5 1.666 2.833 5.25 5.083 10.75 6.75.5.167.75.417.75.75s-.25.5-.75.5c-13.834 0-25.167 1-34 3-1.334.167-2.084-.417-2.25-1.75-.5-2.833-.75-8-.75-15.5zM378.276 91.25V90c-.333 10.5-.5 24.333-.5 41.5 0 24 .5 39.917 1.5 47.75 1.167 7.833 3.75 12.667 7.75 14.5.5.167.75.417.75.75s-.25.5-.75.5c-15.666-1.833-29.75-1.667-42.25.5-.666.167-1.083 0-1.25-.5 0-.333.417-.583 1.25-.75 4.667-1 7.667-3.5 9-7.5 1.334-4.167 2.25-10.083 2.75-17.75.667-7.833 1-20.333 1-37.5v-11c0-5.333-.25-12.083-.75-20.25s-1.833-14.583-4-19.25c-2-4.833-5.416-7.25-10.25-7.25-.666 0-1-.167-1-.5 0-.5.334-.75 1-.75 5.834 0 12.084-.667 18.75-2 6.834-1.5 12.25-3.5 16.25-6 1.334-.833 1.917-.417 1.75 1.25l-1 23.5c6-7.833 12.584-13.917 19.75-18.25 7.334-4.5 14.417-6.75 21.25-6.75 3.5 0 7.25.833 11.25 2.5 4.167 1.5 7.834 4.417 11 8.75 3.334 4.167 5.584 9 6.75 14.5 6.834-8.333 13.834-14.667 21-19 7.167-4.5 14-6.75 20.5-6.75 10 0 17.584 3.417 22.75 10.25 5.334 6.667 8 16.25 8 28.75 0 26.167.084 43.417.25 51.75.334 8.167 1 14.667 2 19.5 1 4.667 2.417 8.5 4.25 11.5 2 2.833 5.084 4.833 9.25 6 .5.167.75.417.75.75s-.25.5-.75.5c-10-.5-21.083.5-33.25 3-1.5.167-2.333-.583-2.5-2.25-.5-2.5-.75-7.583-.75-15.25 0-3.5.084-11.5.25-24 .167-12.5.167-22 0-28.5-.166-6.5-.416-11.833-.75-16-1.833-23.167-10.166-34.75-25-34.75-3.5 0-7.583 1.167-12.25 3.5-4.5 2.167-9 6.417-13.5 12.75.667 2.833 1 6.333 1 10.5l-.25 32.75c-.5 19.5-.166 33.75 1 42.75 1.167 8.833 4.584 14.167 10.25 16 .334.167.5.5.5 1 0 .333-.333.417-1 .25-6-1-13.166-1.5-21.5-1.5-8.166 0-15.416.667-21.75 2-.666.167-1 0-1-.5 0-.333.334-.583 1-.75 3.667-1 6.25-3.167 7.75-6.5 1.667-3.5 2.834-9.25 3.5-17.25.667-8.167 1-20.083 1-35.75 0-9.833-.333-18.917-1-27.25-.833-9.833-3.333-17.667-7.5-23.5-4.166-6-9.583-9-16.25-9-9.666 0-18.333 5.417-26 16.25zM577.534 180.5c-7.833 4.667-14 9.667-18.5 15-.333.5-.667.667-1 .5s-.333-.583 0-1.25c2-3 3.333-7.167 4-12.5.667-5.5 1-27.917 1-67.25 0-30.167-.333-52.083-1-65.75-.5-13.833-1.667-23.583-3.5-29.25-1.833-5.833-5.333-8.75-10.5-8.75-.667 0-1-.167-1-.5 0-.5.333-.75 1-.75 6 0 12.167-.667 18.5-2 6.5-1.5 12-3.417 16.5-5.75.833-.5 1.417-.667 1.75-.5.333 0 .417.5.25 1.5L583.284 86c5.5-6.167 12.167-11.333 20-15.5 8-4.167 16.333-6.25 25-6.25 6.5 0 12.833 1.417 19 4.25 6.333 2.833 11.917 7 16.75 12.5 5 5.5 8.917 12.25 11.75 20.25 3 7.833 4.5 16.417 4.5 25.75 0 10.167-1.833 19.667-5.5 28.5-3.5 8.667-8.333 16.167-14.5 22.5-6.167 6.167-13.167 11-21 14.5-7.833 3.333-15.75 5-23.75 5-4.833 0-9.833-.75-15-2.25-5-1.333-9.5-3.333-13.5-6-3.833-2.833-7-5.75-9.5-8.75zm5.75-92.75V109c.167 21.333 2 37.417 5.5 48.25 2.167 7 5.667 13.417 10.5 19.25 4.833 5.667 9.5 9.583 14 11.75 4.667 2.167 8.167 3.417 10.5 3.75 2.333.167 3.917.25 4.75.25 10.167 0 18.167-3.417 24-10.25 6-6.833 9-17 9-30.5 0-8.833-1.333-17.917-4-27.25-2.5-9.5-6.083-18.167-10.75-26-4.5-7.833-9.75-14.083-15.75-18.75-6-4.833-12.167-7.25-18.5-7.25-5.167 0-10.333 1.417-15.5 4.25-5.167 2.667-9.75 6.417-13.75 11.25zM722.372 125.75c1.167 8 3.167 15.583 6 22.75 3 7.167 6.75 13.5 11.25 19 4.5 5.333 9.667 9.5 15.5 12.5 6 3 12.333 4.5 19 4.5 6.167 0 12-1.167 17.5-3.5 5.667-2.5 10-5.583 13-9.25.333-.5.667-.667 1-.5.5.167.5.583 0 1.25-6.833 7.5-14.583 13.583-23.25 18.25-8.5 4.5-17.167 6.75-26 6.75-3.333 0-7.25-.5-11.75-1.5-4.333-1-8.75-2.917-13.25-5.75s-8.917-6.75-13.25-11.75c-4.167-5.167-7.667-11.75-10.5-19.75-2.667-8-4-16.667-4-26 0-10.667 1.833-20.333 5.5-29 3.667-8.833 8.5-16.083 14.5-21.75 6-5.833 12.583-10.25 19.75-13.25 7.333-3 14.417-4.5 21.25-4.5 4.167 0 8.667.833 13.5 2.5 5 1.5 9.75 4.167 14.25 8s8.417 9 11.75 15.5c3.5 6.333 5.417 13.917 5.75 22.75l-.75 1c-5.167 1-17.5 2.917-37 5.75-19.333 2.667-35.917 4.667-49.75 6zm-.25-1.25c19-2 37.083-4.333 54.25-7 3-.5 5.25-1.417 6.75-2.75 1.667-1.333 2-4.583 1-9.75-.833-4.167-2.5-8.917-5-14.25-2.5-5.5-6.333-10.333-11.5-14.5-5-4.333-10.667-6.5-17-6.5-9.333 0-16.583 3.417-21.75 10.25s-7.75 16.583-7.75 29.25c0 5.667.333 10.75 1 15.25zM860.198 115.5v15.75c0 20.333.25 34.083.75 41.25.667 7.167 1.834 12.333 3.5 15.5 1.834 3 4.75 4.917 8.75 5.75.5.167.667.5.5 1 0 .333-.25.417-.75.25-6.666-.833-14.166-1.25-22.5-1.25-8.333-.167-16.25.417-23.75 1.75-.5.167-.75 0-.75-.5 0-.333.25-.583.75-.75 3.667-1 6.084-2.333 7.25-4 1.334-1.833 2.334-4.25 3-7.25.834-3.167 1.5-8.167 2-15 .667-7 1-19.25 1-36.75V119.5c0-5.667-.25-12.583-.75-20.75-.5-8.333-1.833-14.583-4-18.75-2-4.167-5.416-6.25-10.25-6.25-.5 0-.75-.167-.75-.5 0-.5.25-.75.75-.75 5.5 0 11.584-.583 18.25-1.75 6.834-1.333 12.417-3.333 16.75-6 .167-.167.5-.333 1-.5s.75.333.75 1.5c-1 18-1.5 33.333-1.5 46 5.834-15.5 13.5-27.5 23-36s19.25-12.333 29.25-11.5c.667 0 1 .417 1 1.25 0 13.667 1 25.417 3 35.25.167.167.084.333-.25.5-.166.167-.333.167-.5 0-2.333-5.167-5.5-9.167-9.5-12-3.833-2.833-8.166-4.25-13-4.25-7.166 0-13.75 2.583-19.75 7.75-5.833 5.167-10.25 12.75-13.25 22.75zM944.784 125.75c1.167 8 3.167 15.583 6 22.75 3 7.167 6.75 13.5 11.25 19 4.5 5.333 9.667 9.5 15.5 12.5 6 3 12.333 4.5 19 4.5 6.166 0 11.996-1.167 17.496-3.5 5.67-2.5 10-5.583 13-9.25.34-.5.67-.667 1-.5.5.167.5.583 0 1.25-6.83 7.5-14.58 13.583-23.25 18.25-8.496 4.5-17.163 6.75-25.996 6.75-3.333 0-7.25-.5-11.75-1.5-4.333-1-8.75-2.917-13.25-5.75s-8.917-6.75-13.25-11.75c-4.167-5.167-7.667-11.75-10.5-19.75-2.667-8-4-16.667-4-26 0-10.667 1.833-20.333 5.5-29 3.667-8.833 8.5-16.083 14.5-21.75 6-5.833 12.583-10.25 19.75-13.25 7.333-3 14.417-4.5 21.25-4.5 4.167 0 8.667.833 13.496 2.5 5 1.5 9.75 4.167 14.25 8s8.42 9 11.75 15.5c3.5 6.333 5.42 13.917 5.75 22.75l-.75 1c-5.16 1-17.5 2.917-36.996 5.75-19.333 2.667-35.917 4.667-49.75 6zm-.25-1.25c19-2 37.083-4.333 54.25-7 2.996-.5 5.246-1.417 6.746-2.75 1.67-1.333 2-4.583 1-9.75-.83-4.167-2.5-8.917-5-14.25-2.496-5.5-6.329-10.333-11.496-14.5-5-4.333-10.667-6.5-17-6.5-9.333 0-16.583 3.417-21.75 10.25s-7.75 16.583-7.75 29.25c0 5.667.333 10.75 1 15.25zM1151.49 172.75c-5.83 7.833-12.91 13.917-21.25 18.25-8.16 4.333-16.75 6.5-25.75 6.5-6.83 0-13.41-1.667-19.75-5-6.33-3.5-11.91-8.25-16.75-14.25-4.83-6.167-8.58-13.167-11.25-21-2.66-8-4-16.167-4-24.5 0-8.5 1.34-16.917 4-25.25 2.84-8.333 7.17-15.667 13-22 5.84-6.5 12.75-11.667 20.75-15.5 8.17-3.833 16.42-5.75 24.75-5.75 7.67 0 14.92 1.667 21.75 5 6.84 3.167 11.5 6.5 14 10-.16-18.167-.66-31.917-1.5-41.25-.66-9.5-2-16.333-4-20.5-1.83-4.167-5-6.25-9.5-6.25-.66 0-1-.167-1-.5 0-.5.34-.75 1-.75 16.34 0 27.84-2.75 34.5-8.25 1.5-1.333 2.17-.917 2 1.25-.83 14.167-1.25 47.167-1.25 99 0 18 .17 32.333.5 43 .34 10.667.92 19.333 1.75 26 1 6.5 2.42 11.333 4.25 14.5 2 3 5.25 5.167 9.75 6.5.5.167.75.417.75.75s-.25.5-.75.5c-11.33 0-22.33 1-33 3-1.33.167-2.08-.5-2.25-2-.5-3.833-.75-11-.75-21.5zm0-2.25l.5-23c0-16.667-1.58-30-4.75-40-3.5-10.667-9.33-19.583-17.5-26.75-8-7.333-17.16-11-27.5-11-10.16 0-18.08 3.417-23.75 10.25-5.66 6.667-8.5 15.667-8.5 27 0 9.667 1.75 19.667 5.25 30s7.75 19.333 12.75 27c5.17 7.5 10.67 13 16.5 16.5 5.84 3.5 11.5 5.25 17 5.25s11-1.25 16.5-3.75c5.67-2.5 10.17-6.333 13.5-11.5z">
            </path>
          </g>
        </svg></span></a></header>
      <section class="contact_main__3QAHV">
        <div class="contact_description__dMHfw">
          <p>We are an Amsterdam and New-york based studio with a strong french accent working
            all over the world. <br />We like to support our clients at all stages of their
            projects, don&#x27;t hesitate to contact us!</p>
        </div>
        <div class="contact_information__1lX9-">
          <p>For projects inquiries<br /><a
            href="mailto:contact@numbered.com">contact@numbered.com</a></p>
          <p></p>
          <p>We are always looking for new talent, feel free to contact us!<br />For Jobs and
            internships<br /><a href="mailto:jobs@numbered.com">jobs@numbered.com</a></p>
          <p></p>
          <p>Numbered Ams<br />Herengracht 342-1<br />1016CG Amsterdam<br />The (sunny)
            Netherlands</p>
          <p></p>
          <p>Numbered Nyc<br />29-35 9th Ave,<br />New York, NY 10014<br />United States</p>
          <p></p>
          <p>Chamber of commerce (kvk) 81354789<br /></p>
        </div>
      </section>
      <section>
        <section class="SectionPushSlice_main__8CNrO">
          <article class="SectionPushSlice_article__1Sltj">
            <a aria-label="Ourworks" href="projects.html">
              <figure>
                <div style={{position: 'relative', overflow: 'hidden'}}><div aria-hidden="true" style={{width: "100%", paddingBottom: '60.8889%'}}>
                </div>
                  <picture>
                    <source media="(max-width: 1024px) and (orientation: portrait)" srcset="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=320&amp;rect=279,0,343,548&amp;auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=620&amp;rect=279,0,343,548&amp;auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=960&amp;rect=279,0,343,548&amp;auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&amp;rect=279,0,343,548&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&amp;rect=279,0,343,548&amp;auto=format,compress 1600w" sizes="100vw"/>
                      <source srcset="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&amp;auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1920&amp;auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2240&amp;auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2560&amp;auto=format,compress 2560w" sizes="100vw"/>
                        <img src="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?auto=compress,format" alt="" loading="lazy" decoding="async" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height:' 100%', objectFit: "cover", objectPosition: 'center center', opacity: 1, transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"}}/>
                    </picture>
                      <noscript>
                        <picture>
                          <source media="(max-width: 1024px) and (orientation: portrait)" srcset="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=320&rect=279,0,343,548&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=620&rect=279,0,343,548&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=960&rect=279,0,343,548&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&rect=279,0,343,548&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&rect=279,0,343,548&auto=format,compress 1600w" sizes="100vw" />
                          <source srcset="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2560&auto=format,compress 2560w" sizes="100vw" />
                          <img loading="lazy" sizes="100vw" srcset="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2560&auto=format,compress 2560w" src="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?auto=compress,format" alt="" style={{position:'absolute',top:0,left:0,opacity:1,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} />
                        </picture>
                      </noscript>
                    </div>
                      <figcaption class="SectionPushSlice_caption__19ik9">
                        <h3>Our 
                          works</h3>
                        <span>Watch our case studies</span>
                      </figcaption>
                    </figure>
                  </a>
                </article>
              </section>
            </section>


            <Footer />
          </div>
          )
}

          export default Contact
