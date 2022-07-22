import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const bgImg = "../../images/logoBg.png";

const FirstInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="imgContainer">
        <img
          src={bgImg}
          alt="focusEye"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
      </div>
      <div className="textContainer">
        <h1>Sesje fotograficzne - FocusEye</h1>
        <p>
          W fotografii zależy mi na tym aby oddać naturalność i pokazać Waszą
          miłość. Za każdym zaproszeniem mnie na sesję kryje się głęboka radość
          i wzruszenie. Domowe sesje lifestyle to jest to co kocham najbardziej,
          a fotografia reportażowa to ludzie! którzy mnie inspirują, poruszają i
          rozbudzają wyobraźnię.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60vw;
  max-width: 1360px;
  min-height: 50vh;
  margin: 20vh auto 10vh;
  padding-top: 10vh;
  position: relative;
  .imgContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    opacity: 0.5;
    img {
      width: 100%;
    }
  }

  .textContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      font-family: var(--titleFont);
      margin-bottom: 7vh;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--secondaryColor3);
      /* color: var(--navigationBgColor); */
    }
    p {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: var(--textFont);
      line-height: 1.7;
    }
  }
`;

export default FirstInfo;
