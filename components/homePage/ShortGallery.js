import { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { TbSlideshow } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const rodzinne1 = "../../images/gallery/rodzinne/98.jpg";
const rodzinne2 = "../../images/gallery/rodzinne/101.jpg";
const rodzinne3 = "../../images/gallery/rodzinne/104.jpg";
const rodzinne4 = "../../images/gallery/rodzinne/103.jpg";

const ShortGallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper className="mainPage">
      <div className="pageContainer">
        <div data-aos="zoom-in-up" className="imgContainer">
          <img src={rodzinne1} alt="" />
          <img src={rodzinne2} alt="" />
          <img src={rodzinne3} alt="" />
          <img src={rodzinne4} alt="" />
        </div>
        <div className="textContainer">
          <h2>
            Zapraszam do obejrzenia <br /> galerii zdjęć!
          </h2>
          <p>
            Zobacz jak do tej pory wyglądała moja praca z aparatem. Mam nadzieję
            że w tej galerii znajdą się również Twoje zdjęcia.
          </p>
          <button>
            <Link href="/galeria">
              <TbSlideshow />
            </Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20vh auto 0vh;
  .pageContainer {
    width: 90%;
    height: 70vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .imgContainer {
      width: 47%;
      height: 100%;
      position: relative;
      img {
        height: 190px;
        position: absolute;
        top: 0;
        left: 0;
      }
      img:nth-of-type(1) {
        top: 0;
        left: 0;
        transform: rotate(5deg);
      }
      img:nth-of-type(2) {
        top: 5%;
        left: 60%;
        transform: rotate(-3deg);
      }
      img:nth-of-type(3) {
        top: 45%;
        left: 55%;
        transform: rotate(2deg);
      }
      img:nth-of-type(4) {
        top: 47%;
        left: 2%;
        transform: rotate(-4deg);
      }
    }
  }
  .textContainer {
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-bottom: 7vh;
      font-family: var(--titleFont);
      font-weight: 600;
      font-size: 1.7rem;
      text-align: center;
      text-transform: uppercase;
      color: var(--secondaryColor);
    }
    p {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 5vh;
    }
    button {
      background: none;
      border: none;
      font-size: 4rem;
      cursor: pointer;
      color: var(--secondaryColor);
      transition: 0.5s;
      :hover {
        color: var(--secondaryColor3);
      }
    }
  }
`;

export default ShortGallery;
