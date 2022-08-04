import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const DetailsOffer = ({ oneOffer, setShowDetails }) => {
  const { title, slug, shortDescription, imgs } = oneOffer;
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
          <p>{shortDescription}</p>
          <Link href={`/oferta/${slug}`}>
            <button className="detailsBtn">szczegóły</button>
          </Link>
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
    background-color: var(--singleOfferBgColor);
    width: 60vw;
    height: 80vh;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--secondaryColor3);
    overflow: auto;
    border-radius: 5px;
    border: 3px solid var(--secondaryColor);

    @media screen and (max-width: 800px) {
      width: 100vw;
      height: 100vh;
      transform: translate(-50%, -50%);
    }
    header {
      width: 100%;
      height: 60%;
      background-size: cover;
      background-position: center;
      /* filter: saturate(0.5); */
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
      text-shadow: 2px 2px 2px black;
      font-size: 2.2rem;
      color: #fff;
    }
    .detailsContent {
      margin: 5vh auto;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      font-family: var(--textFont);
      @media screen and (max-width: 800px) {
        flex-direction: column;
      }
      p {
        font-size: 1.3rem;
        line-height: 1.5;
        margin-bottom: 5vh;
        text-align: center;
      }
    }
  }
  .detailsBtn {
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 1rem;
    font-family: var(--titleFont);
    text-transform: uppercase;
    padding: 10px 0px;
    width: 160px;
    margin: 2vh auto;
    font-weight: 800;
    color: #fff;
    background: var(--secondaryColor);
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: #fff;
      border: 2px solid var(--secondaryColor);
      color: var(--secondaryColor);
    }
  }
`;

export default DetailsOffer;
