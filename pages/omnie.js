import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <div className="aboutMeContent">
        <img src={meImg2} alt="ja z rodziną" />
        <section>
          <h2>Hejka!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat
            quisquam pariatur debitis. Vero odit eligendi, molestias earum, esse
            doloremque recusandae ex deserunt molestiae doloribus expedita rem
            sed hic, accusantium quia voluptates sit sapiente. Ea totam nesciunt
            possimus, adipisci at repellat, illo officia cupiditate culpa
            dolorem ad. At ex sequi perspiciatis ut provident expedita
            dignissimos dolore enim dolorem doloribus, a labore consequatur,
            repellat voluptatem ipsa! Libero dolor maxime reiciendis placeat
            perspiciatis eos, earum exercitationem autem praesentium! Provident
            magni ipsam excepturi reprehenderit tenetur consequatur quasi,
            ratione rem quia esse iure aliquid voluptate natus. Dicta quis,
            aperiam voluptatem porro architecto rerum suscipit?
          </p>
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
  .aboutMeContent {
    width: 90vw;
    margin: 20vh auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      width: 50%;
    }
  }
  section {
    width: 40%;
  }
`;

export default OmniePage;
