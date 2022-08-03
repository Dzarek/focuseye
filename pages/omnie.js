import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGrinHearts, FaMedal } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

const aboutMeHeaderImg = "/images/aboutMeImg/aboutMeHeader.png";
const meImg2 = "/images/aboutMeImg/meImg2.jpg";

const OmniePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const numberOfExperience = new Date().getFullYear() - 2019;
  const numberOfSesion = (new Date().getFullYear() - 2019) * 70;
  const numberOfPeople = (new Date().getFullYear() - 2019) * 40;

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
          <p data-aos="zoom-in" data-aos-delay="3000">
            miłośniczka podróży, Hiszpanii oraz dziewiczej Oliwy
          </p>
          <p data-aos="zoom-in" data-aos-delay="2000">
            kochająca mama
          </p>
          <p data-aos="zoom-in" data-aos-delay="2500">
            pani domu
          </p>
        </div>
      </header>
      <h2 className="aboutTitle">
        Jestem Fotografem - Dla mnie to zaszczyt i ogromne szczęście
      </h2>
      <div className="aboutMeContent">
        <img data-aos="fade-right" src={meImg2} alt="ja z rodziną" />
        <section>
          <p>Niezmiernie mi miło, że do mnie trafiliście!</p>
          <p>
            Swoją przygodę z aparatem zaczynałam uwieczniając kolarską
            rywalizację. Dzisiaj to dalej pasja, która stała się moją pracą.
            Uważam, że lepszej drugiej połówki niż mój mąż, nie mogłam sobie
            wymarzyć, od lat wspieramy się w swoich pasjach. W naszym życiu
            pojawiła się Marcelinka, której chcemy pokazać jak najwięcej świata
            - podróże w trójkę są dla nas celebracją czasu wolnego!{" "}
            <MdDirectionsBike />
          </p>
          <p>
            W fotografii zależy mi na tym aby na zdjęciach oddać Waszą
            naturalność, rejestrować uczucia i emocje jakie towarzyszą Wam
            podczas naszych spotkań. Jako fotograf mam to ogromne szczęście, że
            spotykam wspaniałych ludzi. Uwielbiam gdy zapraszacie mnie do swoich
            domów bo jak już wiecie sesje lifestylowe po prostu kocham.{" "}
            <FaGrinHearts />
          </p>
          <p>
            Dotychczas szlifowałam swój warsztat u wyjątkowych fotografów: Adam
            Trzcionka, Aleksandra Błaszkowska, Marika Wrońska, Katarzyna Budzik.{" "}
            <br />
            Ślubne warszataty plenerowe w których brałam udział: NoWedding
            workshop. <br /> Moje zdjęcia niejednokrotnie zostały wyróżnione
            przez fotograf Martę Woźną - Pani Woźna oraz Niezłe Aparaty w
            rankingu najlepszych fotografii miesiąca. <FaMedal />
          </p>
          <p>
            Do zobaczenia! <br />
            Sylwia Sajdak
          </p>
        </section>
      </div>
      <div className="aboutNumbers">
        <section data-aos="fade-right">
          <span>{numberOfSesion}</span>
          <h4>sesji zdjęciowych</h4>
        </section>
        <div className="lineNumber"></div>
        <section data-aos="fade-up">
          <span>{numberOfPeople}</span>
          <h4>zadowolonych klientów</h4>
        </section>
        <div className="lineNumber"></div>
        <section data-aos="fade-left">
          <span>{numberOfExperience}</span>
          <h4>{numberOfExperience < 5 ? "lata" : "lat"} doświadczenia</h4>
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
        top: 25%;
        left: 80%;
      }
      p:nth-of-type(4) {
        top: 80%;
        left: 45%;
      }
      p:nth-of-type(5) {
        top: 25%;
        left: 15%;
      }
      p:nth-of-type(6) {
        top: 50%;
        left: 75%;
      }
    }
  }
  .aboutTitle {
    color: var(--secondaryColor);
    font-size: 1.8rem;
    margin: 15vh auto 10vh;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
  }
  .aboutMeContent {
    width: 100vw;
    margin: 0 auto 15vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    img {
      width: 50%;
    }

    section {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-right: 6vw;
      p {
        font-size: 1.2rem;
        margin-bottom: 3vh;
        line-height: 1.5;

        svg {
          color: var(--secondaryColor);
          margin-left: 5px;
          font-size: 1.2rem;
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
