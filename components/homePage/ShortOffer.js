import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { offers } from "../../public/data";
import SingleOffer from "../SingleOffer";
import DetailsOffer from "../DetailsOffer";

import { TiArrowRightOutline } from "react-icons/ti";

const ShortOffer = ({ showDetails, setShowDetails }) => {
  const oneOffer = offers.find((item) => item.category === showDetails);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="shortOfferContainer">
        <div className="textContainer">
          <h2 className="shortTitle">Oferta</h2>
          <p className="shortText">
            Moja oferta składa się z następujących sesji zdjęciowych:
          </p>
          <ul data-aos="fade-right" data-aos-duration="1500">
            <li>
              <TiArrowRightOutline className="icon" />
              <p>sesje noworodkowe lifestyle</p>
            </li>
            <li>
              <TiArrowRightOutline className="icon" />
              <p>sesje rodzinne lifestyle</p>
            </li>
            <li>
              <TiArrowRightOutline className="icon" />
              <p>sesje brzuszkowe</p>
            </li>
            <li>
              <TiArrowRightOutline className="icon" />
              <p>chrzty święte</p>
            </li>
            <li>
              <TiArrowRightOutline className="icon" />
              <p>śluby</p>
            </li>
            <li>
              <TiArrowRightOutline className="icon" />
              <p>sesje miłosne</p>
            </li>
          </ul>
          <button>zobacz oferty</button>
        </div>
        <div className="offerContainer">
          <Carousel
            className="allOffer"
            infinite
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
    max-width: 1360px;
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
      margin-bottom: 7vh;
      color: #fff;
      font-size: 4rem;
    }
    p {
      margin-bottom: 3vh;
      font-weight: 700;
    }
    ul {
      list-style: none;
      line-height: 1;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .icon {
          font-size: 1.3rem;
          margin-top: -17px;
        }
        p {
          font-size: 1.4rem;
          /* font-style: italic; */
          font-weight: 500;
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
        color: #ddd;
        font-size: 3rem;
        opacity: 0.6;
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
`;

export default ShortOffer;
