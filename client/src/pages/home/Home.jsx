import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import AnimationDiv from "../../components/animation_div/AnimationDiv";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  let [a, setA] = useState(1);
  const changeImage = (id) => {
    setA(Number(id.split(" ")[1].split("-")[1]));
  };
  return (
    <div>
      <AnimationDiv />
      <Navbar />
      <div className="main-img-container">
        <div className="home-img-container">
          <div
            id="home-img home-1"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-2"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-3"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-4"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-5"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-6"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-7"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-8"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
          <div
            id="home-img home-9"
            onMouseOver={(e) => changeImage(e.target.id)}
          ></div>
        </div>

        <img
          src={require(`../../images/${a}.jpg`)}
          alt="#"
          width={"100%"}
          height={"100%"}
          className="banner-img"
        />

        <Link className="main-txt prevent-select" to="/">
          Numbered
        </Link>
        <div className="bottom-txt prevent-select">
          <Link to="/client/src/pages/about">Amsterdam &amp; New-york</Link>
        </div>
      </div>

      <section className="DescriptionSlice_description__N9ojT">
        <div>
          <div className="DescriptionSlice_about__3fKWM">
            <p>
              We’re a full service creative agency, working globally with brands
              and businesses at all stages of their journey.
            </p>
            <a className="a--underlined" href="about.html">
              About us
            </a>
          </div>
          <div className="DescriptionSlice_projects__se9aV">
            <h2>
              Cases
              <br />
              studies
            </h2>
            <a aria-label="View all projects" href="projects.html">
              View all
            </a>
          </div>
        </div>
      </section>

      <section className="ProjectsSlice_projects3__3BeN3">
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Palette" href="/project/palette">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "121.806%" }}
                ></div>
                <picture>
                  <source
                    media="(max-width: 1024px) and (orientation: portrait)"
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=320&amp;rect=667,0,1667,2000&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=620&amp;rect=667,0,1667,2000&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=960&amp;rect=667,0,1667,2000&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1280&amp;rect=667,0,1667,2000&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1600&amp;rect=667,0,1667,2000&amp;auto=format,compress 1600w
              "
                    sizes="100vw"
                  />
                  <source
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=320&amp;rect=678,0,1642,2000&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=620&amp;rect=678,0,1642,2000&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=960&amp;rect=678,0,1642,2000&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1280&amp;rect=678,0,1642,2000&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1600&amp;rect=678,0,1642,2000&amp;auto=format,compress 1600w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1920&amp;rect=678,0,1642,2000&amp;auto=format,compress 1920w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=2240&amp;rect=678,0,1642,2000&amp;auto=format,compress 2240w,
                https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=2560&amp;rect=678,0,1642,2000&amp;auto=format,compress 2560w
              "
                    sizes="50vw"
                  />
                  <img
                    src="https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?auto=compress,format&amp;rect=678,0,1642,2000&amp;w=1440&amp;h=1754"
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
                      transition: "none 0s ease 0s",
                    }}
                  />
                </picture>
                <noscript>
                  <picture>
                    <source
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=320&rect=667,0,1667,2000&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=620&rect=667,0,1667,2000&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=960&rect=667,0,1667,2000&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1280&rect=667,0,1667,2000&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1600&rect=667,0,1667,2000&auto=format,compress 1600w
                "
                      sizes="100vw"
                    />
                    <source
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=320&rect=678,0,1642,2000&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=620&rect=678,0,1642,2000&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=960&rect=678,0,1642,2000&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1280&rect=678,0,1642,2000&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1600&rect=678,0,1642,2000&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1920&rect=678,0,1642,2000&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=2240&rect=678,0,1642,2000&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=2560&rect=678,0,1642,2000&auto=format,compress 2560w
                "
                      sizes="50vw"
                    />
                    <img
                      loading="lazy"
                      sizes="50vw"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=320&rect=678,0,1642,2000&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=620&rect=678,0,1642,2000&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=960&rect=678,0,1642,2000&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1280&rect=678,0,1642,2000&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1600&rect=678,0,1642,2000&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=1920&rect=678,0,1642,2000&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=2240&rect=678,0,1642,2000&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?w=2560&rect=678,0,1642,2000&auto=format,compress 2560w
                "
                      src="https://images.prismic.io/autumn-amsterdam/fbab65ba-a1f5-4ec4-93ce-c93935138b17_visuel-hd.jpg?auto=compress,format&rect=678,0,1642,2000&w=1440&h=1754"
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
              <figcaption className="ProjectsSlice_caption__1PlsW">
                <h3>Palette</h3>
                <div>Eco-Friendly Paint for a colorfull interior</div>
              </figcaption>
            </figure>
          </a>
        </article>
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Routinely" href="/project/routinely">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "60.9028%" }}
                ></div>
                <picture>
                  <source
                    media="(max-width: 1024px) and (orientation: portrait)"
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=320&amp;rect=0,0,3154,3785&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=620&amp;rect=0,0,3154,3785&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=960&amp;rect=0,0,3154,3785&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1280&amp;rect=0,0,3154,3785&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1600&amp;rect=0,0,3154,3785&amp;auto=format,compress 1600w
              "
                    sizes="100vw"
                  />
                  <source
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=320&amp;rect=0,706,5046,3073&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=620&amp;rect=0,706,5046,3073&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=960&amp;rect=0,706,5046,3073&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1280&amp;rect=0,706,5046,3073&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1600&amp;rect=0,706,5046,3073&amp;auto=format,compress 1600w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1920&amp;rect=0,706,5046,3073&amp;auto=format,compress 1920w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=2240&amp;rect=0,706,5046,3073&amp;auto=format,compress 2240w,
                https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=2560&amp;rect=0,706,5046,3073&amp;auto=format,compress 2560w
              "
                    sizes="50vw"
                  />
                  <img
                    src="https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?auto=compress,format&amp;rect=0,706,5046,3073&amp;w=1440&amp;h=877"
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
                      transition: "none 0s ease 0s",
                    }}
                  />{" "}
                </picture>
                <noscript>
                  <picture>
                    <source
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=320&rect=0,0,3154,3785&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=620&rect=0,0,3154,3785&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=960&rect=0,0,3154,3785&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1280&rect=0,0,3154,3785&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1600&rect=0,0,3154,3785&auto=format,compress 1600w
                "
                      sizes="100vw"
                    />
                    <source
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=320&rect=0,706,5046,3073&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=620&rect=0,706,5046,3073&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=960&rect=0,706,5046,3073&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1280&rect=0,706,5046,3073&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1600&rect=0,706,5046,3073&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1920&rect=0,706,5046,3073&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=2240&rect=0,706,5046,3073&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=2560&rect=0,706,5046,3073&auto=format,compress 2560w
                "
                      sizes="50vw"
                    />
                    <img
                      loading="lazy"
                      sizes="50vw"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=320&rect=0,706,5046,3073&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=620&rect=0,706,5046,3073&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=960&rect=0,706,5046,3073&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1280&rect=0,706,5046,3073&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1600&rect=0,706,5046,3073&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=1920&rect=0,706,5046,3073&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=2240&rect=0,706,5046,3073&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?w=2560&rect=0,706,5046,3073&auto=format,compress 2560w
                "
                      src="https://images.prismic.io/autumn-amsterdam/ceb34119-69f1-41cc-85cd-0a28e7b9e286_IMG_1106-b.jpg?auto=compress,format&rect=0,706,5046,3073&w=1440&h=877"
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
              <figcaption className="ProjectsSlice_caption__1PlsW">
                <h3>Routinely</h3>
                <div>Branding &amp; Digital Platforms</div>
              </figcaption>
            </figure>
          </a>
        </article>
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Veloretti" href="/project/veloretti">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "60.9028%" }}
                ></div>
                <picture>
                  <source
                    media="(max-width: 1024px) and (orientation: portrait)"
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=320&amp;rect=773,0,1333,1600&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=620&amp;rect=773,0,1333,1600&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=960&amp;rect=773,0,1333,1600&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1280&amp;rect=773,0,1333,1600&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1600&amp;rect=773,0,1333,1600&amp;auto=format,compress 1600w
              "
                    sizes="100vw"
                  />
                  <source
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=320&amp;rect=128,0,2627,1600&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=620&amp;rect=128,0,2627,1600&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=960&amp;rect=128,0,2627,1600&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1280&amp;rect=128,0,2627,1600&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1600&amp;rect=128,0,2627,1600&amp;auto=format,compress 1600w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1920&amp;rect=128,0,2627,1600&amp;auto=format,compress 1920w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=2240&amp;rect=128,0,2627,1600&amp;auto=format,compress 2240w,
                https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=2560&amp;rect=128,0,2627,1600&amp;auto=format,compress 2560w
              "
                    sizes="50vw"
                  />
                  <img
                    src="https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?auto=compress,format&amp;rect=128,0,2627,1600&amp;w=1440&amp;h=877"
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
                      transition: "none 0s ease 0s",
                    }}
                  />
                </picture>
                <noscript>
                  <picture>
                    <source
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=320&rect=773,0,1333,1600&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=620&rect=773,0,1333,1600&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=960&rect=773,0,1333,1600&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1280&rect=773,0,1333,1600&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1600&rect=773,0,1333,1600&auto=format,compress 1600w
                "
                      sizes="100vw"
                    />
                    <source
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=320&rect=128,0,2627,1600&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=620&rect=128,0,2627,1600&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=960&rect=128,0,2627,1600&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1280&rect=128,0,2627,1600&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1600&rect=128,0,2627,1600&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1920&rect=128,0,2627,1600&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=2240&rect=128,0,2627,1600&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=2560&rect=128,0,2627,1600&auto=format,compress 2560w
                "
                      sizes="50vw"
                    />
                    <img
                      loading="lazy"
                      sizes="50vw"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=320&rect=128,0,2627,1600&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=620&rect=128,0,2627,1600&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=960&rect=128,0,2627,1600&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1280&rect=128,0,2627,1600&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1600&rect=128,0,2627,1600&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=1920&rect=128,0,2627,1600&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=2240&rect=128,0,2627,1600&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?w=2560&rect=128,0,2627,1600&auto=format,compress 2560w
                "
                      src="https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?auto=compress,format&rect=128,0,2627,1600&w=1440&h=877"
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
              <figcaption className="ProjectsSlice_caption__1PlsW">
                <h3>Veloretti</h3>
                <div>Online Flagship store</div>
              </figcaption>
            </figure>
          </a>
        </article>
      </section>

      <section className="QuoteSlice_quote__1H6VJ">
        <blockquote>
          <p>
            Collaborating with international brands, founders, start-ups,
            venture capitals, and more – producing, results-driven, unique
            products and experiences from conception to delivery.
          </p>
        </blockquote>
      </section>

      <section className="ProjectsSlice_projects2__O2Zbk">
        <article className="ProjectsSlice_article__uEv9O">
          <a
            aria-label="Jean Paul Gaultier &amp; Sacai"
            href="/project/live-fashion-show--pop-up-e-commerce"
          >
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "121.806%" }}
                ></div>
                <picture>
                  <source
                    media="(max-width: 1024px) and (orientation: portrait)"
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=320&amp;rect=0,249,1669,2003&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=620&amp;rect=0,249,1669,2003&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=960&amp;rect=0,249,1669,2003&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1280&amp;rect=0,249,1669,2003&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1600&amp;rect=0,249,1669,2003&amp;auto=format,compress 1600w
              "
                    sizes="100vw"
                  />
                  <source
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=320&amp;rect=0,235,1669,2033&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=620&amp;rect=0,235,1669,2033&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=960&amp;rect=0,235,1669,2033&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1280&amp;rect=0,235,1669,2033&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1600&amp;rect=0,235,1669,2033&amp;auto=format,compress 1600w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1920&amp;rect=0,235,1669,2033&amp;auto=format,compress 1920w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=2240&amp;rect=0,235,1669,2033&amp;auto=format,compress 2240w,
                https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=2560&amp;rect=0,235,1669,2033&amp;auto=format,compress 2560w
              "
                    sizes="50vw"
                  />
                  <img
                    src="https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?auto=compress,format&amp;rect=0,235,1669,2033&amp;w=1440&amp;h=1754"
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
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=320&rect=0,249,1669,2003&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=620&rect=0,249,1669,2003&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=960&rect=0,249,1669,2003&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1280&rect=0,249,1669,2003&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1600&rect=0,249,1669,2003&auto=format,compress 1600w
                "
                      sizes="100vw"
                    />
                    <source
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=320&rect=0,235,1669,2033&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=620&rect=0,235,1669,2033&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=960&rect=0,235,1669,2033&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1280&rect=0,235,1669,2033&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1600&rect=0,235,1669,2033&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1920&rect=0,235,1669,2033&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=2240&rect=0,235,1669,2033&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=2560&rect=0,235,1669,2033&auto=format,compress 2560w
                "
                      sizes="50vw"
                    />
                    <img
                      loading="lazy"
                      sizes="50vw"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=320&rect=0,235,1669,2033&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=620&rect=0,235,1669,2033&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=960&rect=0,235,1669,2033&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1280&rect=0,235,1669,2033&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1600&rect=0,235,1669,2033&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=1920&rect=0,235,1669,2033&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=2240&rect=0,235,1669,2033&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?w=2560&rect=0,235,1669,2033&auto=format,compress 2560w
                "
                      src="https://images.prismic.io/autumn-amsterdam/79b7f3a1-2983-4739-85bb-cf9e425a93e8_Jpg-sacai-fasion-show.jpg?auto=compress,format&rect=0,235,1669,2033&w=1440&h=1754"
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
              <figcaption className="ProjectsSlice_caption__1PlsW">
                <h3>Jean Paul Gaultier &amp; Sacai</h3>
                <div>Live Fashion Show &amp; Pop-up E-commerce</div>
              </figcaption>
            </figure>
          </a>
        </article>
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Typology" href="/project/typology">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "121.806%" }}
                ></div>
                <div
                  aria-hidden="true"
                  style={{
                    backgroundColor: "rgb(188, 152, 115)",
                    position: "absolute",
                    inset: "0px",
                  }}
                ></div>
                <picture>
                  <source
                    media="(max-width: 1024px) and (orientation: portrait)"
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=320&amp;rect=409,0,910,1092&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=620&amp;rect=409,0,910,1092&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=960&amp;rect=409,0,910,1092&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1280&amp;rect=409,0,910,1092&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1600&amp;rect=409,0,910,1092&amp;auto=format,compress 1600w
              "
                    sizes="100vw"
                  />
                  <source
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=320&amp;rect=416,0,897,1092&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=620&amp;rect=416,0,897,1092&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=960&amp;rect=416,0,897,1092&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1280&amp;rect=416,0,897,1092&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1600&amp;rect=416,0,897,1092&amp;auto=format,compress 1600w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1920&amp;rect=416,0,897,1092&amp;auto=format,compress 1920w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=2240&amp;rect=416,0,897,1092&amp;auto=format,compress 2240w,
                https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=2560&amp;rect=416,0,897,1092&amp;auto=format,compress 2560w
              "
                    sizes="50vw"
                  />
                  <img
                    src="https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?auto=compress,format&amp;rect=416,0,897,1092&amp;w=1440&amp;h=1754"
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
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=320&rect=409,0,910,1092&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=620&rect=409,0,910,1092&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=960&rect=409,0,910,1092&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1280&rect=409,0,910,1092&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1600&rect=409,0,910,1092&auto=format,compress 1600w
                "
                      sizes="100vw"
                    />
                    <source
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=320&rect=416,0,897,1092&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=620&rect=416,0,897,1092&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=960&rect=416,0,897,1092&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1280&rect=416,0,897,1092&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1600&rect=416,0,897,1092&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1920&rect=416,0,897,1092&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=2240&rect=416,0,897,1092&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=2560&rect=416,0,897,1092&auto=format,compress 2560w
                "
                      sizes="50vw"
                    />
                    <img
                      loading="lazy"
                      sizes="50vw"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=320&rect=416,0,897,1092&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=620&rect=416,0,897,1092&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=960&rect=416,0,897,1092&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1280&rect=416,0,897,1092&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1600&rect=416,0,897,1092&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=1920&rect=416,0,897,1092&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=2240&rect=416,0,897,1092&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?w=2560&rect=416,0,897,1092&auto=format,compress 2560w
                "
                      src="https://images.prismic.io/autumn-amsterdam/f41a131a-80d7-4a25-b2dd-d493c1542bde_numbered_studio_typology-skincare-shopify.jpg?auto=compress,format&rect=416,0,897,1092&w=1440&h=1754"
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
              <figcaption className="ProjectsSlice_caption__1PlsW">
                <h3>Typology</h3>
                <div>Skincare Shopify e-commerce</div>
              </figcaption>
            </figure>
          </a>
        </article>
      </section>

      <section className="QuoteSlice_quote__1H6VJ">
        <blockquote>
          <p>
            With more than 10 years of experience in working with fashion and
            beauty brands, start-ups, and technology companies, we help brands
            succeed.
          </p>
        </blockquote>
      </section>

      <section className="ProjectsSlice_projects1__2nqI4">
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Plink" href="/project/plink">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "46.8229%" }}
                ></div>
                <div
                  aria-hidden="true"
                  style={{
                    backgroundColor: "rgb(1, 102, 173)",
                    position: "absolute",
                    inset: "0px",
                  }}
                ></div>
                <picture>
                  <source
                    media="(max-width: 1024px) and (orientation: portrait)"
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=320&amp;rect=585,0,749,899&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=620&amp;rect=585,0,749,899&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=960&amp;rect=585,0,749,899&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1280&amp;rect=585,0,749,899&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1600&amp;rect=585,0,749,899&amp;auto=format,compress 1600w
              "
                    sizes="100vw"
                  />
                  <source
                    srcSet="
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=320&amp;auto=format,compress   320w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=620&amp;auto=format,compress   620w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=960&amp;auto=format,compress   960w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1280&amp;auto=format,compress 1280w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1600&amp;auto=format,compress 1600w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1920&amp;auto=format,compress 1920w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=2240&amp;auto=format,compress 2240w,
                https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=2560&amp;auto=format,compress 2560w
              "
                    sizes="100vw"
                  />
                  <img
                    src="https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?auto=compress,format"
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
                      transition: "none 0s ease 0s",
                    }}
                  />
                </picture>
                <noscript>
                  <picture>
                    <source
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=320&rect=585,0,749,899&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=620&rect=585,0,749,899&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=960&rect=585,0,749,899&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1280&rect=585,0,749,899&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1600&rect=585,0,749,899&auto=format,compress 1600w
                "
                      sizes="100vw"
                    />
                    <source
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=320&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=620&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=960&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1280&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1600&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1920&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=2240&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=2560&auto=format,compress 2560w
                "
                      sizes="100vw"
                    />
                    <img
                      loading="lazy"
                      sizes="100vw"
                      srcSet="
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=320&auto=format,compress   320w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=620&auto=format,compress   620w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=960&auto=format,compress   960w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1280&auto=format,compress 1280w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1600&auto=format,compress 1600w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=1920&auto=format,compress 1920w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=2240&auto=format,compress 2240w,
                  https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?w=2560&auto=format,compress 2560w
                "
                      src="https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?auto=compress,format"
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
              <figcaption className="ProjectsSlice_caption__1PlsW">
                <h3>Plink</h3>
                <div>For Mollie payment</div>
              </figcaption>
            </figure>
          </a>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
