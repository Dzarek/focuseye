import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { offers } from "../../public/data";
import SingleOffer from "../SingleOffer";
import DetailsOffer from "../DetailsOffer";

import { TiCamera } from "react-icons/ti";

const ShortOffer = ({ showDetails, setShowDetails }) => {
  const oneOffer = offers.find((item) => item.category === showDetails);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="shortOffer">
      <div className="shortOfferContainer">
        <div className="textContainer">
          <h2 className="shortTitle">Oferta</h2>
          <h3 className="shortText">W czym się specjalizuję:</h3>
          <ul data-aos="fade-right" data-aos-duration="1500">
            <li>
              <TiCamera className="icon" />
              sesje noworodkowe lifestyle
            </li>
            <li>
              <TiCamera className="icon" />
              sesje rodzinne lifestyle
            </li>
            <li>
              <TiCamera className="icon" />
              sesje brzuszkowe
            </li>
            <li>
              <TiCamera className="icon" />
              chrzty święte
            </li>
            <li>
              <TiCamera className="icon" />
              śluby
            </li>
            <li>
              <TiCamera className="icon" />
              sesje miłosne
            </li>
          </ul>
          <Link href="/oferta">
            <button>zobacz oferty</button>
          </Link>
        </div>
        <div className="offerContainer">
          <Carousel
            className="allOffer"
            infinite
            draggable={false}
            autoPlay={3000}
            animationSpeed={1000}
            slidesPerPage={1}
            breakpoints={{
              900: {
                slidesPerPage: 1,
              },
            }}
            addArrowClickHandler
            stopAutoPlayOnHover
            arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
            arrowRight={
              <IoIosArrowDroprightCircle className="arrow arrowRight" />
            }
          >
            {offers.map((item) => {
              return (
                <SingleOffer
                  key={item.id}
                  offer={item}
                  setShowDetails={setShowDetails}
                />
              );
            })}
          </Carousel>
          {showDetails && (
            <DetailsOffer oneOffer={oneOffer} setShowDetails={setShowDetails} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 80vh;
  margin: -10vh auto 10vh;
  position: relative;
  background: var(--sectionBgColor);
  .shortOfferContainer {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .textContainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      margin-bottom: 5vh;
      font-size: 3.5rem;
      font-family: var(--titleFont);
      font-weight: 800;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
      text-shadow: 3px 3px 3px var(--secondaryColor3);
    }
    h3 {
      margin-bottom: 5vh;
      font-weight: 700;
      color: var(--secondaryColor);
    }
    ul {
      list-style: none;
      line-height: 1;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 3vh;
        font-size: 1.4rem;
        font-weight: 500;
        .icon {
          margin-top: 4px;
          margin-right: 10px;
          color: var(--secondaryColor);
        }
      }
    }
    button {
      border: 2px solid #fff;
      border-radius: 10px;
      font-size: 1rem;
      font-family: var(--titleFont);
      text-transform: uppercase;
      padding: 10px 0px;
      width: 200px;
      margin: 2vh auto;
      font-weight: 800;
      color: #fff;
      background: var(--secondaryColor);
      transition: 0.4s;
      cursor: pointer;
      :hover {
        background: #fff;
        border: 2px solid var(--secondaryColor);
        color: var(--secondaryColor);
      }
    }
  }
  .offerContainer {
    width: 40%;
  }
  .allOffer {
    width: 100%;
    height: 70vh;
    margin: 5vh auto;
    .arrow {
      font-size: 2rem;
      color: var(--secondaryColor);
      cursor: pointer;
      @media screen and (max-width: 800px) {
        z-index: 9;
        position: absolute;
      }
    }
    @media screen and (max-width: 800px) {
      .arrowRight {
        right: 0;
      }
      .arrowLeft {
        left: 0;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .shortOfferContainer {
      width: 90vw;
      flex-direction: column;
      padding: 5vh 0;
    }
    .textContainer {
      width: 100%;
      h2 {
        margin-bottom: 5vh;
        font-size: 3rem;
      }
    }
    .offerContainer {
      width: 90%;
    }
    .allOffer {
      width: 100%;
      height: 60vh;
      margin: 5vh auto;
    }
  }
`;

export default ShortOffer;
