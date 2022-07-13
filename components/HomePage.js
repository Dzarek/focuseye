import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-scroll";

import { headerData } from "../public/data";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const HomePage = ({ setShowDetails }) => {
  const handleShowDetails = (category) => {
    setTimeout(() => {
      setShowDetails(category);
    }, 1500);
  };

  return (
    <Wrapper id="home">
      <div className="fbAndInst">
        <div>
          <FaFacebookSquare className="fbInIcon" />
          <p>facebook</p>
        </div>
        <div>
          <FaInstagramSquare className="fbInIcon" />
          <p>instagram</p>
        </div>
      </div>
      <div className="headerImages">
        <Carousel
          infinite
          autoPlay={5000}
          animationSpeed={1000}
          slidesPerPage={1}
          addArrowClickHandler
          // stopAutoPlayOnHover
          arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
          arrowRight={
            <IoIosArrowDroprightCircle className="arrow arrowRight" />
          }
        >
          {headerData.map((item) => {
            const { id, img, imgM, shortTitle, longTitle, category } = item;
            return (
              <div key={id} className="headerPart">
                <div
                  className="headerPartImg headerPartImgMobile"
                  style={{ backgroundImage: `url(${imgM})` }}
                ></div>
                <div
                  className="headerPartImg headerPartImgDesktop"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <section className="headerInfo">
                  <div className="infoLine">
                    <div className="oneline"></div>
                    <p>{shortTitle}</p>
                    <div className="oneline"></div>
                  </div>
                  <h2>{longTitle}</h2>
                  <Link
                    to="offer"
                    smooth={true}
                    duration={1000}
                    activeClass="active"
                    spy={true}
                    onClick={() => handleShowDetails(category)}
                  >
                    Zobacz więcej
                  </Link>
                </section>
              </div>
            );
          })}
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  .fbAndInst {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(-90deg);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vw;
    @media screen and (max-width: 800px) {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 2rem;
      font-family: var(--titleFont);
      cursor: pointer;
      p {
        margin: 0 10px;
        font-size: 1rem;
      }
      .fbInIcon {
        color: var(--navbarBgColor);
        font-size: 1.4rem;
      }
    }
  }
  .headerImages {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-47.5%, -48%);
    height: 80vh;
    width: 95vw;
    .arrow {
      position: absolute;
      font-size: 2rem;
      cursor: pointer;
      z-index: 10;
      color: white;
      transition: 0.3s;
      :hover {
        color: #aaa;
      }
    }
    .arrowLeft {
      bottom: 5%;
      right: 8%;
    }
    .arrowRight {
      bottom: 5%;
      right: 5%;
    }
    @media screen and (max-width: 800px) {
      height: 90vh;
      width: 100vw;
      top: 0%;
      transform: translateX(-50%);

      .arrowLeft {
        right: 15%;
      }
    }
  }
  .headerPart {
    height: 80vh;
    width: 95vw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 800px) {
      height: 90vh;
      width: 100vw;
    }
    .headerPartImg {
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: brightness(0.5);
      background-size: cover;
      background-position: center;
      @media screen and (max-width: 800px) {
        height: 90vh;
        width: 100vw;
      }
    }
    .headerInfo {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* height: 40%; */
      width: 60%;
      h2 {
        font-family: var(--textFont);
        letter-spacing: 1px;
        font-size: 2.5rem;
        margin: 1vh 0 4vh 0;
        color: white;
      }
      p {
        font-family: var(--titleFont);
        font-weight: 800;
        font-size: 1.1rem;
        /* text-transform: uppercase; */
        color: #ccc;
      }
      a {
        font-family: "Genos", sans-serif;
        font-size: 1.3rem;
        color: var(--secondaryColor);
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        border: 1px solid white;
        border-radius: 5px;
        width: 25%;
        padding: 5px 0;
        text-align: center;
        background: whitesmoke;
        transition: 0.4s;
        cursor: pointer;
        :hover {
          background: var(--secondaryColor);
          color: var(--primaryColor);
        }
      }
      @media screen and (max-width: 800px) {
        width: 90%;
        left: 5%;
        bottom: 5%;
        h2 {
          font-size: 1.7rem;
          margin: 1vh 0 5vh 0;
        }
        a {
          width: 50%;
          font-size: 1.1rem;
        }
      }
    }
    .infoLine {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      width: 50%;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
    }
    .oneline {
      width: 20px;
      height: 3px;
      background: var(--secondaryColor);
      margin: 5px 10px 0;
    }
  }
  .headerPartImgMobile {
    @media screen and (min-width: 801px) {
      display: none;
    }
  }
  .headerPartImgDesktop {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;
export default HomePage;
