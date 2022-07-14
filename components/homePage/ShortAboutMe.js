import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsPeopleFill } from "react-icons/bs";

const aboutImg = "../images/meImg.jpg";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="aboutMeContainer">
        <div data-aos="fade-right" className="imgContainer"></div>
        <div data-aos="fade-left" data-aos-offset="200" className="aboutInfo">
          <h2 className="shortTitle">Poznaj mnie!</h2>
          <p className="shortText">
            Jak to się stało że jestem fotografem? Co robię na codzień?...Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Similique quos,
            hic voluptatum nihil mollitia incidunt, sunt fugit alias cumque
            dolor,
          </p>
          <BsPeopleFill className="icon" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--aboutMeBgColor);
  width: 100vw;
  min-height: 80vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;

  .aboutMeContainer {
    max-width: 1360px;
    width: 70%;
    margin: 0vh auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .imgContainer {
      border-radius: 50%;
      height: 450px;
      width: 450px;
      background-image: url(${aboutImg});
      background-size: cover;
      background-position: center;
      box-shadow: 5px 0 0 0 var(--secondaryColor);
    }
    .aboutInfo {
      width: 50%;
      display: flex;
      flex-direction: column;
      h2 {
        color: #fff;
        text-align: left;
        margin-bottom: 10vh;
        letter-spacing: 3px;
        span {
          color: var(--secondaryColor);
        }
      }
      p {
        color: var(--sectionBgColor);
        font-size: 1.5rem;
      }
    }
    @media screen and (max-width: 800px) {
      width: 100vw;
      flex-direction: column;
      padding-bottom: 10vh;
      .imgContainer {
        border-radius: 50%;
        height: 80vw;
        width: 80vw;
        margin-bottom: 10vh;
      }
      .aboutInfo {
        width: 90%;
        /* text-align: center; */
        h3 {
          text-align: left;
        }
        p {
          text-align: right;
        }
      }
    }
  }
  .icon {
    margin-top: 7vh;
    font-size: 3rem;
    align-self: center;
    transition: 0.5s;
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
`;

export default AboutPage;
