import React from 'react'
import "./jobs.css";
import {Link} from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import AnimationDiv from '../../components/animation_div/AnimationDiv';
import Footer from '../../components/footer/Footer';

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <AnimationDiv/>
      <div class="jobs-margin">
        <Link className='jobs_text' to="/">Numbered</Link>
        <div>
          <header class="header"></header>
          <section class="careers">
            <div className="careers_header">
              <p><strong>We are looking for talented people.</strong></p>
              <p>You are passionate, digital native and want looking for a new adventure in a creative agency?</p>
              <p>We would love to hear about you!</p>
            </div>
            <ul class="careers_list">
              <li>
                <h3>FRONT-END DEVELOPER</h3>
                <span>Lyon (FR) / Amsterdam (NL) / Remote</span>
              </li>
              <li>
                <h3>FRONT-END DEVELOPER</h3>
                <span>Lyon (FR) / Amsterdam (NL) / Remote</span>
              </li>
              <li>
                <h3>FRONT-END DEVELOPER</h3>
                <span>Lyon (FR) / Amsterdam (NL) / Remote</span>
              </li>
              <li>
                <h3>FRONT-END DEVELOPER</h3>
                <span>Lyon (FR) / Amsterdam (NL) / Remote</span>
              </li>
              <li>
                <h3>FRONT-END DEVELOPER</h3>
                <span>Lyon (FR) / Amsterdam (NL) / Remote</span>
              </li>
              <li>
                <h3>FRONT-END DEVELOPER</h3>
                <span>Lyon (FR) / Amsterdam (NL) / Remote</span>
              </li>
            </ul>
          </section> 
        </div>
      </div>
      <div>
        <picture><img class="jobs_pic1" src="https://images.prismic.io/autumn-amsterdam/8dfe74df-bc37-4c03-99fc-4b582f0b2441_typology-beauty-product-2.jpg?auto=compress,format" alt="lazy" /></picture>
        <figcaption class="figure_caption_jobs">
          <h3>OUR WORK</h3>
          <span>Watch our cases studies</span>
        </figcaption>
      </div>
      <Footer/>
    </div>
  )
}

export default Jobs
