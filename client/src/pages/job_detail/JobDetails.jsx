import React from 'react'
import {Link} from "react-router-dom";
import "./jobDetails.css";
import Navbar from '../../components/navbar/Navbar';
import AnimationDiv from '../../components/animation_div/AnimationDiv';
import Footer from '../../components/footer/Footer';

const JobDetails = () => {
  return (
    <div>
      <Navbar/>
      <AnimationDiv/>
      <div className="job_details_margin">
        <Link className='job_details_text' to="/">Numbered</Link>
        <div>
          <header className="job_details_header"></header>
          <section className="job_details_careers">
            <div className="job_details_careers_header">
              <header className="job_tittle">
                <p><strong>Front-end developer</strong></p>
                <Link to="/">
                  <p>Join us</p>
                </Link>
              </header>
            </div>
            <div className="job_desc">
              <header className="header_line">
                <p><strong>JOB DESCRIPTION</strong></p>
                <Link to="/">
                  <span>JOIN US</span>
                </Link>
              </header>
              <div className="job_details_desc">
                  <h3>We are</h3>
                  <p>A creative studio working with exclusive Fashion, Tech &amp; Lifestyle brands. Multifaceted sharp minds collaborating hand in hand on top notch digital projects. Driven by building beautiful experiences &amp; products for our devoted clients. We stand for passion, aspiration and excitement (enthusiasm) in our daily work. On track for opening our horizon to new acute &amp; atypical profiles to complete our team.</p><h3>Together</h3><p>Numbered is looking for a developer to join its brand new team of coders and participate in the creation of visually sharp brand / e-commerce websites.</p>
                  <h3>You</h3>
                  <p>You trust your front-end skills and are very comfortable with ES6, CSS3 (SASS), HTML semantics &amp; standards. A minimum experience with animation best practices is required and it is recommended to be familiar with modern frameworks based on Vue (Nuxt) or React (Nextjs, preferred).</p>
                  <p>You have at least one year of professional experience (or two years of apprenticeship).</p>
                  <p>You pay great attention to visual details, performances, and overall user experience.</p>
                  <p>You are comfortable with git workflow and CI/CD.</p>
                  <p>You’re a good communicator, curious enough to try to find solutions by yourself and expose them to the team.&nbsp;</p>
                  <p>You love to keep learning with technological watch, and enjoy sharing your discoveries.</p>
                  <p>An understanding of front-end build tools (Node, webpack, npm / yarn / pnpm) is required.</p>
                  <p>Optionally, you have experience with Shopify (headless Nextjs / Hydrogen), headless CMS (such as Sanity / Strapi / Prismic…), and / or Webgl.</p>
                  <p>Fluent in french or english, professional working proficiency english level.</p>
                  <p></p>
                  <h3>Requirements</h3>
                  <p>Start date: ASAP.</p>
                  <p>Salary: according to profile.</p>
                  <p>Location: Amsterdam (NL) or remote depending on profile.</p>
                  <p></p>
                  <h3>Apply</h3>
                  <p>Send your portfolio, side projects and resume at jobs@numbered.studio entitled "Front-end developer".&nbsp;</p>
                </div>
            </div>
            
          </section> 
        </div>
      </div>
      <div>
        <picture><img className="job_details_pic1" src="https://images.prismic.io/autumn-amsterdam/8dfe74df-bc37-4c03-99fc-4b582f0b2441_typology-beauty-product-2.jpg?auto=compress,format" alt="lazy" /></picture>
        <figcaption className="figure_caption_job_details">
          <h3>OUR WORK</h3>
          <span>Watch our cases studies</span>
        </figcaption>
      </div>
      <Footer/>
    </div>
  )
}

export default JobDetails