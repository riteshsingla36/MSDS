import React from "react";
import "./picture.css";
const Picture = ({ projects }) => {
  return (
    <>
      <div className="homeWork">
        <div className="container">
          <section className="workFeature">
            <div
              // className="workFeature__container js--initiated js--ready"
              // data-behavior="wrapSmallFeatures"
              // data-feature-wrapper="workFeature__list"
              className="image-parent"
              style={{
                display: "grid",
                gap: '10px',
                gridTemplateColumns: "repeat(3,1fr)",
              }}
            >
              {
                projects.map((project) => <article
                // className="workFeatureSmallItem"
                style={{ overflow: "hidden" }}
              >
                <a
                  href={`/projectdetails/${project.slug}`}
                  className="workFeatureSmallItem__link"
                >
                  <picture className="workFeatureSmallItem__picture js--lazyloaded">
                    <img
                      alt="Thumbnail"
                      className="workFeatureSmallItem__img"
                      height="100% !important"
                      src={project.images[0]}
          
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">
                      {project.name}
                    </h4>
                    <p className="workFeatureSmallItem__tagline">
                      {project.tag_line}
                    </p>
                  </div>
                </a>
              </article>)
              }
              
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Picture;
