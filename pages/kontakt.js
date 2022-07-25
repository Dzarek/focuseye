import styled from "styled-components";
import MyForm from "../components/MyForm";

const contactHeaderImg = "../images/contact/contactHeader.png";

const BlogPage = () => {
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
          <MyForm />
        </section>
        <div className="separateLine"></div>
        <section className="contactSocialMedia">
          <h3>Kontakt bezpośredni</h3>
          <div className="socialMediaWrapper">
            <h4>
              Telefon: <span>798 698 605</span>
            </h4>
            <h4>
              Email: <span>kontakt.focuseye@gmail.com</span>
            </h4>
            <h4>
              Instagram: <span>focuseye_sylwiasajdak</span>
            </h4>
            <h4>
              Facebook: <span>sylwiasajdakfotografia</span>
            </h4>
            <h4>
              Nr konta: <span>00 0000 0000 0000 0000 0000 0000</span>
            </h4>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
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
    width: 90vw;
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
    align-items: center;
    align-self: center;
    margin-top: 8vh;
    h4 {
      font-size: 1.3rem;
      margin: 2vh auto;
      font-weight: 500;
      span {
        color: var(--secondaryColor);
      }
    }
  }
`;

export default BlogPage;
