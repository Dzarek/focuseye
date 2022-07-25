import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLaughBeam, FaGrinHearts } from "react-icons/fa";

const aboutMeHeaderImg = "../images/aboutMeImg/aboutMeHeader.png";
const meImg2 = "../images/aboutMeImg/meImg2.jpg";

const OmniePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <header>
        <div className="title">
          <h2 data-aos="fade-right">O mnie</h2>
          <img src={aboutMeHeaderImg} alt="gallery title" />
        </div>
        <div className="myFeatures">
          <p data-aos="zoom-in" data-aos-delay="500">
            marzycielka
          </p>
          <p data-aos="zoom-in" data-aos-delay="1000">
            pasjonatka fotografii
          </p>
          <p data-aos="zoom-in" data-aos-delay="1500">
            szczęśliwa żona
          </p>
          <p data-aos="zoom-in" data-aos-delay="2000">
            kochająca mama
          </p>
          <p data-aos="zoom-in" data-aos-delay="2500">
            fajna
          </p>
        </div>
      </header>
      <h2 className="aboutTitle">Drobna fotografka z wrażliwym sercem</h2>
      <div className="aboutMeContent">
        <img src={meImg2} alt="ja z rodziną" />
        <section>
          <p>
            Chodząc jeszcze do liceum, byłam przekonana, że kura ma 4 nogi i
            jakież było moje zdziwienie gdy nieopodal przystanku autobusowego
            zobaczyłam biedną kurę o dwóch nogach… wyobraźcie sobie minę mojej
            koleżanki Elizy <FaLaughBeam />.
          </p>
          <p>
            We wczesnym dzieciństwie chowałam się pod Fiatem 126P taplając się w
            błotku! Z perspektywy czasu sądzę, że już wtedy miałam zadatki na
            fotografa outdoorowego…
          </p>
          <p>
            Uważam, że lepszej drugiej połówki niż mój mąż, nie mogłam sobie
            wymarzyć. Od lat wspieramy się w swoich pasjach. Można by
            powiedzieć, że rower i aparat to takie nasze drugie małżeństwo{" "}
            <FaGrinHearts />.
          </p>
          <p>
            W fotografii zależy mi na tym aby oddawać Waszą naturalną
            wrażliwość, delikatność i subtelność. Cudnie gdy zapraszacie mnie do
            swoich domów, sesje lifestylowe to jest to co kocham najbardziej, a
            fotografia plenerowa to dla mnie przysłowiowa wisienka na torcie!
          </p>
        </section>
      </div>
      <div className="aboutNumbers">
        <section data-aos="fade-right">
          <span>150</span>
          <h4>sesji zdjęciowych</h4>
        </section>
        <div className="lineNumber"></div>
        <section data-aos="fade-up">
          <span>360</span>
          <h4>zadowolonych klientów</h4>
        </section>
        <div className="lineNumber"></div>
        <section data-aos="fade-left">
          <span>10</span>
          <h4>lat doświadczenia</h4>
        </section>
      </div>
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
  header {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--aboutMeHeaderBgColor);
    margin-bottom: 10vh;
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        height: 50vh;
        /* width: 40vw; */
        /* margin-left: 15vw; */
      }
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-left: 25vw;
        /* position: absolute;
        top: 50%;
        left: 10%; */
      }
    }
    .myFeatures {
      position: absolute;
      width: 60%;
      height: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      p {
        position: absolute;
        font-family: var(--titleFont);
        font-size: 1.1rem;
      }
      p:nth-of-type(1) {
        top: 20%;
        left: 50%;
      }
      p:nth-of-type(2) {
        top: 65%;
        left: 10%;
      }
      p:nth-of-type(3) {
        top: 40%;
        left: 80%;
      }
      p:nth-of-type(4) {
        top: 75%;
        left: 60%;
      }
      p:nth-of-type(5) {
        top: 25%;
        left: 25%;
      }
    }
  }
  .aboutTitle {
    color: var(--secondaryColor);
    font-size: 1.8rem;
    margin: 15vh auto 7vh;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
  }
  .aboutMeContent {
    width: 90vw;
    margin: 0 auto 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 50%;
    }

    section {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      p {
        font-size: 1.2rem;
        margin-bottom: 3vh;
        svg {
          color: var(--secondaryColor);
          margin-left: 5px;
          font-size: 1.1rem;
        }
        :nth-last-of-type(1) {
          margin-bottom: 0;
        }
      }
    }
  }
  .aboutNumbers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55vw;
    margin: 10vh auto 15vh;
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        color: var(--secondaryColor);
        font-size: 3rem;
      }
      h4 {
        font-family: var(--titleFont);
        font-size: 1rem;
        font-weight: 500;
      }
    }
    .lineNumber {
      width: 2px;
      height: 50px;
      background: var(--secondaryColor3);
    }
  }
`;

export default OmniePage;
