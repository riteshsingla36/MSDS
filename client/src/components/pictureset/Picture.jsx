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
      <div
        className="workFeature__container js--initiated js--ready"
        data-behavior="wrapSmallFeatures"
        data-feature-wrapper="workFeature__list"
      >
        <article className="workFeatureItem">
          <a
            href="https://www.pentagram.com/work/the-great-green-wall-frontline"
            className="workFeatureItem__link"
          >
            <picture
              className="workFeatureItem__picture js--lazyloaded"
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
                srcSet="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=124%2C0%2C2305%2C1440&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
              />
              <source
                media="screen and (min-width: 1040px)"
                srcSet="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=345%2C0%2C1883%2C1440&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=345%2C0%2C1883%2C1440&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
              />
              <img
                alt="Mw Ggw 01"
                className="workFeatureItem__img"
                src="https://pentagram-production.imgix.net/4b9a7abf-f4f7-4f4c-ac3c-b30bcc241bac/MW_GGW_01.jpg?rect=345%2C0%2C1883%2C1440&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
              />
            </picture>
            <div className="workFeatureItem__title">
              <h4 className="typo--listingTitle">The Great Green Wall Frontline</h4>
              <p className="workFeatureItem__tagline">
                Identity for a climate initiative in Africa which sets out to be the
                largest living structure on the planet.
              </p>
            </div>
          </a>
        </article>
        <div className="workFeature__list">
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
                  Annual impact report for a company looking to make the future of
                  cocoa more sustainable.
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
                  An evolved identity, website, data visualization and comprehensive
                  guidelines for the global initiative tracking the world’s progress.
                </p>
              </div>
            </a>
          </article>
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
                  Brand identity for a company set up to produce, distribute and sell
                  fresh, pasteurised milk throughout Nigeria.
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
                  A poetry-inspired piece which forms part of the ‘26 Inspirations’
                  exhibition at the Bloomsbury Festival.
                </p>
              </div>
            </a>
          </article>
        </div>
        
      </div>


    </>
  )
}

export default Picture
