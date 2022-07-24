import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import { offers } from "../../public/data";
import SingleOffer from "../../components/SingleOffer";
import DetailsOffer from "../../components/DetailsOffer";
import ImportantInfoOffer from "../../components/offerPage/ImportantInfoOffer";

// import SmallDetails from "../../components/SmallDetails";
import { GiPhotoCamera } from "react-icons/gi";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoIosEye } from "react-icons/io";
import { GiFlowers } from "react-icons/gi";
import { GrDocumentPdf } from "react-icons/gr";
const ofertaHeader = "../images/ofertaImg/header/ofertaHeader.png";

const OfferPage = () => {
  const [showDetails, setShowDetails] = useState("");
  // const [showSmallDetails, setShowSmallDetails] = useState("");
  const oneOffer = offers.find((item) => item.category === showDetails);
  // const oneOffer2 = offers.find((item) => item.category === showSmallDetails);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <header className="headerTitle">
        <div className="title">
          <img src={ofertaHeader} alt="gallery title" />
          <h2 data-aos="fade-left">Oferta</h2>
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
        <div>
          <span>
            <GiPhotoCamera />
          </span>
          <h4>dobry sprzęt</h4>
        </div>
      </section>
      <section className="sesjeContent">
        <div className="sesjeTitle">
          <span></span>
          <h2>Sesje zdjęciowe</h2>
          <span></span>
        </div>
        <div className="offerContent">
          {offers.map((item) => {
            return (
              <SingleOffer
                key={item.id}
                offer={item}
                setShowDetails={setShowDetails}
                // setShowSmallDetails={setShowSmallDetails}
                className="singleOffer"
              />
            );
          })}
        </div>
      </section>
      {showDetails && (
        <DetailsOffer oneOffer={oneOffer} setShowDetails={setShowDetails} />
      )}
      {/* {showSmallDetails && <SmallDetails oneOffer2={oneOffer2} />  } */}
      <section className="albums">
        <h2>Albumy...</h2>
      </section>
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
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  /* width: 90vw;
  max-width: 1440px; */
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;
  .headerTitle {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--activeNavLink);
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 50vh;
        margin-right: 5vw;
      }
      h2 {
        font-weight: 800;
        font-size: 3rem;
        color: var(--secondaryColor3);
      }
    }
  }
  .offerFeatures {
    height: 50vh;
    width: 70vw;
    margin: 0 auto;
    /* padding-bottom: 5vh; */
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
  }
  .sesjeContent {
    width: 80vw;
    /* margin: 15vh 0 10vh 30vw; */
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
        /* margin-bottom: 5vh; */
      }
      span {
        width: 15vw;
        height: 2px;
        background: var(--navigationBgColor);
      }
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
        height: 70vh;
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
  .albums {
    margin: 0 auto;
    width: 80vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
