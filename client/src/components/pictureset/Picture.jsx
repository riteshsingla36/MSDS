import React from "react";
import "./picture.css";
const Picture = ({ projects }) => {
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
              {projects.length > 0 ? (
                <>
                  {projects[0] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[0]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Nj Riseforanimals 2"
                              className="workFeatureItem__img"
                              src={projects[0].images[0]}
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[0].name}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[0].tag_line}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="workFeature__list">
                    {projects[1] ? (
                      <>
                        <article
                          className="workFeatureSmallItem"
                          style={{ overflow: "hidden" }}
                        >
                          <a
                            href={`/projectdetails/${projects[1]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[1].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[1].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[1].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[2] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[2]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
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
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[3] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[3]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
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
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[4] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[4]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Goalkeepers Hero Placeholder"
                                className="workFeatureSmallItem__img"
                                src={projects[4].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[4].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[4].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              {projects.length > 5 ? (
                <>
                  <div className="workFeature__list">
                    {projects[5].name ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[5]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Ah 01 Cam Logo Animation Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[5].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[5].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[5].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[6] && projects[6].name ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[6]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Hp Animation 01 Cover"
                                className="workFeatureSmallItem__img"
                                src={projects[6].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[6].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[6].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[7] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[7]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[7].images[0]
                                    ? projects[7].images[0]
                                    : ""
                                }
                                alt="Tkj Thumbnail"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[7].name ? projects[7].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[7].tag_line
                                  ? projects[7].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[8] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[8]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[8].images[0]
                                    ? projects[8].images[0]
                                    : ""
                                }
                                alt="Nu Case 01"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[8].name ? projects[8].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[8].tag_line
                                  ? projects[8].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  {projects[9] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[9]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Mw Stc 1 Cover"
                              className="workFeatureItem__img"
                              src={
                                projects[9].images[0]
                                  ? projects[9].images[0]
                                  : ""
                              }
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[9].name ? projects[9].name : ""}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[9].tag_line ? projects[9].tag_line : ""}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
              {projects.length > 10 ? (
                <>
                  {projects[10] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[10]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Nj Riseforanimals 2"
                              className="workFeatureItem__img"
                              src={projects[10].images[0]}
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[10].name}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[10].tag_line}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="workFeature__list">
                    {projects[11] ? (
                      <>
                        <article
                          className="workFeatureSmallItem"
                          style={{ overflow: "hidden" }}
                        >
                          <a
                            href={`/projectdetails/${projects[11]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[11].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[11].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[11].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[12] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[12]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Mw Ggw 01"
                                className="workFeatureSmallItem__img"
                                src={projects[12].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[12].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[12].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[13] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[13]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Ah Oficocoacompass 01 Cover"
                                className="workFeatureSmallItem__img"
                                src={projects[13].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[13].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[13].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[14] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[14]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Goalkeepers Hero Placeholder"
                                className="workFeatureSmallItem__img"
                                src={projects[14].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[14].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[14].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              {projects.length > 15 ? (
                <>
                  <div className="workFeature__list">
                    {projects[15].name ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[15]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Ah 01 Cam Logo Animation Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[15].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[15].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[15].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[16] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[16]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Hp Animation 01 Cover"
                                className="workFeatureSmallItem__img"
                                src={projects[16].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[16].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[16].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[17] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[17]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[17].images[0]
                                    ? projects[17].images[0]
                                    : ""
                                }
                                alt="Tkj Thumbnail"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[17].name ? projects[17].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[17].tag_line
                                  ? projects[17].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[18] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[18]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[18].images[0]
                                    ? projects[18].images[0]
                                    : ""
                                }
                                alt="Nu Case 01"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[18].name ? projects[18].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[18].tag_line
                                  ? projects[18].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  {projects[19] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[19]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Mw Stc 1 Cover"
                              className="workFeatureItem__img"
                              src={
                                projects[19].images[0]
                                  ? projects[19].images[0]
                                  : ""
                              }
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[19].name ? projects[19].name : ""}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[19].tag_line ? projects[19].tag_line : ""}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
              {projects.length > 20 ? (
                <>
                  {projects[20] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[20]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Nj Riseforanimals 2"
                              className="workFeatureItem__img"
                              src={projects[20].images[0]}
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[20].name}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[20].tag_line}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="workFeature__list">
                    {projects[21] ? (
                      <>
                        <article
                          className="workFeatureSmallItem"
                          style={{ overflow: "hidden" }}
                        >
                          <a
                            href={`/projectdetails/${projects[21]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[21].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[21].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[21].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[22] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[22]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Mw Ggw 01"
                                className="workFeatureSmallItem__img"
                                src={projects[22].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[22].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[22].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[23] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[23]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Ah Oficocoacompass 01 Cover"
                                className="workFeatureSmallItem__img"
                                src={projects[23].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[23].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[23].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[24] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[24]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Goalkeepers Hero Placeholder"
                                className="workFeatureSmallItem__img"
                                src={projects[24].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[24].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[24].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              {projects.length > 25 ? (
                <>
                  <div className="workFeature__list">
                    {projects[25].name ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[25]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Ah 01 Cam Logo Animation Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[25].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[25].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[25].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[26] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[26]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Hp Animation 01 Cover"
                                className="workFeatureSmallItem__img"
                                src={projects[26].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[26].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[26].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[27] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[27]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[27].images[0]
                                    ? projects[27].images[0]
                                    : ""
                                }
                                alt="Tkj Thumbnail"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[27].name ? projects[27].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[27].tag_line
                                  ? projects[27].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[28] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[28]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[28].images[0]
                                    ? projects[28].images[0]
                                    : ""
                                }
                                alt="Nu Case 01"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[28].name ? projects[28].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[28].tag_line
                                  ? projects[28].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  {projects[29] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[29]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Mw Stc 1 Cover"
                              className="workFeatureItem__img"
                              src={
                                projects[29].images[0]
                                  ? projects[29].images[0]
                                  : ""
                              }
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[29].name ? projects[29].name : ""}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[29].tag_line ? projects[29].tag_line : ""}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
              {projects.length > 30 ? (
                <>
                  {projects[30] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[30]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Nj Riseforanimals 2"
                              className="workFeatureItem__img"
                              src={projects[30].images[0]}
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[30].name}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[30].tag_line}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="workFeature__list">
                    {projects[31] ? (
                      <>
                        <article
                          className="workFeatureSmallItem"
                          style={{ overflow: "hidden" }}
                        >
                          <a
                            href={`/projectdetails/${projects[31]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[31].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[31].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[31].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[32] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[32]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Mw Ggw 01"
                                className="workFeatureSmallItem__img"
                                src={projects[32].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[32].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[32].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[33] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[33]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Ah Oficocoacompass 01 Cover"
                                className="workFeatureSmallItem__img"
                                src={projects[33].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[33].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[33].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[34] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[34]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Goalkeepers Hero Placeholder"
                                className="workFeatureSmallItem__img"
                                src={projects[34].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[34].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[34].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              {projects.length > 35 ? (
                <>
                  <div className="workFeature__list">
                    {projects[35].name ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[35]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Ah 01 Cam Logo Animation Thumbnail"
                                className="workFeatureSmallItem__img"
                                src={projects[35].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[35].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[35].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[36] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[36]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture js--lazyloaded">
                              <img
                                alt="Hp Animation 01 Cover"
                                className="workFeatureSmallItem__img"
                                src={projects[36].images[0]}
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[36].name}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[36].tag_line}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                    {projects[37] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[37]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[37].images[0]
                                    ? projects[37].images[0]
                                    : ""
                                }
                                alt="Tkj Thumbnail"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[37].name ? projects[37].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[37].tag_line
                                  ? projects[37].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}

                    {projects[38] ? (
                      <>
                        <article className="workFeatureSmallItem">
                          <a
                            href={`/projectdetails/${projects[38]._id}`}
                            className="workFeatureSmallItem__link"
                          >
                            <picture className="workFeatureSmallItem__picture">
                              <img
                                src={
                                  projects[38].images[0]
                                    ? projects[38].images[0]
                                    : ""
                                }
                                alt="Nu Case 01"
                                className="workFeatureSmallItem__img"
                              />
                            </picture>
                            <div className="workFeatureSmallItem__title">
                              <h4 className="typo--listingTitle">
                                {projects[38].name ? projects[38].name : ""}
                              </h4>
                              <p className="workFeatureSmallItem__tagline">
                                {projects[38].tag_line
                                  ? projects[38].tag_line
                                  : ""}
                              </p>
                            </div>
                          </a>
                        </article>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  {projects[39] ? (
                    <>
                      <article className="workFeatureItem">
                        <a
                          href={`/projectdetails/${projects[39]._id}`}
                          className="workFeatureItem__link"
                        >
                          <picture className="workFeatureItem__picture js--lazyloaded">
                            <img
                              alt="Mw Stc 1 Cover"
                              className="workFeatureItem__img"
                              src={
                                projects[39].images[0]
                                  ? projects[39].images[0]
                                  : ""
                              }
                            />
                          </picture>
                          <div className="workFeatureItem__title">
                            <h4 className="typo--listingTitle">
                              {projects[39].name ? projects[39].name : ""}
                            </h4>
                            <p className="workFeatureItem__tagline">
                              {projects[39].tag_line ? projects[39].tag_line : ""}
                            </p>
                          </div>
                        </a>
                      </article>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Picture;
