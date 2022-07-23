import React from "react";
import styled from "styled-components";

const SmallDetails = ({ oneOffer2 }) => {
  const { title, price, numberOfImages, time, place, ready, album, quality } =
    oneOffer2;
  return (
    <Wrapper>
      <h2 className="detailsTitle">{title}</h2>
      <div className="detailsContent">
        <h3 className="detailsPrice">
          <span>Cena:</span> od {price} zł
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25vw;
  height: 60vh;
  position: fixed;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: var(--sectionBgColor);
  border: 2px solid var(--secondaryColor);
  border-radius: 10px;
  padding: 2vh 1vw;
  .detailsTitle {
    margin-bottom: 2vh;
    text-align: center;
    text-transform: uppercase;
    font-family: var(--titleFont);
    font-size: 1.5rem;
    color: var(--secondaryColor);
  }
  .detailsContent {
    margin: 5vh auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: var(--textFont);
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }

    h3 {
      margin-bottom: 2vh;
      font-size: 1.1rem;
      text-transform: uppercase;
      span {
        /* font-family: var(--titleFont); */
        color: var(--secondaryColor);
        margin-right: 5px;
      }
    }
  }
`;

export default SmallDetails;
