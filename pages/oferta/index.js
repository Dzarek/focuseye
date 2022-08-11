import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { offers } from "../../public/data";
import SingleOffer from "../../components/SingleOffer";
import ImportantInfoOffer from "../../components/offerPage/ImportantInfoOffer";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoIosEye } from "react-icons/io";
import { GiFlowers } from "react-icons/gi";
import { GrDocumentPdf } from "react-icons/gr";
import Albums from "../../components/offerPage/Albums";
import Mirror from "../../components/offerPage/Mirror";
import Head from "next/head";
import { useGlobalContext } from "../../components/context";

const ofertaHeader = "/images/ofertaImg/header/ofertaHeader.png";

const OfferPage = () => {
  const { offersWP } = useGlobalContext();
  const [showDetails, setShowDetails] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

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
        <header className="headerTitle">
          <img src={ofertaHeader} alt="gallery title" />
          <div className="title">
            <h2>Oferta</h2>
            <p data-aos="fade-left">
              Nie pozwól aby Twoje piękne chwile uległy zapomnieniu.
            </p>
          </div>
        </header>
        <section className="offerFeatures">
          <div>
            <span>
              <GiFlowers />
            </span>
            <h4>dbałość o szczegóły</h4>
          </div>
          <div>
            <span>
              <BsPersonCheckFill />
            </span>
            <h4>profesionalizm</h4>
          </div>
          <div>
            <span>
              <IoIosEye />
            </span>
            <h4>unikalna wizja</h4>
          </div>
        </section>
        <section className="sesjeContent">
          <div className="sesjeTitle">
            <span></span>
            <h2>Sesje zdjęciowe</h2>
            <span></span>
          </div>
          {offersWP ? (
            <div data-aos="fade-up" className="offerContent">
              {offersWP.map((item) => {
                return (
                  <SingleOffer
                    key={item.acf.id}
                    category={item.acf.category}
                    slug={item.acf.slug}
                    img={item.acf.imgs.img1}
                    setShowDetails={setShowDetails}
                    className="singleOffer"
                  />
                );
              })}
            </div>
          ) : (
            <div data-aos="fade-up" className="offerContent">
              {offers.map((item) => {
                return (
                  <SingleOffer
                    key={item.id}
                    category={item.category}
                    slug={item.slug}
                    img={item.imgs[0]}
                    setShowDetails={setShowDetails}
                    className="singleOffer"
                  />
                );
              })}
            </div>
          )}
        </section>
        <Mirror />
        <Albums />
        <ImportantInfoOffer />
        <section className="regulations">
          <h2>Pobierz regulamin</h2>
          <a
            href="/regulamin.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrDocumentPdf className="icon" />
          </a>
        </section>
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
  position: relative;
  @media screen and (max-width: 800px) {
    padding-top: 0;
  }
  .headerTitle {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--aboutMeBgColor);

    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 3vh;
        margin-top: 3vh;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--titleFont);
      }
    }
    img {
      height: 50vh;
      margin-right: 5vw;
    }
    @media screen and (max-width: 800px) {
      margin-top: 0vh;
      flex-direction: column;
      img {
        height: auto;
        width: 100vw;
        margin-right: 0;
      }
      .title {
        text-align: center;
        padding: 5vh 0;
        align-items: center;
      }
    }
  }
  .offerFeatures {
    height: 50vh;
    width: 60vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4 {
        margin-top: 2vh;
        font-size: 1.3rem;
        text-transform: uppercase;
        font-weight: 500;
        font-family: var(--titleFont);
      }
    }
    span {
      width: 7vw;
      height: 7vw;
      border: 2px solid var(--secondaryColor);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
    }
    @media screen and (max-width: 800px) {
      height: 50vh;
      width: 95vw;
      flex-wrap: wrap;
      justify-content: center;
      margin: 5vh auto;
      div {
        margin: 3vw;
        h4 {
          margin-top: 2vh;
          font-size: 1.1rem;
        }
      }
      span {
        width: 18vw;
        height: 18vw;
        font-size: 2rem;
      }
    }
  }
  .sesjeContent {
    width: 80vw;
    margin: 10vh auto;
    .sesjeTitle {
      margin: 0 auto 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        text-align: center;
        text-transform: uppercase;
        color: var(--secondaryColor);
        font-size: 2rem;
        margin: 0 3vw;
      }
      span {
        width: 15vw;
        height: 2px;
        background: var(--navigationBgColor);
      }
    }
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }
  .offerContent {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .singleOffer {
      width: 27%;
      height: 50vh;
      position: relative;
      margin: 1vw;
      @media screen and (max-width: 800px) {
        width: 100%;
        height: 60vh;
        margin-bottom: 5vh;
      }
      .singleBG {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        background-size: cover;
        background-position: center;
        filter: brightness(0.8);
        transition: 0.5s;
      }
      .singleContent {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: var(--titleFont);
        color: white;
        .title {
          text-transform: uppercase;
          width: 90%;
          border-bottom: 2px solid white;
          padding-bottom: 15px;
          font-size: 1.5rem;
          text-shadow: 1px 1px 1px black;
        }
        .price {
          font-size: 1.5rem;
          margin-top: 50%;
          text-shadow: 2px 2px 2px black;
          font-family: var(--textFont);
        }
        .detailsBtn {
          background-color: transparent;
          padding: 5px 10px;
          font-size: 1.3rem;
          font-family: var(--titleFont);
          color: white;
          border: 2px solid white;
          border-radius: 5px;
          text-shadow: 3px 3px 3px black;
          transition: 0.3s;
          font-weight: 500;
          cursor: pointer;
          :hover {
            background-color: white;
            color: var(--secondaryColor3);
            text-shadow: none;
          }
        }
      }
      :hover .singleBG {
        filter: none;
      }
    }
  }

  .regulations {
    width: 100vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      color: var(--secondaryColor);
      margin-bottom: 3vh;
    }
    a {
      cursor: pointer;
      transition: 0.4s;
      .icon {
        font-size: 2.5rem;
      }
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default OfferPage;
