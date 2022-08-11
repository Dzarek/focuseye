import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useGlobalContext } from "../context";

const loadingSpinner = "/images/loading.gif";

const ShortBlog = () => {
  const { fourTitle } = useGlobalContext();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Wrapper>
        <h3 className="firsth3">
          Jeśli interesują Cię ciekawostki na temat fotografii zapraszam do
          zakładki BLOG. <br /> Znajdziesz tam artykuły takie jak:
        </h3>
        <Link href="/blog">
          <h2 className="blogTitle">BLOG</h2>
        </Link>
        {fourTitle ? (
          <>
            <p data-aos="zoom-in-right">{fourTitle[0]}</p>
            <p data-aos="zoom-in-left" data-aos-delay="500">
              {fourTitle[1]}
            </p>

            <p data-aos="zoom-in-right" data-aos-delay="1000">
              {fourTitle[2]}
            </p>

            <p data-aos="zoom-in-left" data-aos-delay="1500">
              {fourTitle[3]}
            </p>
          </>
        ) : (
          <>
            <img className="blogLoading" src={loadingSpinner} alt="loading" />
          </>
        )}
        <h3 className="lasth3">oraz wiele innych...</h3>
      </Wrapper>
      <Wrapper2>
        <h3 className="firsth3">
          Jeśli interesują Cię ciekawostki na temat fotografii zapraszam do
          zakładki{" "}
          <Link href="/blog">
            <span>BLOG</span>
          </Link>
          . <br /> Znajdziesz tam artykuły takie jak:
        </h3>
        {fourTitle ? (
          <>
            <p data-aos="zoom-in-right">{fourTitle[0]}</p>
            <p data-aos="zoom-in-right">{fourTitle[1]}</p>
            <p data-aos="zoom-in-right">{fourTitle[2]}</p>
            <p data-aos="zoom-in-right">{fourTitle[3]}</p>
          </>
        ) : (
          <>
            <img className="blogLoading" src={loadingSpinner} alt="loading" />
          </>
        )}
        <h3 className="lasth3">oraz wiele innych...</h3>
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  width: 90vw;
  min-height: 60vh;
  margin: 10vh auto;
  position: relative;
  .blogLoading {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
    transition: 0.5s;
    :hover {
      color: var(--navigationBgColor);
      letter-spacing: 30px;
    }
  }
  h3 {
    text-align: center;
    font-size: 1.5rem;
    width: 90%;
    font-weight: 600;
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
    font-size: 1.6rem;
    font-weight: 400;
    position: absolute;
    color: var(--secondaryColor3);
  }
  p:nth-of-type(1) {
    top: 25%;
    left: 5%;
  }
  p:nth-of-type(2) {
    top: 25%;
    right: 5%;
  }
  p:nth-of-type(3) {
    bottom: 25%;
    left: 5%;
  }
  p:nth-of-type(4) {
    bottom: 25%;
    right: 5%;
  }
`;
const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  width: 95vw;
  min-height: 60vh;
  margin: 10vh auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .blogLoading {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h3 {
    text-align: center;
    font-size: 1.3rem;
    width: 90%;
    font-weight: 600;
    span {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--secondaryColor);
    }
  }
  .firsth3 {
    margin-bottom: 5vh;
  }
  .lasth3 {
    margin-top: 5vh;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--secondaryColor3);
    width: 90%;
    margin: 2vh auto;
  }
`;

export default ShortBlog;
