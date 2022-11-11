import React from 'react'
import "./picture.css"
const Picture = () => {
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
              <article className="workFeatureItem">
                <a
                  href="/projectdetails/pallate"
                  className="workFeatureItem__link"
                >
                  <picture
                    className="workFeatureItem__picture js--lazyloaded"
    
                  >
                    <img
                      alt="Nj Riseforanimals 2"
                      className="workFeatureItem__img"
                      src={require('../../images/266223173_628024295016281_6464876987599167266_n_17873896613560252.jpg')}
                    />
                  </picture>
                  <div className="workFeatureItem__title">
                    <h4 className="typo--listingTitle">Rise for Animals</h4>
                    <p className="workFeatureItem__tagline">
                      Brand identity, brand strategy and naming for the national
                      animal rights organization
                    </p>
                  </div>
                </a>
              </article>
              <div className="workFeature__list">
                <article className="workFeatureSmallItem" style={{overflow: 'hidden'}}>
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <img
                        alt="Thumbnail"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/web2.webp')}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">‘I Voted’</h4>
                      <p className="workFeatureSmallItem__tagline">
                        A data-focused redesign of the iconic ‘I Voted’ sticker for
                        Fast Company’s new campaign
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                      
                    >
                      <img
                        alt="Mw Ggw 01"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/web1.webp')}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">
                        The Great Green Wall Frontline
                      </h4>
                      <p className="workFeatureSmallItem__tagline">
                        Identity for a climate initiative in Africa which sets out to
                        be the largest living structure on the planet.
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    
                    >
                      <img
                        alt="Ah Oficocoacompass 01 Cover"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/web3.jpg')}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">
                        ofi Cocoa Compass Impact Report
                      </h4>
                      <p className="workFeatureSmallItem__tagline">
                        Annual impact report for a company looking to make the future
                        of cocoa more sustainable.
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <img
                        alt="Goalkeepers Hero Placeholder"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/web4.jpg')}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">Goalkeepers</h4>
                      <p className="workFeatureSmallItem__tagline">
                        An evolved identity, website, data visualization and
                        comprehensive guidelines for the global initiative tracking
                        the world’s progress.
                      </p>
                    </div>
                  </a>
                </article>
              </div>
              <div className="workFeature__list">
                <article className="workFeatureSmallItem">
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <img
                        alt="Ah 01 Cam Logo Animation Thumbnail"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/web5.jpg')}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">Câm</h4>
                      <p className="workFeatureSmallItem__tagline">
                        Brand identity for a company set up to produce, distribute and
                        sell fresh, pasteurised milk throughout Nigeria.
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <img
                        alt="Hp Animation 01 Cover"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/web6.jpg')}
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">Late Fragments</h4>
                      <p className="workFeatureSmallItem__tagline">
                        A poetry-inspired piece which forms part of the ‘26
                        Inspirations’ exhibition at the Bloomsbury Festival.
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture"
                    >
                      <img
                        src={require('../../images/web7.jpg')}
                        alt="Tkj Thumbnail"
                        className="workFeatureSmallItem__img"
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">‘The King’s Jester’</h4>
                      <p className="workFeatureSmallItem__tagline">
                        Title sequence for the Netflix comedy special starring Hasan
                        Minhaj
                      </p>
                    </div>
                  </a>
                </article>
                <article className="workFeatureSmallItem">
                  <a
                    href="/projectdetails/pallate"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture"
                    >
                      <img
                        src={require('../../images/web8.jpg')}
                        alt="Nu Case 01"
                        className="workFeatureSmallItem__img"
                      />
                    </picture>
                    <div className="workFeatureSmallItem__title">
                      <h4 className="typo--listingTitle">Nubank</h4>
                      <p className="workFeatureSmallItem__tagline">
                        Brand identity for the Brazilian digital bank.
                      </p>
                    </div>
                  </a>
                </article>
              </div>
              <article className="workFeatureItem">
                <a
                  href="/projectdetails/pallate"
                  className="workFeatureItem__link"
                >
                  <picture
                    className="workFeatureItem__picture js--lazyloaded"
                  >
                    {/* <source
                      media="screen and (max-width: 599px)"
                      srcSet={require('../../images/web9.webp')}
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet={require('../../images/web9.webp')}
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet={require('../../images/web9.webp')}
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet={require('../../images/web9.webp')}
                    /> */}
                    <img
                      alt="Mw Stc 1 Cover"
                      className="workFeatureItem__img"
                      src={require('../../images/web9.webp')}
                    />
                  </picture>
                  <div className="workFeatureItem__title">
                    <h4 className="typo--listingTitle">
                      Shakespeare Theatre Company
                    </h4>
                    <p className="workFeatureItem__tagline">
                      Brand identity for Washington DC’s pioneering theatre company.
                    </p>
                  </div>
                </a>
              </article>
              
            </div>

          </section>
        </div>
      </div>

    </>
  )
}

export default Picture
