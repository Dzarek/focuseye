import { useEffect } from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";

const bgImg = "/images/logoBg2.png";
const dotacjaImg = "/images/dotacjaImg.png";
const logoJarek = "/images/logoJarek.png";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <section className="firstSection">
        <img data-aos="fade-right" className="logo" src={bgImg} alt="logo" />
        <p>
          &copy; {new Date().getFullYear()} FocusEye - Sylwia Sajdak. <br />{" "}
          Wszelkie prawa zastrzeżone.
        </p>
      </section>
      <section className="secondSection">
        <h3>Kontakt:</h3>
        <a href="tel:+48798698605">
          <FaPhoneSquare className="iconFooter" /> 798 698 605
        </a>
        <p>
          <ImMail className="iconFooter" /> kontakt.focuseye@gmail.com
        </p>
        <a
          href="https://www.instagram.com/focuseye_sylwiasajdak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="iconFooter" /> focuseye_sylwiasajdak
        </a>
        <a
          href="https://www.facebook.com/sylwiasajdakfotografia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="iconFooter" /> sylwiasajdakfotografia
        </a>
      </section>
      <section className="thirdSection">
        <img src={dotacjaImg} alt="dotacja" />
        <span>
          „Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich: Europa
          inwestująca w obszary wiejskie” <br /> Operacja pn: „FocusEye Mobilne
          Studio Fotografii” – podjęcie działalności gospodarczej w zakresie
          świadczenia usług fotograficznych mająca na celu utworzenie nowego
          przedsiębiorstwa świadczącego mobilne usługi fotograficzne poprzez
          zakup sprzętu i wyposażenia oraz stworzenia jednego miejsca pracy
          współfinansowana jest ze środków Unii Europejskiej w ramach
          poddziałania 19.2 „Wsparcie na wdrażanie operacji w ramach strategii
          rozwoju lokalnego kierowanego przez społeczność” <br /> Programu
          Rozwoju Obszarów Wiejskich na lata 2014 – 2020.
        </span>
      </section>
      <span className="logoJarek">
        <p>projekt i wykonanie</p>
        <a href="https://www.jarekjanas.com">
          <img src={logoJarek} alt="logo Jarosław Janas" />
        </a>{" "}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  padding: 0 7vw;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--footerBgColor);
  background-size: cover;
  font-family: var(--titleFont);
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--secondaryColor3);
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 5vh 1vw 10vh;
    font-size: 1.1rem;
  }
  .logo {
    width: 15vw;
    margin-bottom: 3vh;
    @media screen and (max-width: 800px) {
      width: 45vw;
    }
  }
  .firstSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      font-size: 1rem;
    }
  }
  .secondSection {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    h3 {
      margin-bottom: 3vh;
      font-weight: 600;
      text-transform: uppercase;
    }
    p,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      margin-bottom: 1vh;
      color: var(--secondaryColor3);
      font-family: var(--textFont);
      font-weight: 500;
      transition: 0.4s;
      letter-spacing: 1px;
      text-decoration: none;
      cursor: pointer;
      :hover .iconFooter {
        transform: scale(1.1);
        color: var(--navigationBgColor);
      }
    }
    .iconFooter {
      margin-right: 15px;
      margin-top: 3px;
      font-size: 1.8rem;
      color: var(--secondaryColor);
      transition: 0.4s;
    }
    @media screen and (max-width: 800px) {
      margin: 5vh auto;
    }
  }
  .thirdSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35vw;
    img {
      width: 25vw;
      margin-bottom: 3vh;
    }
    span {
      color: var(--secondaryColor3);
      font-family: var(--textFont);
      font-size: 0.9rem;
    }
    @media screen and (max-width: 800px) {
      width: 95%;
      margin: 0 auto;
      img {
        width: 80%;
      }
    }
  }
  .logoJarek {
    position: absolute;
    bottom: 4%;
    left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        opacity: 0.8;
        :hover {
          filter: invert(100%);
        }
      }
    }
    p {
      font-size: 12px;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 800px) {
      bottom: 2%;
      left: 3%;
    }
  }
`;

export default Footer;
