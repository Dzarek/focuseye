import React from "react";
import styled from "styled-components";

const SingleOffer = ({ offer, setShowDetails }) => {
  const { category, price, imgs } = offer;
  console.log(imgs[0]);
  return (
    <Wrapper className="singleOffer">
      <div
        style={{ backgroundImage: `url(${imgs[0]})` }}
        className="singleBG"
      ></div>
      <div className="singleContent">
        <h3 className="title">{category}</h3>
        <h2 className="price">{price} zł</h2>
        <button onClick={() => setShowDetails(category)} className="detailsBtn">
          szczegóły
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  height: 65vh;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 70vh;
  }
  .singleBG {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;

    background-size: cover;
    background-position: center;
    filter: brightness(0.4);
    transition: 0.5s;
  }
  .singleContent {
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Kanit", sans-serif;
    color: white;
    .title {
      text-transform: uppercase;
      width: 60%;
      border-bottom: 2px solid white;
      padding-bottom: 15px;
      font-size: 2rem;
      text-shadow: 3px 3px 3px black;
    }
    .price {
      font-size: 2rem;
      margin-top: 50%;
      text-shadow: 3px 3px 3px black;
    }
    .detailsBtn {
      background-color: transparent;
      padding: 5px 20px;
      font-size: 1.5rem;
      font-family: "Kanit", sans-serif;
      color: white;
      border: 2px solid white;
      border-radius: 5px;
      text-shadow: 3px 3px 3px black;
      transition: 0.3s;
      cursor: pointer;
      :hover {
        background-color: white;
        color: #222;
        text-shadow: none;
      }
    }
  }
  :hover .singleBG {
    filter: none;
  }
`;

export default SingleOffer;
