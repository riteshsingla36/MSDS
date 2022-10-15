import React from 'react'
import "./projects.css";
import {Link} from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import AnimationDiv from '../../components/animation_div/AnimationDiv';
import Picture from '../../components/pictureset/Picture';
import Footer from '../../components/footer/Footer';


const Projects = () => {
  return (
    <div>
      <Navbar/>
      <AnimationDiv/>
      <div class="project_details_margin">
        <Link className='project_details_text' to="/">Numbered</Link> 
      </div>
      <header class="header"></header>
      <nav class="Filters_filters__18hoF">
        <ul>
          <li>
            <a class="underlined" href="/projects">All<span>(46)</span></a>
          </li>
          <li>
              <a class="underlined" href="/projects/filter/branding">Branding &amp; Packaging<span>(11)</span></a>
          </li>
          <li>
              <a class="underlined" href="/projects/filter/e-commerce">E-commerce<span>(25)</span></a>
          </li>
          <li>
            <a class="underlined" href="/projects/filter/website">Digital experience<span>(13)</span></a>
          </li>
          <li>
            <a class="underlined" href="/projects/filter/coming-soon">Coming soon<span>(14)</span></a>
          </li>
        </ul>
      </nav>
      <header class="project_header"></header>
      <div>
        <Picture/>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects
