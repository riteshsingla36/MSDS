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
                  href="https://www.pentagram.com/work/rise-for-animals"
                  className="workFeatureItem__link"
                >
                  <picture
                    className="workFeatureItem__picture js--lazyloaded"
    
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet={require('../../images/266223173_628024295016281_6464876987599167266_n_17873896613560252.jpg')}
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet={require('../../images/266223173_628024295016281_6464876987599167266_n_17873896613560252.jpg')}
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet={require('../../images/266223173_628024295016281_6464876987599167266_n_17873896613560252.jpg')}
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet={require('../../images/266223173_628024295016281_6464876987599167266_n_17873896613560252.jpg')}
                    />
                    <img
                      alt="Nj Riseforanimals 2"
                      className="workFeatureItem__img"
                      src="https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=203%2C0%2C1414%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
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
                <article className="workFeatureSmallItem">
                  <a
                    href="https://www.pentagram.com/work/i-voted"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                      
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <img
                        alt="Thumbnail"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/1a.jpg')}
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
                    href="https://www.pentagram.com/work/the-great-green-wall-frontline"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                      
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <img
                        alt="Mw Ggw 01"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/1a.jpg')}
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
                    href="https://www.pentagram.com/work/ofi-cocoa-compass-impact-report"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        srcSet={require('../../images/1a.jpg')}
                      />
                      <img
                        alt="Ah Oficocoacompass 01 Cover"
                        className="workFeatureSmallItem__img"
                        src={require('../../images/1a.jpg')}
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
                    href="https://www.pentagram.com/work/goalkeepers"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                      />
                      <img
                        alt="Goalkeepers Hero Placeholder"
                        className="workFeatureSmallItem__img"
                        src="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/1a.jpg?rect=0%2C125%2C6000%2C3750&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                    href="https://www.pentagram.com/work/cam"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                      style={{
                        backgroundImage:
                          'url("https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                      }}
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        srcSet="https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        srcSet="https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        srcSet="https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        srcSet="https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                      />
                      <img
                        alt="Ah 01 Cam Logo Animation Thumbnail"
                        className="workFeatureSmallItem__img"
                        src="https://pentagram-production.imgix.net/b804eb07-e8b5-4a98-b12b-6c89eb4d8345/AH_01_Cam_Logo_Animation_Thumbnail.jpg?rect=101%2C0%2C1730%2C1080&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                    href="https://www.pentagram.com/work/late-fragments"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture js--lazyloaded"
                      style={{
                        backgroundImage:
                          'url("https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                      }}
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        srcSet="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        srcSet="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        srcSet="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        srcSet="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                      />
                      <img
                        alt="Hp Animation 01 Cover"
                        className="workFeatureSmallItem__img"
                        src="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                    href="https://www.pentagram.com/work/the-king-s-jester"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture"
                      style={{
                        backgroundImage:
                          'url("https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                      }}
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        data-srcset="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        data-srcset="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        data-srcset="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        data-srcset="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                      />
                      <img
                        data-src="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                    href="https://www.pentagram.com/work/nubank"
                    className="workFeatureSmallItem__link"
                  >
                    <picture
                      className="workFeatureSmallItem__picture"
                      style={{
                        backgroundImage:
                          'url("https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                      }}
                    >
                      <source
                        media="screen and (max-width: 599px)"
                        data-srcset="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                      />
                      <source
                        media="screen and (max-width: 799px)"
                        data-srcset="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 800px) and (max-width:1039px)"
                        data-srcset="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                      />
                      <source
                        media="screen and (min-width: 1040px)"
                        data-srcset="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                      />
                      <img
                        data-src="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                  href="https://www.pentagram.com/work/shakespeare-theatre-company"
                  className="workFeatureItem__link"
                >
                  <picture
                    className="workFeatureItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/d509dc50-6e2c-44b7-975b-8e78a283947e/MW_STC_2_cover.jpg?rect=270%2C0%2C1414%2C1080&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/d509dc50-6e2c-44b7-975b-8e78a283947e/MW_STC_2_cover.jpg?rect=270%2C0%2C1414%2C1080&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
                    />
                    <img
                      alt="Mw Stc 1 Cover"
                      className="workFeatureItem__img"
                      src="https://pentagram-production.imgix.net/d509dc50-6e2c-44b7-975b-8e78a283947e/MW_STC_2_cover.jpg?rect=270%2C0%2C1414%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
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
