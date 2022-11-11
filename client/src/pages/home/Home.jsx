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
import '../../images/1.jpg'
import Slider from "../../components/bottomInfiniteSlider/Slider";

const Home = () => {
  let [a, setA] = useState(1);
  const changeImage = (id) => {
    setA(Number(id.split(" ")[1].split("-")[1]));
  };
  return (
    <div style={{overflow: "hidden"}}>
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
        </div>

        <img
          src={require(`../../images/banner/banner(${a}).jpg`)}
          alt="#"
          width={"100%"}
          height={"100%"}
          className="banner-img"
          style={{objectFit: "cover"}}
        />

        <Link className="main-txt prevent-select" to="/">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1802.67 546.09"
            className="main_logo_msds"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#fff;}" }}
              />
            </defs>
            <path
              className="cls-1"
              d="M465.86,172.33,298.06,396.08H278.92L114.82,171.6V449.07a97.16,97.16,0,0,1-97.15,97.14V31H129.52L290.71,252.55,451.88,31H563V546.21H465.86Z"
              transform="translate(-17.67 -12.62)"
            />
            <path
              className="cls-1"
              d="M886.57,154.67c-17.66-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.84,64.77,107.42,13.23,207.54,41.2,207.54,164.11,0,114.8-101.58,164.12-216.4,164.12-105.23,0-186.18-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.76,30,104.25,30,61.06,0,118.48-21.33,118.48-77.26,0-48.57-50.78-68.44-119.23-75.8C659.17,306.27,562,278.31,562,162.77c0-106,104.51-149.4,199.45-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
              transform="translate(-17.67 -12.62)"
            />
            <path
              className="cls-1"
              d="M1429.77,283.46c2.2,130.27-77.27,262-257.59,262H969.8V30.29h202.38c176.65,0,255.4,125.85,257.59,253.17M1066.21,452h106c117,0,163.38-85.38,161.19-169.27-2.21-80.23-49.3-160.43-161.19-160.43h-106Z"
              transform="translate(-17.67 -12.62)"
            />
            <path
              className="cls-1"
              d="M1726.85,154.67c-17.67-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.83,64.77,107.43,13.23,207.54,41.2,207.54,164.11,0,114.8-101.57,164.12-216.39,164.12-105.23,0-186.19-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.75,30,104.24,30,61.07,0,118.49-21.33,118.49-77.26,0-48.57-50.79-68.44-119.23-75.8-105.24-12.52-202.4-40.48-202.4-156,0-106,104.52-149.4,199.46-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
              transform="translate(-17.67 -12.62)"
            />
          </svg>
        </Link>
        <div className="bottom-txt prevent-select">
          <Link to="/client/src/pages/about" style={{letterSpacing: '6px'}}>Manav Sachdev Design Studio</Link>
        </div>
      </div>

      <section className="DescriptionSlice_description__N9ojT">
        <div>
          <div className="DescriptionSlice_about__3fKWM">
            <p>
            MSDS is a creative design agency, crafting visual stories 
            for brands and businesses globally at all stages of their journey.
            </p>
            <a className="a--underlined" href="/about">
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
          <a aria-label="Palette" href="/projectdetails/palette">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "121.806%" }}
                ></div>
                <picture>
                  <source
                    media="(max-width: 1024px) and (orientation: portrait)"
                    sizes="100vw"
                  />
                  <source
                
                    sizes="50vw"
                  />
                  <img
                    src={require('../../images/2_1867177d-ee6b-490f-81e3-afd82d0fdcc6_1200x1200.webp')}
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
                    <img
                      loading="lazy"
                      sizes="50vw"
                      src={require('../../images/8.jpg')}
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
                <h3>BABY FOREST</h3>
                <div>Brand development + Concept + Illustrations + Packaging</div>
              </figcaption>
            </figure>
          </a>
        </article>
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Routinely" href="/projectdetails/palette">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "60.9028%" }}
                ></div>
                <picture>
                  <img
                    src={require('../../images/fabessential.jpg')}
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
                    <img
                      loading="lazy"
                      sizes="50vw"
                  src={require('../../images/4.jpg')}
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
                <h3>FABESSENTIAL BY FABINDIA</h3>
                <div>Concept + Packaging design identity</div>
              </figcaption>
            </figure>
          </a>
        </article>
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Veloretti" href="/projectdetails/palette">
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "60.9028%" }}
                ></div>
                <picture>
                  <img
                   src={require('../../images/7.jpg')}
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
                    <img
                      loading="lazy"
                      sizes="50vw"
                      src={require('../../images/5.jpg')}
                      // src="https://images.prismic.io/autumn-amsterdam/ee9479b8-fd27-4693-a168-b7af90863acf_veloretti-electric-amsterdam-website.jpg?auto=compress,format&rect=128,0,2627,1600&w=1440&h=877"
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
                <h3>SUPER SMELLY</h3>
                <div>Brand development + Concept + Illustrations + Packaging</div>
              </figcaption>
            </figure>
          </a>
        </article>
      </section>

      <section className="QuoteSlice_quote__1H6VJ">
        <blockquote>
          <p>
          We Collaborate with national and international brands, founders, start-ups offering experiences from concept to delivery.
          </p>
        </blockquote>
      </section>

      <section className="ProjectsSlice_projects2__O2Zbk">
        <article className="ProjectsSlice_article__uEv9O">
          <a
            aria-label="Jean Paul Gaultier &amp; Sacai"
            href="/projectdetails/pallate"
          >
            <figure>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "121.806%" }}
                ></div>
                <picture>
                  <img
                src={require('../../images/8907833004743-1.jpg')}
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
                    <img
                      loading="lazy"
                      sizes="50vw"
                src={require('../../images/4a.jpg')}
                      alt="#"
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
                <h3>THE EARTH COLLECTIVE</h3>
                <div>Brand identity + Concept + Packaging design identity + illustrations + website design</div>
              </figcaption>
            </figure>
          </a>
        </article>
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Typology" href="/projectdetails/palette">
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
                  <img
                src={require('../../images/8907833004323-1 (1).jpg')}
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
            
                    <img
                      loading="lazy"
                      sizes="50vw"
                src={require('../../images/3a.jpg')}
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
                <h3>ENTISI</h3>
                <div>Concept + Packaging design identity + illustrations </div>
              </figcaption>
            </figure>
          </a>
        </article>
      </section>

      <section className="QuoteSlice_quote__1H6VJ ourServices" style={{marginBottom: '120rem'}}>
        <blockquote>
          <p >
          With more than 10 years of experience in working with beauty brands, fashion, FMCG, technology companies, we help brands succeed.
          </p>
        </blockquote>
      </section>

      <div style={{fontSize: '74px', fontWeight: 'bold', textAlign: 'center', width: '100%', margin: 'auto', marginBottom: '120rem'}}>
        <h2>Our Services</h2>
      </div>

      <section className="ListSlice_main__mKXcM" style={{justifyContent: 'center'}}>
      <dl className="ListSlice_list__3B0uk" style={{marginLeft: '30rem', marginRight: '30rem'}}>
            <dt>Ideas &amp; Strategy</dt>
            <p></p>
            <dd>Consulting</dd>
            <dd>Positioning</dd>
            <dd>Brand strategy</dd>
            <dd>Brand story</dd>
            <dd>Brand content</dd>
            <dd>Brand Concept</dd>
            <dd>Copywriting</dd>
          </dl>
          <dl className="ListSlice_list__3B0uk" style={{marginLeft: '30rem', marginRight: '30rem'}}>
            <dt>Creation &amp; Design</dt>
            <p></p>
            <dd>Art Direction</dd>
            <dd>Brand identity</dd>
            <dd>UI/UX/ Website design</dd>
            <dd>Packaging Design</dd>
            <dd>Print Design </dd>
            <dd>Social Media assets</dd>
            <dd>Photography &amp; Videos </dd>
            <dd>Mobile App</dd>
            <dd>3d assests</dd>
          </dl>
          <dl className="ListSlice_list__3B0uk" style={{marginLeft: '30rem', marginRight: '30rem'}}>
            <dt>Technology</dt>
            <p></p>
            <dd>Creative Development</dd>
            <dd>Front-end development</dd>
            <dd>Back-end development</dd>
            <dd>Shopify development</dd>
            <dd>Mobile &amp; IOS web app</dd>
          </dl>
          <dl className="ListSlice_list__3B0uk" style={{marginLeft: '30rem', marginRight: '30rem'}}>
            <dt>Marketing</dt>
            <p></p>
            <dd>Lead generation</dd>
            <dd>Social Media Marketing</dd>
            <dd>Email Marketing</dd>
            <dd>Funnel Marketing </dd>
            <dd>SEO</dd>
          </dl>
        </section>
        <Slider/>
      <section className="ProjectsSlice_projects1__2nqI4">
        <article className="ProjectsSlice_article__uEv9O">
          <a aria-label="Plink" href="/projectdetails/palette">
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
      
                  <img
                src={require('../../images/3a.jpg')}
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
                    <img
                      loading="lazy"
                      sizes="100vw"
                      src={require('../../images/3a.jpg')}

                      // src="https://images.prismic.io/autumn-amsterdam/4320fa30-a15b-4ecb-a638-ac19ff865b31_numbered_plink_by_mollie.jpg?auto=compress,format"
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
