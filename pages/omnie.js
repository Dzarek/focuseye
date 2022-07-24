import styled from "styled-components";

const aboutMeHeaderImg = "../images/aboutMeImg/aboutMeHeader.png";

const OmniePage = () => {
  return (
    <Wrapper>
      <header>
        <div className="title">
          <h2 data-aos="fade-right">O mnie</h2>
          <img src={aboutMeHeaderImg} alt="gallery title" />
        </div>
        <div className="myFeatures">
          <p>marzycielka</p>
          <p>pasjonatka fotografii</p>
          <p>szczęśliwa żona</p>
          <p>kochająca mama</p>
          <p>fajna</p>
        </div>
      </header>
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
    background: var(--sectionBgColor);

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        height: 50vh;
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
      width: 70%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        position: absolute;
      }
      p:nth-of-type(1) {
        top: 20%;
        left: 0%;
      }
      p:nth-of-type(2) {
        top: 40%;
        left: 20%;
      }
      p:nth-of-type(3) {
        top: 40%;
        left: 90%;
      }
      p:nth-of-type(4) {
        top: 30%;
        left: 20%;
      }
      p:nth-of-type(5) {
        top: 70%;
        left: 80%;
      }
      p:nth-of-type(6) {
        top: 60%;
        left: 60%;
      }
    }
  }
`;

export default OmniePage;
