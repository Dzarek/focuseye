import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";

const bgImg = "../images/logoBg.png";
const dotacjaImg = "../images/dotacjaImg.png";

const Footer = () => {
  return (
    <Wrapper>
      <section className="firstSection">
        <img className="logo" src={bgImg} alt="logo" />
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
  background: var(--navigationBgColor);
  background: var(--footerBgColor);
  background-size: cover;
  font-family: var(--titleFont);
  font-size: 1.3rem;
  color: var(--secondaryColor2);
  @media screen and (max-width: 800px) {
    margin-bottom: 10vh;
    height: 12vh;
    text-align: center;
    border-bottom: 2px solid var(--secondaryColor);
  }
  .logo {
    width: 15vw;
    margin-bottom: 3vh;
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
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 1vh;
      color: var(--secondaryColor3);
      color: #fff;
      font-family: var(--textFont);
      transition: 0.4s;
      cursor: pointer;
      :hover {
        color: var(--sectionBgColor);
      }
    }
    .iconFooter {
      margin-right: 15px;
      margin-top: 3px;
      font-size: 2rem;
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
