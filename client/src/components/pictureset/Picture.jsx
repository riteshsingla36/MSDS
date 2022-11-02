import React from "react";
// import { Link } from 'react-router-dom'
import "./picture.css";

const Picture = () => {
  return (
    <>
      <div className="container">
        <section className="workFeature">
          <div
            className="workFeature__container js--initiated js--ready"
            data-behavior="wrapSmallFeatures"
            data-feature-wrapper="workFeature__list"
          >
            <article className="workFeatureItem">
              <a
                href="https://www.pentagram.com/work/berry-bros-rudd"
                className="workFeatureItem__link"
              >
                <picture
                  className="workFeatureItem__picture js--lazyloaded"
                  style={{
                    backgroundImage:
                      'url("https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                  }}
                >
                  <source
                    media="screen and (max-width: 599px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                  />
                  <source
                    media="screen and (max-width: 799px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                  />
                  <source
                    media="screen and (min-width: 800px) and (max-width:1039px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=0%2C28%2C1280%2C798&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                  />
                  <source
                    media="screen and (min-width: 1040px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=64%2C0%2C1118%2C853&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=64%2C0%2C1118%2C853&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
                  />
                  <img
                    alt="Bbr 022"
                    className="workFeatureItem__img"
                    src="https://pentagram-production.imgix.net/wp/592c4fd642b2d/bbr-022.jpg?rect=64%2C0%2C1118%2C853&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                  />
                </picture>
                <div className="workFeatureItem__title">
                  <h4 className="typo--listingTitle">Berry Bros. &amp; Rudd</h4>
                  <p className="workFeatureItem__tagline">
                    Identity and collateral for Britain's oldest wine merchants
                  </p>
                </div>
              </a>
            </article>
            <div className="workFeature__list">
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
                      Identity for a climate initiative in Africa which sets out to be
                      the largest living structure on the planet.
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/the-harley-davidson-museum-1"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="Jb Harley Davidson Museum 01"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/wp/5936276a0bb03/jb-harley-davidson-museum-01.jpg?rect=0%2C73%2C1280%2C799&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">The Harley-Davidson Museum</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Design of a museum for the iconic American motorcycle
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
                      comprehensive guidelines for the global initiative tracking the
                      world’s progress.
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
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="Mb Mitmedialab 02"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_02.jpg?rect=0%2C59%2C3000%2C1873&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
            </div>
            <div className="workFeature__list">
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/nubank"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="Nu Case 01"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/evernow"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="1 Hero Logo"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Evernow</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Brand identity and strategy for a science-based care company
                      that is redefining menopause treatment for women
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/teabox"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/7fed6a5f-bf8d-4c49-bf9a-95fd2b8a4983/nj_teabox_01.jpg?rect=0%2C30%2C3000%2C1875&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Teabox</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Identity, packaging, and website design for the tea commerce
                      company
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/cooper-hewitt-smithsonian-design-museum-1"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/58966299-d623-46be-84f4-e9773a97b82d/mg_eo_cooperhewitt_01.jpg?rect=0%2C490%2C2000%2C1250&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">
                      Cooper Hewitt Smithsonian Design Museum
                    </h4>
                    <p className="workFeatureSmallItem__tagline">
                      Identity, website, and wayfinding design for the museum
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
                  <h4 className="typo--listingTitle">Shakespeare Theatre Company</h4>
                  <p className="workFeatureItem__tagline">
                    Brand identity for Washington DC’s pioneering theatre company.
                  </p>
                </div>
              </a>
            </article>
            <article className="workFeatureItem">
              <a
                href="https://www.pentagram.com/work/toronto-pearson-airport"
                className="workFeatureItem__link"
              >
                <picture
                  className="workFeatureItem__picture js--lazyloaded"
                  style={{
                    backgroundImage:
                      'url("https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                  }}
                >
                  <source
                    media="screen and (max-width: 599px)"
                    srcSet="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                  />
                  <source
                    media="screen and (max-width: 799px)"
                    srcSet="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                  />
                  <source
                    media="screen and (min-width: 800px) and (max-width:1039px)"
                    srcSet="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=0%2C300%2C3000%2C1875&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                  />
                  <source
                    media="screen and (min-width: 1040px)"
                    srcSet="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=75%2C0%2C2846%2C2175&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=75%2C0%2C2846%2C2175&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
                  />
                  <img
                    alt=""
                    className="workFeatureItem__img"
                    src="https://pentagram-production.imgix.net/f0d69667-b2f8-417d-8805-b5379e0af290/mg_torontoairport_01.jpg?rect=75%2C0%2C2846%2C2175&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                  />
                </picture>
                <div className="workFeatureItem__title">
                  <h4 className="typo--listingTitle">Toronto Pearson Airport</h4>
                  <p className="workFeatureItem__tagline">
                    Wayfinding for Terminal 1 at the international airport
                  </p>
                </div>
              </a>
            </article>
            <div className="workFeature__list">
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/london-college-of-communication"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/c002ccfe-8ed3-4e4f-ad9f-be1d2202ca51/dl_lcc_01.jpg?rect=0%2C29%2C2000%2C1248&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">
                      London College of Communication
                    </h4>
                    <p className="workFeatureSmallItem__tagline">
                      Wayfinding solution for one of London's best-known design
                      colleges
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/skittledog"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="Ah Skittledog Video1 Cover"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Skittledog</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Brand identity for a new imprint from illustrated book publisher
                      Thames &amp; Hudson.
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
                      Brand identity for a company set up to produce, distribute and
                      sell fresh, pasteurised milk throughout Nigeria.
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/wien-modern"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/wp/592cbe7f90bd1/pentagram-wien-modern1.jpg?rect=0%2C0%2C0%2C0&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
            </div>
            <div className="workFeature__list">
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/shake-shack"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="Ps Shakeshack 01"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/f94e9ca9-f3d6-42b0-b5e7-56d7afa131ba/ps_shakeshack_01.jpg?rect=0%2C494%2C3000%2C1872&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                  href="https://www.pentagram.com/work/serpentine-galleries"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/831a1499-5937-4f47-9cc4-8ca60afc67dc/mw_serpentine_01.jpg?rect=0%2C149%2C2000%2C1249&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/skiff"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="01 Skiff Casestudy 3dlogo Copy"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/74f2edb7-ed36-4148-9a4b-8ade8c982a6c/01_Skiff_CaseStudy_3DLogocopy.jpg?rect=9%2C37%2C1485%2C928&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Skiff</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Brand identity for the end-to-end encrypted collaboration
                      platform
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/leafs-by-snoop-1"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/12162b14-5258-44c7-b3ef-77a0070a550b/emo_leafsbysnoop_01.jpg?rect=0%2C0%2C3000%2C1872&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Leafs by Snoop</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Identity, packaging, and website design for Snoop Dogg's
                      marijuana line
                    </p>
                  </div>
                </a>
              </article>
            </div>
            <article className="workFeatureItem">
              <a
                href="https://www.pentagram.com/work/late-fragments"
                className="workFeatureItem__link"
              >
                <picture
                  className="workFeatureItem__picture js--lazyloaded"
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
                    srcSet="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=167%2C0%2C3108%2C1939&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                  />
                  <source
                    media="screen and (min-width: 1040px)"
                    srcSet="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=430%2C0%2C2547%2C1944&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=430%2C0%2C2547%2C1944&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
                  />
                  <img
                    alt="Hp Animation 01 Cover"
                    className="workFeatureItem__img"
                    src="https://pentagram-production.imgix.net/e1ac078b-f89e-4ede-8c44-3570bc383027/HP_Animation_01_Cover.jpg?rect=430%2C0%2C2547%2C1944&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                  />
                </picture>
                <div className="workFeatureItem__title">
                  <h4 className="typo--listingTitle">Late Fragments</h4>
                  <p className="workFeatureItem__tagline">
                    A poetry-inspired piece which forms part of the ‘26 Inspirations’
                    exhibition at the Bloomsbury Festival.
                  </p>
                </div>
              </a>
            </article>
            <article className="workFeatureItem">
              <a
                href="https://www.pentagram.com/work/oregon-state-university"
                className="workFeatureItem__link"
              >
                <picture
                  className="workFeatureItem__picture js--lazyloaded"
                  style={{
                    backgroundImage:
                      'url("https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                  }}
                >
                  <source
                    media="screen and (max-width: 599px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                  />
                  <source
                    media="screen and (max-width: 799px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                  />
                  <source
                    media="screen and (min-width: 800px) and (max-width:1039px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                  />
                  <source
                    media="screen and (min-width: 1040px)"
                    srcSet="https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=740&fit=crop&fm=jpg&q=70&auto=format&h=565, https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=740&fit=crop&q=70&fm=jpg&auto=format&h=565&dpr=2 2x"
                  />
                  <img
                    alt=""
                    className="workFeatureItem__img"
                    src="https://pentagram-production.imgix.net/wp/592d67b7c5458/ds-osu-6-updated.jpg?rect=0%2C0%2C0%2C0&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382"
                  />
                </picture>
                <div className="workFeatureItem__title">
                  <h4 className="typo--listingTitle">Oregon State University</h4>
                  <p className="workFeatureItem__tagline">
                    Logo and identity for Beaver Nation
                  </p>
                </div>
              </a>
            </article>
            <div className="workFeature__list">
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/galaxy"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="1 Logo Animation Web Copy"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/45649d5f-30a2-4fbd-8c8e-37c4f38daf41/1_Logo_Animation_Webcopy.jpg?rect=96%2C0%2C1728%2C1080&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Galaxy</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Brand identity for the Web3 financial platform.
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/mulberry"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/994022a2-24b0-4a1d-8cfc-1e612c6bd2d4/ah_mulberry_01.jpg?rect=0%2C0%2C2000%2C1250&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Mulberry</h4>
                    <p className="workFeatureSmallItem__tagline">
                      The story behind the luxury brand{" "}
                    </p>
                  </div>
                </a>
              </article>
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/western-skies"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="Westernskies Pentagramblog1"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/9ea16cdf-b896-4433-861a-6f30d2ffad69/WesternSkies-PentagramBlog1.jpg?rect=0%2C62%2C3000%2C1875&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">‘Western Skies’</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Book design and album packaging for Austin singer-songwriter
                      Darden Smith's 16th album.
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
                      Annual impact report for a company looking to make the future of
                      cocoa more sustainable.
                    </p>
                  </div>
                </a>
              </article>
            </div>
            <div className="workFeature__list">
              <article className="workFeatureSmallItem">
                <a
                  href="https://www.pentagram.com/work/hennessy-vsop"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/ab4dd79d-70ae-45c1-ba43-dacec76f0c5d/gl_hennessy_new_12.jpg?rect=0%2C0%2C3000%2C1876&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
                    />
                  </picture>
                  <div className="workFeatureSmallItem__title">
                    <h4 className="typo--listingTitle">Hennessy V.S.O.P.</h4>
                    <p className="workFeatureSmallItem__tagline">
                      Data-driven brand identity for the Cognac‘s limited edition
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
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt="Tkj Thumbnail"
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/36453f3b-20da-43db-b5ad-008cf41e1a07/TKJ_Thumbnail.jpg?rect=192%2C0%2C3456%2C2160&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                  href="https://www.pentagram.com/work/index-ventures-1"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/090aae51-ca5a-4137-a5c2-e61801e27435/jr_indexventures_01.jpg?rect=0%2C84%2C2000%2C1249&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
                  href="https://www.pentagram.com/work/designed-by-apple-in-california"
                  className="workFeatureSmallItem__link"
                >
                  <picture
                    className="workFeatureSmallItem__picture js--lazyloaded"
                    style={{
                      backgroundImage:
                        'url("https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=32&fit=crop&blur=200&q=20&fm=jpg&auto=false&h=20")'
                    }}
                  >
                    <source
                      media="screen and (max-width: 599px)"
                      srcSet="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=500&fit=crop&fm=jpg&q=70&auto=format&h=315, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=500&fit=crop&q=70&fm=jpg&auto=format&h=315&dpr=2 2x"
                    />
                    <source
                      media="screen and (max-width: 799px)"
                      srcSet="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=350&fit=crop&fm=jpg&q=70&auto=format&h=220, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=350&fit=crop&q=70&fm=jpg&auto=format&h=220&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 800px) and (max-width:1039px)"
                      srcSet="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=470&fit=crop&fm=jpg&q=70&auto=format&h=296, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=470&fit=crop&q=70&fm=jpg&auto=format&h=296&dpr=2 2x"
                    />
                    <source
                      media="screen and (min-width: 1040px)"
                      srcSet="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=360&fit=crop&fm=jpg&q=70&auto=format&h=226, https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2 2x"
                    />
                    <img
                      alt=""
                      className="workFeatureSmallItem__img"
                      src="https://pentagram-production.imgix.net/dd689f3a-ef27-4db6-9ca7-f99b3482f98e/lh_designedbyapple_01.jpg?rect=0%2C67%2C3000%2C1872&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195"
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
            <article className="workFeatureItem">
              <a
                href="https://www.pentagram.com/work/spiritland"
                className="workFeatureItem__link"
              >
                <picture
                  className="workFeatureItem__picture js--lazyloaded"
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
                    className="workFeatureItem__img"
                  >
                    <source
                      type="video/mp4"
                      src="https://pentagram-production.imgix.net/2d3f73bd-fc4e-4b43-b685-a7e978905601/jhplp_00_spiritland_wordmark_03.gif?rect=70%2C0%2C1865%2C1425&w=592&fit=crop&fm=mp4&h=452&q=70&auto=format"
                    />
                  </video>
                </picture>
                <div className="workFeatureItem__title">
                  <h4 className="typo--listingTitle">Spiritland</h4>
                  <p className="workFeatureItem__tagline">
                    A waveform-inspired identity for a venue with a world-class sound
                    system
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


    </>
  );
};

export default Picture;
