import React from 'react'
import "./picture.css"
const Picture = () => {
  return (
    // <>
    //   <div className='testing'>
    //     <div>
    //       <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //       <h2 className='hi'>RItesh Kumar</h2>
    //       <p className='ptanhi'>testing</p>
    //     </div>
    //     <div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>


    //     </div>
    //   </div>
    //   <div className='testing testing1'>
    //     <div>
    //       <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //       <h2 className='hi'>RItesh Kumar</h2>
    //       <p className='ptanhi'>testing</p>
    //     </div>
    //     <div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>
    //       <div>
    //         <img src="https://pentagram-production.imgix.net/c0cf7873-34f0-4c63-a589-dca513d804d6/KINGSJESTER_12-9.jpg?rect=178%2C10%2C5623%2C4291&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2" alt="" />
    //         <h2 className='hi'>RItesh Kumar</h2>
    //         <p className='ptanhi'>testing</p>
    //       </div>


    //     </div>
    //   </div>
    // </>
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
              style={{
                backgroundImage:
                  'url("https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=90%2C0%2C1729%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
              }}
            >
              <source
                media="screen and (max-width: 599px)"
                srcSet="https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=90%2C0%2C1729%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=90%2C0%2C1729%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (max-width: 799px)"
                srcSet="https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=90%2C0%2C1729%2C1080&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=90%2C0%2C1729%2C1080&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 800px) and (max-width:1039px)"
                srcSet="https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=90%2C0%2C1729%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=90%2C0%2C1729%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 1040px)"
                srcSet="https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=203%2C0%2C1414%2C1080&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/1192f23c-dde8-49c7-9575-365ead3aad3e/NJ_RiseForAnimals_2.jpg?rect=203%2C0%2C1414%2C1080&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
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
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  srcSet="https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  srcSet="https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  srcSet="https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  srcSet="https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  alt="Thumbnail"
                  className="workFeatureSmallItem__img"
                  src="https://pentagram-production.imgix.net/9bd0aafe-f069-465c-9d0c-e0d9574e6fbb/thumbnail.png?rect=96%2C0%2C1728%2C1080&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  srcSet="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  srcSet="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  srcSet="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  srcSet="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  alt="Mw Ggw 01"
                  className="workFeatureSmallItem__img"
                  src="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  srcSet="https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  srcSet="https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  srcSet="https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  srcSet="https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  alt="Ah Oficocoacompass 01 Cover"
                  className="workFeatureSmallItem__img"
                  src="https://pentagram-production.imgix.net/43133985-ad44-448e-9de9-4b1229823d89/AH_OFiCocoaCompass_01_Cover.png?rect=113%2C0%2C1729%2C1080&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  srcSet="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  alt="Goalkeepers Hero Placeholder"
                  className="workFeatureSmallItem__img"
                  src="https://pentagram-production.imgix.net/78cf663a-03b4-4327-bfcf-2f6bee5eaf74/Goalkeepers-Hero-Placeholder.png?rect=0%2C125%2C6000%2C3750&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
        <article className="workFeatureItem">
          <a
            href="https://www.pentagram.com/work/evernow"
            className="workFeatureItem__link"
          >
            <picture
              className="workFeatureItem__picture"
              style={{
                backgroundImage:
                  'url("https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
              }}
            >
              <source
                media="screen and (max-width: 599px)"
                data-srcset="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (max-width: 799px)"
                data-srcset="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 800px) and (max-width:1039px)"
                data-srcset="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 1040px)"
                data-srcset="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=175%2C0%2C1570%2C1200&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=175%2C0%2C1570%2C1200&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
              />
              <img
                data-src="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=175%2C0%2C1570%2C1200&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                alt="1 Hero Logo"
                className="workFeatureItem__img"
              />
            </picture>
            <div className="workFeatureItem__title">
              <h4 className="typo--listingTitle">Evernow</h4>
              <p className="workFeatureItem__tagline">
                Brand identity and strategy for a science-based care company
                that is redefining menopause treatment for women
              </p>
            </div>
          </a>
        </article>
        <div className="workFeature__list">
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/skittledog"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt="Ah Skittledog Video1 Cover"
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Skittledog</h4>
                <p className="workFeatureSmallItem__tagline">
                  Brand identity for a new imprint from illustrated book
                  publisher Thames &amp; Hudson.
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/mit-media-lab"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt="Mb Mitmedialab 02"
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">MIT Media Lab</h4>
                <p className="workFeatureSmallItem__tagline">
                  Identity and wayfinding for the interdisciplinary research lab
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/toronto-pearson-airport"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Toronto Pearson Airport</h4>
                <p className="workFeatureSmallItem__tagline">
                  Wayfinding for Terminal 1 at the international airport
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/designed-by-apple-in-california"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">
                  ‘Designed by Apple in California’
                </h4>
                <p className="workFeatureSmallItem__tagline">
                  Book design that chronicles 20 years of Apple design
                </p>
              </div>
            </a>
          </article>
        </div>
        <div className="workFeature__list">
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/graphcore"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_01.jpg?rect=0%2C0%2C2000%2C1250&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Graphcore</h4>
                <p className="workFeatureSmallItem__tagline">
                  Identity, typeface and pattern generator for a machine
                  learning start-up
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/william-morris-society"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/13342dd6-7739-4eac-8fb6-7e0249759280/ah_williammorris_02.jpg?rect=0%2C96%2C1280%2C800&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">William Morris Society</h4>
                <p className="workFeatureSmallItem__tagline">
                  Identity for society dedicated to William Morris, an icon of
                  Victorian Britain
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/border-city"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/c889cea7-867a-4608-ad96-d8d64badb4b4/nj_bordercity_01.jpg?rect=0%2C0%2C3000%2C1874&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">‘Border City’</h4>
                <p className="workFeatureSmallItem__tagline">
                  Digital installation design for the London Design Biennale
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/london-design-festival-2016"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/c0bb7849-ad79-4f9a-8e16-0a6002a6f195/dl_ldf16_01.jpg?rect=0%2C49%2C2000%2C1248&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">
                  London Design Festival 2016
                </h4>
                <p className="workFeatureSmallItem__tagline">
                  Pentagram's tenth identity for one of the world's biggest
                  design events
                </p>
              </div>
            </a>
          </article>
        </div>
        <article className="workFeatureItem">
          <a
            href="https://www.pentagram.com/work/the-harley-davidson-museum-1"
            className="workFeatureItem__link"
          >
            <picture
              className="workFeatureItem__picture"
              style={{
                backgroundImage:
                  'url("https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
              }}
            >
              <source
                media="screen and (max-width: 599px)"
                data-srcset="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (max-width: 799px)"
                data-srcset="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 800px) and (max-width:1039px)"
                data-srcset="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 1040px)"
                data-srcset="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
              />
              <img
                data-src="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                alt="Jb Harley Davidson Museum 01"
                className="workFeatureItem__img"
              />
            </picture>
            <div className="workFeatureItem__title">
              <h4 className="typo--listingTitle">The Harley-Davidson Museum</h4>
              <p className="workFeatureItem__tagline">
                Design of a museum for the iconic American motorcycle
              </p>
            </div>
          </a>
        </article>
        <article className="workFeatureItem">
          <a
            href="https://www.pentagram.com/work/leafs-by-snoop-1"
            className="workFeatureItem__link"
          >
            <picture
              className="workFeatureItem__picture"
              style={{
                backgroundImage:
                  'url("https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
              }}
            >
              <source
                media="screen and (max-width: 599px)"
                data-srcset="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (max-width: 799px)"
                data-srcset="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 800px) and (max-width:1039px)"
                data-srcset="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 1040px)"
                data-srcset="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
              />
              <img
                data-src="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                alt=""
                className="workFeatureItem__img"
              />
            </picture>
            <div className="workFeatureItem__title">
              <h4 className="typo--listingTitle">Leafs by Snoop</h4>
              <p className="workFeatureItem__tagline">
                Identity, packaging, and website design for Snoop Dogg's
                marijuana line
              </p>
            </div>
          </a>
        </article>
        <div className="workFeature__list">
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/wien-modern"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Wien Modern</h4>
                <p className="workFeatureSmallItem__tagline">
                  Identity and typeface design for an Austrian music festival
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/platform"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/wp/592d516e91303/eo-platform-013.jpg?rect=0%2C80%2C1280%2C800&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Platform</h4>
                <p className="workFeatureSmallItem__tagline">
                  Identity for the organization dedicated to entrepreneurial
                  diversity
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/berry-bros-rudd"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt="Bbr 022"
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Berry Bros. &amp; Rudd</h4>
                <p className="workFeatureSmallItem__tagline">
                  Identity and collateral for Britain's oldest wine merchants
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/spiritland"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/2d3f73bd-fc4e-4b43-b685-a7e978905601/jhplp_00_spiritland_wordmark_03.gif?rect=0%2C85%2C2000%2C1250&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <video
                  playsInline=""
                  autoPlay=""
                  loop=""
                  muted=""
                  className="workFeatureSmallItem__img"
                >
                  <source
                    data-src="https://pentagram-production.imgix.net/2d3f73bd-fc4e-4b43-b685-a7e978905601/jhplp_00_spiritland_wordmark_03.gif?rect=0%2C85%2C2000%2C1250&w=400&fit=crop&fm=mp4&h=252&q=70&auto=format"
                    type="video/mp4"
                  />
                </video>
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Spiritland</h4>
                <p className="workFeatureSmallItem__tagline">
                  A waveform-inspired identity for a venue with a world-class
                  sound system
                </p>
              </div>
            </a>
          </article>
        </div>
        <div className="workFeature__list">
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/index-ventures-1"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Index Ventures</h4>
                <p className="workFeatureSmallItem__tagline">
                  Brand identity for Europe's leading venture capital firm
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/shake-shack"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt="Ps Shakeshack 01"
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Shake Shack</h4>
                <p className="workFeatureSmallItem__tagline">
                  Identity, packaging, and signage for the popular burger chain
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/world-wildlife-magazine"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/8c36464e-0188-4a14-b8ed-16fe01f37fb1/djs_wwfmagazine_01.jpg?rect=26%2C0%2C2049%2C1280&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">
                  ‘World Wildlife Magazine’
                </h4>
                <p className="workFeatureSmallItem__tagline">
                  Editorial design for World Wildlife Fund's magazine
                </p>
              </div>
            </a>
          </article>
          <article className="workFeatureSmallItem">
            <a
              href="https://www.pentagram.com/work/serpentine-galleries"
              className="workFeatureSmallItem__link"
            >
              <picture
                className="workFeatureSmallItem__picture"
                style={{
                  backgroundImage:
                    'url("https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                }}
              >
                <source
                  media="screen and (max-width: 599px)"
                  data-srcset="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                />
                <source
                  media="screen and (max-width: 799px)"
                  data-srcset="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 800px) and (max-width:1039px)"
                  data-srcset="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                />
                <source
                  media="screen and (min-width: 1040px)"
                  data-srcset="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                />
                <img
                  data-src="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                  alt=""
                  className="workFeatureSmallItem__img"
                />
              </picture>
              <div className="workFeatureSmallItem__title">
                <h4 className="typo--listingTitle">Serpentine Galleries</h4>
                <p className="workFeatureSmallItem__tagline">
                  Brand identity for a British cultural giant
                </p>
              </div>
            </a>
          </article>
        </div>
        <article className="workFeatureItem">
          <a
            href="https://www.pentagram.com/work/la-lettura"
            className="workFeatureItem__link"
          >
            <picture
              className="workFeatureItem__picture"
              style={{
                backgroundImage:
                  'url("https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=0%2C0%2C1500%2C938&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
              }}
            >
              <source
                media="screen and (max-width: 599px)"
                data-srcset="https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=0%2C0%2C1500%2C938&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=0%2C0%2C1500%2C938&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (max-width: 799px)"
                data-srcset="https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=0%2C0%2C1500%2C938&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=0%2C0%2C1500%2C938&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 800px) and (max-width:1039px)"
                data-srcset="https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=0%2C0%2C1500%2C938&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=0%2C0%2C1500%2C938&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 1040px)"
                data-srcset="https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=135%2C0%2C1227%2C938&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=135%2C0%2C1227%2C938&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
              />
              <img
                data-src="https://pentagram-production.imgix.net/a4654230-1d60-4179-a0af-9dd814ed009c/gl_lalettura_01.jpg?rect=135%2C0%2C1227%2C938&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                alt=""
                className="workFeatureItem__img"
              />
            </picture>
            <div className="workFeatureItem__title">
              <h4 className="typo--listingTitle">‘La Lettura’</h4>
              <p className="workFeatureItem__tagline">
                Data visualizations for the weekly cultural supplement of
                Corriere della Sera
              </p>
            </div>
          </a>
        </article>
      </div>
      <a href="https://www.pentagram.com/work/archive" className="loadMore">
        <span className="loadMore__label typo--nav">view all projects</span>
      </a>
    </section>
  </div>
</div>

    </>
  )
}

export default Picture
