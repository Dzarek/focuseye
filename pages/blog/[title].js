// dodać like i komentarze

import styled from "styled-components";
import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";
import { IoChevronBackCircle } from "react-icons/io5";

const articleImg3 = "../images/blog/zakochani2.jpg";
const articleImg4 = "../images/blog/zakochani3.jpg";
const articleImg5 = "../images/blog/zakochani4.jpg";

const images = [articleImg5, articleImg3, articleImg4];

const SingleArticleBlog = () => {
  const articleImg = "../images/ofertaImg/zakochani2.jpg";
  const articleImg2 = "../images/blog/zakochani1.jpg";

  return (
    <Wrapper>
      <div
        className="bgArticle"
        style={{
          background: `url(${articleImg2})`,
          width: "100vw",
          height: "100vh",
          position: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          filter: "saturate(0.5) brightness(0.7)",
        }}
      ></div>
      <div className="articleContainer">
        <div className="titleContainer">
          <h1>
            Jak przebiega sesja lifestyle?
            <span>
              Data publikacji: 25.07.2022
              {/* <br /> Długość czytania: 5 min */}
            </span>
          </h1>
          <img src={articleImg} alt="title" />
        </div>
        <div className="separateLine"></div>
        <section className="infoContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            magni eligendi dolorum molestias sequi quae expedita magnam
            mollitia, minima voluptatem sit natus aliquid alias temporibus modi?
            Odio repellendus praesentium modi distinctio ea dolorem debitis
            omnis. At tempora sapiente, harum, odit ducimus molestias est nihil
            laborum facere excepturi iure pariatur aut reprehenderit inventore
            incidunt repellat, eveniet molestiae? Doloremque quod omnis, maxime
            dolorum voluptatem laborum? At reiciendis in non est rerum numquam
            amet, asperiores perferendis ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            magni eligendi dolorum molestias sequi quae expedita magnam
            mollitia, minima voluptatem sit natus aliquid alias temporibus modi?
            Odio repellendus praesentium modi distinctio ea dolorem debitis
            omnis. At tempora sapiente, harum, odit ducimus molestias est nihil
            laborum facere excepturi iure pariatur aut reprehenderit inventore
            incidunt repellat, eveniet molestiae? Doloremque quod omnis, maxime
            dolorum voluptatem laborum? At reiciendis in non est rerum numquam
            amet, asperiores perferendis ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            magni eligendi dolorum molestias sequi quae expedita magnam
            mollitia, minima voluptatem sit natus aliquid alias temporibus modi?
            Odio repellendus praesentium modi distinctio ea dolorem debitis
            omnis. At tempora sapiente, harum, odit ducimus molestias est nihil
            laborum facere excepturi iure pariatur aut reprehenderit inventore
            incidunt repellat, eveniet molestiae? Doloremque quod omnis, maxime
            dolorum voluptatem laborum? At reiciendis in non est rerum numquam
            amet, asperiores perferendis ipsum.
          </p>
        </section>
        <SRLWrapper>
          <section className="images">
            {images.map((img, index) => {
              return <img key={index} src={img} alt="name" />;
            })}
          </section>
        </SRLWrapper>
      </div>
      <Link href="/blog">
        <button className="backToBlog">
          <IoChevronBackCircle className="icon" />
          powrót do listy artykułów
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  padding-top: 10vh;
  /* padding-bottom: 5vh; */
  position: relative;

  /* .bgArticle {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    background: url(${articleImg});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    filter: saturate(0.5) brightness(0.7);
  } */
  .backToBlog {
    position: relative;
    margin: 15vh auto 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: var(--titleFont);
    text-transform: uppercase;
    padding: 10px 10px;
    font-weight: 700;
    color: #fff;
    background: var(--secondaryColor);
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: #fff;
      border: 2px solid var(--secondaryColor);
      color: var(--secondaryColor);
    }
    .icon {
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
  .articleContainer {
    position: relative;
    width: 60vw;
    margin: 15vh auto 10vh;
    min-height: 80vh;
    background: var(--sectionBgColor);
    padding: 5vh 5vw;
  }
  .titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      width: 70%;
      font-size: 2rem;
      font-family: var(--titleFont);
      color: var(--secondaryColor);
      font-weight: 600;
      display: flex;
      flex-direction: column;
      span {
        margin-top: 7vh;
        font-size: 1rem;
        color: var(--primaryColor);
        font-weight: 500;
      }
    }
    img {
      width: 30%;
      border-radius: 5px;
      filter: saturate(0.6);
    }
  }
  .separateLine {
    width: 50vw;
    margin: 8vh auto;
    height: 2px;
    background: var(--secondaryColor3);
  }
  .infoContent {
    margin: 0 auto;
    width: 80%;
    p {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 5vh;
      line-height: 1.5;
    }
  }
  .images {
    margin: 10vh auto 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    img {
      width: 30%;
      margin: 10px;
      cursor: pointer;
    }
  }
`;

export default SingleArticleBlog;
