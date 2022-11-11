import React from "react";
import { useNavigate } from "react-router-dom";
import AnimationDiv from "../../components/animation_div/AnimationDiv";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./contact.css";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <AnimationDiv />
      <a
        aria-label="Back to home page"
        href="/"
        className="about_main_logo_parent"
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1802.67 546.09"
          className="about_main_logo"
        >
          <defs>
            <style dangerouslySetInnerHTML={{ __html: ".cls-3{fill:rgb(80, 48, 19);}" }} />
          </defs>
          <path
            className="cls-3"
            d="M465.86,172.33,298.06,396.08H278.92L114.82,171.6V449.07a97.16,97.16,0,0,1-97.15,97.14V31H129.52L290.71,252.55,451.88,31H563V546.21H465.86Z"
            transform="translate(-17.67 -12.62)"
          />
          <path
            className="cls-3"
            d="M886.57,154.67c-17.66-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.84,64.77,107.42,13.23,207.54,41.2,207.54,164.11,0,114.8-101.58,164.12-216.4,164.12-105.23,0-186.18-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.76,30,104.25,30,61.06,0,118.48-21.33,118.48-77.26,0-48.57-50.78-68.44-119.23-75.8C659.17,306.27,562,278.31,562,162.77c0-106,104.51-149.4,199.45-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
            transform="translate(-17.67 -12.62)"
          />
          <path
            className="cls-3"
            d="M1429.77,283.46c2.2,130.27-77.27,262-257.59,262H969.8V30.29h202.38c176.65,0,255.4,125.85,257.59,253.17M1066.21,452h106c117,0,163.38-85.38,161.19-169.27-2.21-80.23-49.3-160.43-161.19-160.43h-106Z"
            transform="translate(-17.67 -12.62)"
          />
          <path
            className="cls-3"
            d="M1726.85,154.67c-17.67-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.83,64.77,107.43,13.23,207.54,41.2,207.54,164.11,0,114.8-101.57,164.12-216.39,164.12-105.23,0-186.19-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.75,30,104.24,30,61.07,0,118.49-21.33,118.49-77.26,0-48.57-50.79-68.44-119.23-75.8-105.24-12.52-202.4-40.48-202.4-156,0-106,104.52-149.4,199.46-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
            transform="translate(-17.67 -12.62)"
          />
        </svg>
      </a>
      <section className="contact_main__3QAHV">
        <div className="contact_description__dMHfw">
          <p>
            We are an Amsterdam and New-york based studio with a strong french
            accent working all over the world. <br />
            We like to support our clients at all stages of their projects,
            don&#x27;t hesitate to contact us!
          </p>
        </div>
        <div className="contact_information__1lX9-">
          <p>
            For projects inquiries
            <br />
            <a href="mailto:contact@numbered.com">contact@numbered.com</a>
          </p>
          <p></p>
          <p>
            We are always looking for new talent, feel free to contact us!
            <br />
            For Jobs and internships
            <br />
            <a href="mailto:jobs@numbered.com">jobs@numbered.com</a>
          </p>
          <p></p>
          <p>
            Numbered Ams
            <br />
            Herengracht 342-1
            <br />
            1016CG Amsterdam
            <br />
            The (sunny) Netherlands
          </p>
          <p></p>
          <p>
            Numbered Nyc
            <br />
            29-35 9th Ave,
            <br />
            New York, NY 10014
            <br />
            United States
          </p>
          <p></p>
          <p>
            Chamber of commerce (kvk) 81354789
            <br />
          </p>
        </div>
      </section>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }} className="contact-container">
        <div className="mapouter" style={{flex: 0.65}}>
          <div className="gmap_canvas">
            <iframe
              width='100%'
              height={500}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Manav%20Sachdev%20Design%20Studio%20%7C%20MSDS,%20Coworkinsta%207th,%20Floor,%20Tower%20Block%20C,%20Supermart-1,%20DLF%20Phase%20IV,%20Gurugram,%20Haryana%20122009&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
            <a href="https://fmovies-online.net" />
            <br />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;height:500px;width:100%;}",
              }}
            />
            <a href="https://www.embedgooglemap.net">
              how to embed a map in wordpress
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}",
              }}
            />
          </div>
        </div>
        <form className="contactus-form" style={{flex: 0.35}}>
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            className="feedback-input"
            placeholder="Comment"
            defaultValue={""}
          />
          <input type="submit" defaultValue="SUBMIT" className="submit-btn-contact"/>
        </form>
      </div>
      <section>
        <section className="SectionPushSlice_main__8CNrO">
          <article className="SectionPushSlice_article__1Sltj">
            <a aria-label="Ourworks" href="/projects">
              <figure>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    aria-hidden="true"
                    style={{ width: "100%", paddingBottom: "60.8889%" }}
                  ></div>
                  <picture>
                    <source
                      media="(max-width: 1024px) and (orientation: portrait)"
                      srcSet="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=320&amp;rect=279,0,343,548&amp;auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=620&amp;rect=279,0,343,548&amp;auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=960&amp;rect=279,0,343,548&amp;auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&amp;rect=279,0,343,548&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&amp;rect=279,0,343,548&amp;auto=format,compress 1600w"
                      sizes="100vw"
                    />
                    <source
                      srcSet="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&amp;auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&amp;auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1920&amp;auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2240&amp;auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2560&amp;auto=format,compress 2560w"
                      sizes="100vw"
                    />
                    <img
                      src="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?auto=compress,format"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: " 100%",
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
                        srcSet="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=320&rect=279,0,343,548&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=620&rect=279,0,343,548&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=960&rect=279,0,343,548&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&rect=279,0,343,548&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&rect=279,0,343,548&auto=format,compress 1600w"
                        sizes="100vw"
                      />
                      <source
                        srcSet="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2560&auto=format,compress 2560w"
                        sizes="100vw"
                      />
                      <img
                        loading="lazy"
                        sizes="100vw"
                        srcSet="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?w=2560&auto=format,compress 2560w"
                        src="https://images.prismic.io/autumn-amsterdam/fdfeb700-28bb-45ac-822a-2c4d1bf79caa_numbered-jorik-ecommerce.jpg?auto=compress,format"
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
                <figcaption className="SectionPushSlice_caption__19ik9">
                  <h3>Our works</h3>
                  <span>Watch our case studies</span>
                </figcaption>
              </figure>
            </a>
          </article>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
