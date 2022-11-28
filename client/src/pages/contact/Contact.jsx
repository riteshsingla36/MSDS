import React, { useEffect } from "react";
import AnimationDiv from "../../components/animation_div/AnimationDiv";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <style
              dangerouslySetInnerHTML={{
                __html: ".cls-3{fill:rgb(226, 82, 57);}",
              }}
            />
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
          We are committed to create a brand that connects emotionally. We seek to create new experiences and opening doors to opportunities for brands to thrive. <br />
          We like to support our clients at all stages of their projects,
          don&#x27;t hesitate to contact us!
          </p>
        </div>
        <div className="contact_information__1lX9-">
          <p>
            For projects inquiries
            <br />
            <a href="mailto:contact@numbered.com">INFO@MANAVSACHDEVDESIGN.COM</a>
            
          </p>
          <p></p>
          <p>
            <br/>
            We are always looking for new talent, feel free to contact us!
            <br />
            For Jobs and internships
            <br />
            <a href="mailto:jobs@numbered.com">INFO@MANAVSACHDEVDESIGN.COM</a>
          </p>
          <p></p>
          <p>
          <br/>

            MANAV SACHDEV DESIGN STUDIO 
            <br />
            COWORKINSTA 8TH FLOOR
            <br />
            SUPERMART-I DLF PHASE IV
            <br />
            GURUGRAM, HARYANA
          </p>
          <p></p>
          {/* <p>
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
          </p> */}
        </div>
      </section>
      <div className="contact-container" style={{positon: "relative"}}>
        <div className="mapouter" style={{ flex: 0.65 }}>
          <div className="gmap_canvas">
            <iframe
              width="100%"
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
        <div style={{position: "relative",flex: 0.35}}>

          <div className="login-box" style={{}}>
            <form action="https://formsubmit.co/studio.msds09@gmail.com" method="POST">
              <div className="user-box">
                <input type="email" name="email" required />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input type="text" name="_subject" required />
                <label>Subject</label>
              </div>
              <div className="user-box">
                <textarea name="query" required="" rows={"5"}/>
                <label>Query</label>
              </div>
              <input type="hidden" name="_next" value="https://msds-1.netlify.app"></input>

              <button type="submit" style={{backgroundColor: "white", color: "black", padding: "10px 30px", border: 0, borderRadius: `10px`, marginTop: "30px"}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <section>
        <section className="SectionPushSlice_main__8CNrO">
          <article className="SectionPushSlice_article__1Sltj">
            <a aria-label="Ourworks" href="/projects/all">
              <figure>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    aria-hidden="true"
                    style={{ width: "100%", paddingBottom: "60.8889%", backgroundColor: "black" }}
                    
                  ></div>
                  <picture className="pink_panther">
                    
                    <img
                      src={require('../../images/contactbottom.jpg')}
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
