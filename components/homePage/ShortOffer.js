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

const ShortOffer = ({ showDetails, setShowDetails }) => {
  const oneOffer = offers.find((item) => item.category === showDetails);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="shortOfferContainer">
        <div className="textContainer">
          <h2>Oferta</h2>
          <p>Moja oferta składa się z następujących sesji zdjęciowych:</p>
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
