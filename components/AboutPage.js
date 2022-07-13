import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const aboutImg = "../images/meImg.jpg";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="aboutMe" className="mainPage">
      <div className="title">
        <h2>O mnie</h2>
      </div>
      <div className="aboutMeContainer">
        <div data-aos="fade-right" className="imgContainer"></div>
        <div data-aos="fade-left" data-aos-offset="200" className="aboutInfo">
          <h3>
            Nazywam się Kamil Łach <br /> i jestem <span>fotografem</span>.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            cupiditate illo deleniti dicta provident, odio blanditiis nesciunt
            inventore. Ab maiores numquam explicabo corporis quis fuga eaque
            quam quo nostrum ipsum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            quos, hic voluptatum nihil mollitia incidunt, sunt fugit alias
            cumque dolor, vel corrupti inventore aliquid nulla sapiente saepe
            eveniet error quae?
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--galleryBtnBg);
  width: 100vw;
  max-width: 100vw;

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
      h3 {
        font-size: 3rem;
        font-family: var(--titleFont);
        font-weight: 500;
        margin-bottom: 8vh;
        span {
          color: var(--secondaryColor);
        }
      }
      p {
        font-size: 1.2rem;
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
`;

export default AboutPage;
