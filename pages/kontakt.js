import styled from "styled-components";
import MyForm from "../components/MyForm";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const contactHeaderImg = "/images/contact/contactHeader.png";
const contactPersonImg2 = "/images/contact/contactPerson2.png";

const KontaktPage = ({ setVisibleCookie }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <header>
        <img src={contactHeaderImg} alt="gallery title" />
        <div className="title">
          <h2>Kontakt </h2>
          <p data-aos="fade-up">Fomularz, Email, Telefon, Social Media</p>
        </div>
      </header>
      <div className="contactContainer">
        <section className="contactForm">
          <h3>Napisz do mnie przez formularz kontaktowy</h3>
          <MyForm setVisibleCookie={setVisibleCookie} />
        </section>
        <img
          data-aos="zoom-out"
          src={contactPersonImg2}
          alt=""
          className="separateImg"
        />
        <section className="contactSocialMedia">
          <h3>Kontakt bezpośredni</h3>
          <div className="socialMediaWrapper">
            <a href="tel:+48798698605">
              Telefon: <span>798 698 605</span>
            </a>
            <h4>
              Email: <span>kontakt.focuseye@gmail.com</span>
            </h4>
            <a
              href="https://www.instagram.com/focuseye_sylwiasajdak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: <span>focuseye_sylwiasajdak</span>
            </a>
            <a
              href="https://www.facebook.com/sylwiasajdakfotografia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook: <span>sylwiasajdakfotografia</span>
            </a>
          </div>
          <div className="bankInfo">
            <h3>Dane do przelewu:</h3>
            <h4 className="bankInfoName">
              FocusEye Mobilne Studio Fotografii - Sylwia Sajdak
            </h4>
            <h4>
              Nr konta: <span>91 1140 2004 0000 3102 7985 0369</span>
            </h4>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;
  header {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--contactHeaderBgColor);
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 3vh;
        margin-top: 3vh;
        color: var(--secondaryColor);
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--titleFont);
      }
    }
    img {
      height: 50vh;
      margin-right: 5vw;
    }
  }
  .contactContainer {
    width: 95vw;
    margin: 20vh auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    section {
      width: 47%;
    }
    .separateLine {
      width: 2px;
      background: var(--secondaryColor3);
      height: 50vh;
      align-self: center;
    }
    .separateImg {
      width: 10vw;
      align-self: center;
      opacity: 0.5;
      /* transform: rotateY(180deg); */
    }
    .contactForm,
    .contactSocialMedia {
      h3 {
        color: var(--secondaryColor3);
        font-size: 1.2rem;
        text-align: center;
        font-family: var(--titleFont);
        font-weight: 500;
        margin-bottom: 5vh;
      }
    }
  }

  .socialMediaWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    align-self: center;
    margin-top: 3vh;
    a,
    h4 {
      font-size: 1.3rem;
      margin: 2vh 5vw;
      font-weight: 500;
      text-decoration: none;
      color: var(--primaryColor);
      span {
        color: var(--secondaryColor);
      }
    }
  }
  .bankInfo {
    margin-top: 4vh;
    h4 {
      font-size: 1.3rem;
      margin: 2vh 5vw;
      font-weight: 500;
      span {
        color: var(--secondaryColor);
      }
    }
    .bankInfoName {
      font-weight: 600;
    }
  }
`;

export default KontaktPage;
