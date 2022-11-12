import React from 'react'
import "./picture.css"
const Picture = ({projects}) => {
  console.log("p", projects)
  return (
    <>
      <div className="homeWork">
        <div className="container">
          <section className="workFeature">
            <div
              className="workFeature__container js--initiated js--ready"
              data-behavior="wrapSmallFeatures"
              data-feature-wrapper="workFeature__list"
            >
              {(projects && projects.length> 0)? <>
              <article className="workFeatureItem">
                <a
                  href={`/projectdetails/${projects[0]._id}`}
                  className="workFeatureItem__link"
                >
                  <picture
                    className="workFeatureItem__picture js--lazyloaded"
    
                  >
                    <img
                      alt="Nj Riseforanimals 2"
                      className="workFeatureItem__img"
                      src={projects[0].images[0]}
                    />
                  </picture>
                  <div className="workFeatureItem__title">
                    <h4 className="typo--listingTitle">{projects[0].name}</h4>
                    <p className="workFeatureItem__tagline">
                      {projects[0].tag_line}
                    </p>
                  </div>
                </a>
              </article>
              <div className="workFeature__list">
                
                <article className="workFeatureSmallItem" style={{overflow: 'hidden'}}>
                  <a
                    href={`/projectdetails/${projects[1]._id}`}
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <img
                        alt="Thumbnail"
                        className="workFeatureSmallItem__img"
                        src={projects[1].images[0]}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">{projects[1].name}</h4>
                      <p className="workFeatureSmallItem__tagline">
                        {projects[1].tag_line}
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href={`/projectdetails/${projects[2]._id}`}
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                      
                    >
                      <img
                        alt="Mw Ggw 01"
                        className="workFeatureSmallItem__img"
                        src={projects[2].images[0]}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">
                      {projects[2].name}
                      </h4>
                      <p className="workFeatureSmallItem__tagline">
                      {projects[2].tag_line}
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href={`/projectdetails/${projects[3]._id}`}
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    
                    >
                      <img
                        alt="Ah Oficocoacompass 01 Cover"
                        className="workFeatureSmallItem__img"
                        src={projects[3].images[0]}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">
                      {projects[3].name}
                      </h4>
                      <p className="workFeatureSmallItem__tagline">
                      {projects[3].tag_line}
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href={`/projectdetails/${projects[4]._id}`}
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <img
                        alt="Goalkeepers Hero Placeholder"
                        className="workFeatureSmallItem__img"
                        src={projects[4].images[0]}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">{projects[4].name}</h4>
                      <p className="workFeatureSmallItem__tagline">
                        {projects[4].tag_line}
                      </p>
                    </div>
                  </a>
                </article>
              </div>
              </>:<></>}
              {projects.length>5? <>
                <div className="workFeature__list">
                  {projects[5].name? <>
                    <article className="workFeatureSmallItem">
                  <a
                    href={`/projectdetails/${projects[5]._id}`}
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <img
                        alt="Ah 01 Cam Logo Animation Thumbnail"
                        className="workFeatureSmallItem__img"
                        src={projects[5].images[0]}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">{projects[5].name}</h4>
                      <p className="workFeatureSmallItem__tagline">
                      {projects[5].tag_line}
                      </p>
                    </div>
                  </a>
                </article>
                  </>: <></>}
                
                  {( projects[6] && projects[6].name)? <>
                  <article className="workFeatureSmallItem">
                    <a
                      href={`/projectdetails/${projects[6]._id}`}
                      className="workFeatureSmallItem__link"
                    >
                      <picture
                        className="workFeatureSmallItem__picture js--lazyloaded"
                      >
                        <img
                          alt="Hp Animation 01 Cover"
                          className="workFeatureSmallItem__img"
                          src={projects[6].images[0]}
                        />
                      </picture>
                      <div className="workFeatureSmallItem__title">
                        <h4 className="typo--listingTitle">{projects[6].name}</h4>
                        <p className="workFeatureSmallItem__tagline">
                          {projects[6].tag_line}
                        </p>
                      </div>
                    </a>
                  </article>
                  </>: <></>}
                  {projects[7]? <>
                    <article className="workFeatureSmallItem">
                    <a
                      href={`/projectdetails/${projects[7]._id}`}
                      className="workFeatureSmallItem__link"
                    >
                      <picture
                        className="workFeatureSmallItem__picture"
                      >
                        <img
                          src={projects[7].images[0]? projects[7].images[0]: ''}
                          alt="Tkj Thumbnail"
                          className="workFeatureSmallItem__img"
                        />
                      </picture>
                      <div className="workFeatureSmallItem__title">
                        <h4 className="typo--listingTitle">{projects[7].name? projects[7].name:''}</h4>
                        <p className="workFeatureSmallItem__tagline">
                          {projects[7].tag_line? projects[7].tag_line:""}
                        </p>
                      </div>
                    </a>
                  </article>
                  </>: <></>}
                
                  {projects[8]? <>
                    <article className="workFeatureSmallItem">
                    <a
                      href={`/projectdetails/${projects[8]._id}`}
                      className="workFeatureSmallItem__link"
                    >
                      <picture
                        className="workFeatureSmallItem__picture"
                      >
                        <img
                          src={projects[8].images[0]?projects[8].images[0]:""}
                          alt="Nu Case 01"
                          className="workFeatureSmallItem__img"
                        />
                      </picture>
                      <div className="workFeatureSmallItem__title">
                        <h4 className="typo--listingTitle">{projects[8].name? projects[8].name : ""}</h4>
                        <p className="workFeatureSmallItem__tagline">
                        {projects[8].tag_line? projects[8].tag_line: ""}
                        </p>
                      </div>
                    </a>
                  </article>
                  </>:<></>}
                
              </div>
              {projects[9]? <>
                <article className="workFeatureItem">
                <a
                  href={`/projectdetails/${projects[9]._id}`}
                  className="workFeatureItem__link"
                >
                  <picture
                    className="workFeatureItem__picture js--lazyloaded"
                  >
                    <img
                      alt="Mw Stc 1 Cover"
                      className="workFeatureItem__img"
                      src={projects[9].images[0]? projects[9].images[0] :''}
                    />
                  </picture>
                  <div className="workFeatureItem__title">
                    <h4 className="typo--listingTitle">
                    {projects[9].name? projects[9].name : ''}
                    </h4>
                    <p className="workFeatureItem__tagline">
                    {projects[9].tag_line? projects[9].tag_line: ''}
                    </p>
                  </div>
                </a>
              </article>
              </>: <></>}
              
              </>: <></>}
              
              
            </div>

          </section>
        </div>
      </div>

    </>
  )
}

export default Picture
