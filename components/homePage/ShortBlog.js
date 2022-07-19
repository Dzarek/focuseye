import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const ShortBlog = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <h3 className="firsth3">
        Jeśli interesują Cię ciekawostki na temat fotografii zapraszam do
        zakładki BLOG. <br /> Znajdziesz tam artykuły takie jak:
      </h3>
      <h2 className="blogTitle">BLOG</h2>
      <p data-aos="zoom-in-right">Jak przebiega sesja lifestyle?</p>
      <p data-aos="zoom-in-left" data-aos-delay="500">
        Lorem ipsum dolor sit amet?
      </p>
      <p data-aos="zoom-in-right" data-aos-delay="1000">
        Lorem ipsum dolor sit amet?
      </p>
      <p data-aos="zoom-in-left" data-aos-delay="1500">
        Lorem ipsum dolor sit amet?
      </p>
      <h3 className="lasth3">oraz wiele innych...</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1360px;
  min-height: 60vh;
  margin: 10vh auto;
  /* padding: 10vh 0; */
  position: relative;
  .blogTitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--titleFont);
    text-transform: uppercase;
    font-size: 5rem;
    color: var(--secondaryColor);
    letter-spacing: 10px;
    cursor: pointer;
    transition: 1s;
    :hover {
      color: var(--navbarBgColor);
    }
  }
  h3 {
    text-align: center;
    font-size: 1.7rem;
    width: 90%;
  }
  .firsth3 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .lasth3 {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    font-style: italic;
    font-size: 1.6rem;
    font-weight: 500;
    position: absolute;
  }
  p:nth-of-type(1) {
    top: 30%;
    left: 10%;
    /* transform: rotate(-5deg); */
  }
  p:nth-of-type(2) {
    top: 30%;
    right: 10%;
    /* transform: rotate(5deg); */
  }
  p:nth-of-type(3) {
    bottom: 30%;
    left: 10%;
    /* transform: rotate(5deg); */
  }
  p:nth-of-type(4) {
    bottom: 30%;
    right: 10%;
    /* transform: rotate(-5deg); */
  }
`;

export default ShortBlog;
