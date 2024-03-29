import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const SingleOffer = ({ category, slug, img, setShowDetails }) => {
  const router = useRouter();
  return (
    <Wrapper className="singleOffer">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="singleBG"
      ></div>
      <div className="singleContent">
        <h3 className="title">{category}</h3>
        {router.pathname == "/oferta" ? (
          <Link href={`/oferta/${slug}`}>
            <button className="detailsBtn">szczegóły</button>
          </Link>
        ) : (
          <button
            onClick={() => setShowDetails(category)}
            className="detailsBtn"
          >
            szczegóły
          </button>
        )}
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
    height: 60vh;
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
    filter: brightness(0.6);
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
    font-family: var(--titleFont);
    color: white;
    .title {
      text-transform: uppercase;
      width: 90%;
      border-bottom: 2px solid white;
      padding-bottom: 15px;
      font-size: 2rem;
      text-shadow: 2px 2px 2px black;
      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
      }
    }

    .detailsBtn {
      background-color: transparent;
      padding: 10px 20px;
      font-size: 1.5rem;
      font-family: var(--titleFont);
      color: white;
      border: 2px solid white;
      border-radius: 5px;
      text-shadow: 3px 3px 3px black;
      transition: 0.3s;
      font-weight: 500;
      margin-bottom: 3vh;

      cursor: pointer;
      :hover {
        background-color: white;
        color: var(--secondaryColor3);
        text-shadow: none;
      }
      @media screen and (max-width: 800px) {
        font-size: 1.2rem;
        padding: 5px 20px;
      }
    }
  }
  :hover .singleBG {
    filter: none;
  }
`;

export default SingleOffer;
