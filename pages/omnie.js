import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGrinHearts, FaMedal } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import Head from "next/head";

const aboutMeHeaderImg = "/images/aboutMeImg/aboutMeHeader.png";
const meImg2 = "/images/aboutMeImg/meImg2.jpg";

const OmniePage = ({ items }) => {
  console.log(items);
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  const numberOfExperience = new Date().getFullYear() - 2019;
  const numberOfSesion = (new Date().getFullYear() - 2019) * 70;
  const numberOfPeople = (new Date().getFullYear() - 2019) * 40;

  return (
    <>
      <Head>
        <title>FocusEye | O mnie</title>
        <meta
          name="description"
          content="Jestem Fotografem - Dla mnie to zaszczyt i ogromne szczęście."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
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
              pojawiła się Marcelinka, której chcemy pokazać jak najwięcej
              świata - podróże w trójkę są dla nas celebracją czasu wolnego!{" "}
              <MdDirectionsBike />
            </p>
            <p>
              W fotografii zależy mi na tym aby na zdjęciach oddać Waszą
              naturalność, rejestrować uczucia i emocje jakie towarzyszą Wam
              podczas naszych spotkań. Jako fotograf mam to ogromne szczęście,
              że spotykam wspaniałych ludzi. Uwielbiam gdy zapraszacie mnie do
              swoich domów bo jak już wiecie sesje lifestylowe po prostu kocham.{" "}
              <FaGrinHearts />
            </p>
            <p>
              Dotychczas szlifowałam swój warsztat u wyjątkowych fotografów:
              Adam Trzcionka, Aleksandra Błaszkowska, Marika Wrońska, Katarzyna
              Budzik. <br />
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
    </>
  );
};

export async function getStaticProps() {
  let singleProduct = {};
  const response = await fetch(
    "https://buylist-dj.herokuapp.com/api/buy-lists/"
  );
  const data = await response.json();
  const items = data.data.map((item) => {
    const {
      attributes: { idproduct, name },
    } = item;
    return (singleProduct = { id: idproduct, name: name });
  });

  return {
    props: {
      items,
    },
    revalidate: 60,
  };
}

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
    @media screen and (max-width: 800px) {
      margin-top: 0;
      height: 70vh;
      justify-content: space-between;
      margin-bottom: 5vh;
    }
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        height: 50vh;
      }
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-left: 25vw;
      }
      @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        img {
          height: auto;
          width: 100vw;
        }
        h2 {
          font-size: 3rem;
          margin: 5vh auto;
        }
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
      @media screen and (max-width: 800px) {
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p {
          width: 95%;
          text-align: center;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: showParagraph 15s infinite;
        }
        p:nth-of-type(1) {
          top: 85%;
          left: 50%;
          opacity: 0;
        }
        p:nth-of-type(2) {
          top: 85%;
          left: 50%;
          opacity: 0;
          animation-delay: 3s;
        }
        p:nth-of-type(3) {
          top: 85%;
          left: 50%;
          opacity: 0;
          animation-delay: 6s;
        }
        p:nth-of-type(4) {
          top: 85%;
          left: 50%;
          opacity: 0;
          animation-delay: 9s;
        }
        p:nth-of-type(5) {
          top: 85%;
          left: 50%;
          opacity: 0;
          animation-delay: 12s;
        }
        p:nth-of-type(6) {
          display: none;
        }
        @keyframes showParagraph {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          30% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
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
    @media screen and (max-width: 800px) {
      width: 90%;
      font-size: 1.5rem;
      margin: 10vh auto 10vh;
    }
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
    @media screen and (max-width: 800px) {
      flex-direction: column;
      img {
        width: 100%;
      }
      section {
        width: 85%;
        margin: 3vh auto 0;
        p {
          text-align: justify;
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
    @media screen and (max-width: 800px) {
      width: 95vw;
      flex-direction: column;
      section {
        margin: 3vh auto;
        span {
          font-size: 2.5rem;
        }
        h4 {
          font-size: 1rem;
          text-align: center;
        }
      }
      .lineNumber {
        display: none;
      }
    }
  }
`;

export default OmniePage;
