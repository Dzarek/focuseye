import Link from "next/link";
import styled from "styled-components";
import { offers } from "../../public/data";
import { SRLWrapper } from "simple-react-lightbox";
import PakietSingleOffer from "../../components/offerPage/PakietSingleOffer";
import Opinion from "../../components/offerPage/Opinion";
import { IoChevronBackCircle } from "react-icons/io5";
import Head from "next/head";

const OneOffer = (props) => {
  const {
    headerImgWP,
    titleWP,
    longDescriptionWP,
    smallGalleryWP,
    pakietyWP,
    cennikWP,
    slug,
  } = props;

  const localOffer = offers.find((item) => item.slug === slug);
  const { title, imgs, graphic, longDescription, smallGallery, pakiety } =
    localOffer;
  const headerImg = imgs[1];

  return (
    <>
      <Head>
        <title>FocusEye | Oferta</title>
        <meta
          name="description"
          content="Nie pozwól aby Twoje piękne chwile uległy zapomnieniu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>

      <Wrapper>
        <header className="headerTitle" style={{ overflow: "hidden" }}>
          {headerImgWP ? (
            <div
              className="headerBg"
              style={{
                backgroundImage: `url(${headerImgWP})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                animation: "singleOfferHeader 5s linear 1 forwards",
                width: "100vw",
                filter: "brightness(0.8)",
              }}
            ></div>
          ) : (
            <div
              className="headerBg"
              style={{
                backgroundImage: `url(${headerImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                animation: "singleOfferHeader 5s linear 1 forwards",
                width: "100vw",
                filter: "brightness(0.8)",
              }}
            ></div>
          )}
          <div className="title">
            <h2>{titleWP ? titleWP : title}</h2>
          </div>
        </header>
        {slug === "brzuszkowe" ? (
          <div className="infoAndGraphic">
            {longDescriptionWP ? (
              <section className="longInfo">
                {longDescriptionWP.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </section>
            ) : (
              <section className="longInfo">
                {longDescription.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </section>
            )}
            <img src={graphic[0]} alt="grafika" />
          </div>
        ) : (
          <div className="infoAndGraphic2">
            <img src={graphic[0]} alt="grafika" />
            {longDescriptionWP ? (
              <section className="longInfo">
                {longDescriptionWP.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </section>
            ) : (
              <section className="longInfo">
                {longDescription.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </section>
            )}
            <img src={graphic[1]} alt="grafika" />
          </div>
        )}
        <SRLWrapper>
          {smallGalleryWP ? (
            <section className="smallGallery">
              {smallGalleryWP.map((image, index) => {
                return <img key={index} src={image} />;
              })}
            </section>
          ) : (
            <section className="smallGallery">
              {smallGallery.map((image, index) => {
                return <img key={index} src={image} />;
              })}
            </section>
          )}
        </SRLWrapper>
        <PakietSingleOffer pakiety={pakietyWP ? pakietyWP : pakiety} />
        <h3 className="cennik">
          {cennikWP ? cennikWP : "Powyższy cennik obowiązuje od 01.08.2022 r."}
        </h3>
        <Opinion />
        <Link href="/oferta">
          <button className="backToBlog">
            <IoChevronBackCircle className="icon" />
            powrót do listy ofert
          </button>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  @media screen and (max-width: 800px) {
    padding-top: 0vh;
  }
  .headerBg {
    height: 80vh;
    @media screen and (max-width: 800px) {
      height: 50vh;
    }
  }
  .cennik {
    text-align: center;
    margin-bottom: 10vh;
    @media screen and (max-width: 800px) {
      width: 80vw;
      margin: 0 auto 10vh;
    }
  }
  header {
    position: relative;
    width: 100vw;
    height: 80vh;
    overflow: "hidden";
    @media screen and (max-width: 800px) {
      height: 50vh;
    }
    .title {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      padding: 5px 0;
      h2 {
        font-weight: 800;
        letter-spacing: 5px;
        font-size: 3.2rem;
        color: #fff;
        font-family: var(--textFont);
        text-shadow: 3px 3px 3px black;
      }
      @media screen and (max-width: 800px) {
        width: 90vw;
        h2 {
          letter-spacing: 2px;
          font-size: 2rem;
          text-shadow: 2px 2px 2px black;
        }
      }
    }
  }
  .infoAndGraphic {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    margin: 15vh auto 10vh;
    @media screen and (max-width: 800px) {
      width: 100vw;
      margin: 10vh auto 5vh;
    }
    img {
      width: 25%;
      opacity: 0.8;
      margin-bottom: -10vh;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    .longInfo {
      width: 70%;
      p {
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 3vh;
      }
      @media screen and (max-width: 800px) {
        width: 90%;
        margin: 0 auto;
        p {
          line-height: 1.5;
          text-align: center;
          line-height: 1.6;
        }
      }
    }
  }
  .infoAndGraphic2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    margin: 20vh auto;
    @media screen and (max-width: 800px) {
      margin: 20vh auto 10vh;
    }
    img {
      width: 12%;
      opacity: 0.8;
      margin-bottom: -10vh;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    .longInfo {
      width: 60%;
      margin-top: -10vh;
      p {
        text-align: center;
        font-size: 1.4rem;
        line-height: 2;
      }
      @media screen and (max-width: 800px) {
        width: 100%;
        p {
          line-height: 1.8;
          font-size: 1.2rem;
        }
      }
    }
  }
  .smallGallery {
    display: flex;
    width: 100vw;
    margin: 10vh auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: var(--sectionBgColor);
    padding: 5vh 5vw;
    img {
      margin-bottom: 5vh;
      margin-top: 5vh;
      width: 22%;
      cursor: pointer;
    }
    @media screen and (max-width: 800px) {
      justify-content: space-around;
      padding: 2vh 1vw;
      img {
        margin-bottom: 2vh;
        margin-top: 2vh;
        width: 45%;
      }
    }
  }
  .backToBlog {
    position: relative;
    margin: 10vh auto 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: var(--titleFont);
    text-transform: uppercase;
    padding: 10px 10px;
    font-weight: 700;
    color: #fff;
    background: var(--secondaryColor);
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: #fff;
      border: 2px solid var(--secondaryColor);
      color: var(--secondaryColor);
    }
    .icon {
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
`;

export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  try {
    const responseOferta = await fetch(
      `https://focuseye.pl/wp-json/wp/v2/oferty?slug=${slug}`
    );
    const data = await responseOferta.json();
    const { title, imgs, longdescription, smallgallery, pakiety, cennik } =
      data[0].acf;
    const headerImgWP = imgs.img2;
    const smallGalleryWP = Object.values(smallgallery);
    const longDescriptionWP = Object.values(longdescription);

    return {
      props: {
        headerImgWP,
        titleWP: title,
        longDescriptionWP,
        smallGalleryWP,
        pakietyWP: pakiety,
        cennikWP: cennik,
        slug,
      },
      revalidate: 30,
    };
  } catch (error) {
    return {
      props: {
        slug,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const paths = offers.map((offer) => ({
    params: { slug: offer.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default OneOffer;
