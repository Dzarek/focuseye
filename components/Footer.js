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

const bgImg = "../images/logoBg2.png";
const dotacjaImg = "../images/dotacjaImg.png";

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
        <p>
          <FaPhoneSquare className="iconFooter" /> 798 698 605
        </p>
        <p>
          <ImMail className="iconFooter" /> kontakt.focuseye@gmail.com
        </p>
        <p>
          <FaInstagramSquare className="iconFooter" /> focuseye_sylwiasajdak
        </p>
        <p>
          <FaFacebookSquare className="iconFooter" /> sylwiasajdakfotografia
        </p>
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
  @media screen and (max-width: 800px) {
    margin-bottom: 10vh;
    height: 12vh;
    text-align: center;
    border-bottom: 2px solid var(--secondaryColor);
  }
  .logo {
    width: 15vw;
    margin-bottom: 3vh;
    /* animation: bigger 2s ease infinite alternate;
    @keyframes bigger {
      80% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.5);
      }
    } */
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
    p {
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
      cursor: pointer;
      :hover .iconFooter {
        transform: scale(1.1);
        color: var(--navigationBgColor);
      }
    }
    .iconFooter {
      margin-right: 15px;
      margin-top: 3px;
      font-size: 2rem;
      color: var(--secondaryColor);
      transition: 0.4s;
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
  }
`;

export default Footer;
