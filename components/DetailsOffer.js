import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";

const DetailsOffer = ({ oneOffer, setShowDetails }) => {
  const {
    title,
    price,
    numberOfImages,
    time,
    place,
    ready,
    album,
    quality,
    description,
    imgs,
  } = oneOffer;
  return (
    <Wrapper className="detailsBG">
      <div className="details">
        <header style={{ backgroundImage: `url(${imgs[1]})` }}>
          <button onClick={() => setShowDetails(false)}>
            <ImCross />
          </button>
        </header>
        <h2 className="detailsTitle">{title}</h2>
        <div className="detailsContent">
          <div className="firstPart">
            <h3 className="detailsPrice">
              <span>Cena:</span> {price} zł
            </h3>
            <h3 className="detailsNumber">
              <span>Minimalna ilość zdjęć:</span> {numberOfImages}
            </h3>
            <h3 className="detailsTime">
              <span>Czas:</span> ok. {time}
            </h3>
            <h3 className="detailsPlace">
              {" "}
              <span>Miejsce:</span> {place}
            </h3>
            <h3 className="detailsReady">
              {" "}
              <span>Gotowe zdjęcia:</span> {ready}
            </h3>
            <h3 className="detailsAlbum">
              {" "}
              <span>Album:</span> {album}
            </h3>
            <h3 className="detailsQuality">
              {" "}
              <span>Rozdzielczość:</span> {quality}
            </h3>
          </div>
          <div className="detailsBorder"></div>
          <div className="secondPart">
            <h3>Opis:</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .details {
    background-color: #111;
    width: 55vw;
    height: 80vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    color: white;
    overflow: auto;
    border-radius: 5px;
    border: 2px solid var(--secondaryColor);
    @media screen and (max-width: 800px) {
      width: 100vw;
      height: 100vh;
      transform: translate(-50%, -50%);
    }
    header {
      width: 100%;
      height: 50%;
      background-size: cover;
      background-position: center;
      filter: saturate(0.1);
      button {
        position: absolute;
        top: 0%;
        right: 5%;
        background: rgba(0, 0, 0, 0.8);
        padding: 10px 15px;
        border-radius: 0 0 15px 15px;
        border: none;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
        .detailIcon {
          transition: 0.3s;
        }
        :hover .detailIcon {
          transform: rotate(90deg);
        }
      }
    }
    .detailsTitle {
      margin: 2vh auto 0;
      text-align: center;
      text-transform: uppercase;
      font-family: var(--titleFont);
      text-shadow: 3px 3px 3px black;
      font-size: 3rem;
    }
    .detailsContent {
      margin: 5vh auto;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-family: var(--textFont);
      @media screen and (max-width: 800px) {
        flex-direction: column;
      }
      .firstPart {
        width: 40%;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 800px) {
          width: 90%;
          margin: 0 auto;
        }
        h3 {
          margin-bottom: 3vh;
          span {
            color: var(--secondaryColor2);
            margin-right: 5px;
          }
        }
      }
      .detailsBorder {
        background: var(--secondaryColor);
        width: 2px;
        height: 40vh;
        justify-self: center;
        @media screen and (max-width: 800px) {
          width: 70vw;
          height: 2px;
          margin: 5vh auto;
        }
      }
      .secondPart {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        @media screen and (max-width: 800px) {
          width: 90%;
          margin: 0 auto;
        }
        h3 {
          font-family: var(--titleFont);
          color: var(--secondaryColor2);
          font-size: 2rem;
          margin-bottom: 2vh;
        }
        p {
          margin-bottom: 3vh;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default DetailsOffer;
