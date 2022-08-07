import styled from "styled-components";
import { TiCamera, TiTime, TiLocation } from "react-icons/ti";
import {
  MdOutlinePhotoSizeSelectLarge,
  MdOutlineTravelExplore,
} from "react-icons/md";
import { FaMoneyBillWave, FaCarAlt } from "react-icons/fa";
import { RiImageAddLine } from "react-icons/ri";
import { BiPhotoAlbum } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import Link from "next/link";

const PakietSingleOffer = ({ pakiety }) => {
  const { basic, premium } = pakiety;
  return (
    <Wrapper style={basic.weddingInfo && { height: "70vh" }}>
      {basic.weddingInfo && (
        <video
          src="/images/weeding.mp4"
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
          className="videoContainer"
        ></video>
      )}
      {basic && (
        <div
          className={basic.weddingInfo ? "pakiet weedingContainer" : "pakiet"}
        >
          <h2>{basic.name}</h2>
          <div className="infoContent">
            {basic.numberOfImages && (
              <article>
                <TiCamera className="icon" />
                <p>{basic.numberOfImages}</p>
              </article>
            )}
            {basic.time && (
              <article>
                <TiTime className="icon" />
                <p>{basic.time}</p>
              </article>
            )}
            {basic.place && (
              <article>
                <TiLocation className="icon" />
                <p>{basic.place}</p>
              </article>
            )}
            {basic.quality && (
              <article>
                <MdOutlinePhotoSizeSelectLarge className="icon" />
                <p>{basic.quality}</p>
              </article>
            )}
            {basic.webGallery && (
              <article>
                <MdOutlineTravelExplore className="icon" />
                <p>{basic.webGallery}</p>
              </article>
            )}
            {basic.album && (
              <article>
                <BiPhotoAlbum className="icon" />
                <p>{basic.album}</p>
              </article>
            )}
            {basic.price && (
              <article>
                <FaMoneyBillWave className="icon" />
                <p>{basic.price}</p>
              </article>
            )}
            {basic.extraImg && (
              <article>
                <RiImageAddLine className="icon" />
                <p>{basic.extraImg}</p>
              </article>
            )}
            {basic.drive && (
              <article>
                <FaCarAlt className="icon" />
                <p>{basic.drive}</p>
              </article>
            )}
            {basic.ready && (
              <article>
                <GiConfirmed className="icon" />
                <p>{basic.ready}</p>
              </article>
            )}
          </div>
          {basic.weddingInfo && (
            <div className="weedingPakiet">
              <h4>{basic.weddingInfo}</h4>
              <Link href="/kontakt">
                <button className="button buttonWedding">
                  Wyśli do mnie wiadomość!
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
      <div
        className={
          basic.weddingInfo ? "separateLine whiteLine" : "separateLine"
        }
      ></div>
      {pakiety.special && (
        <div className="pakiet">
          <h2>{pakiety.special.name}</h2>
          <div className="infoContent">
            {pakiety.special.numberOfImages && (
              <article>
                <TiCamera className="icon" />
                <p>{pakiety.special.numberOfImages}</p>
              </article>
            )}
            {pakiety.special.time && (
              <article>
                <TiTime className="icon" />
                <p>{pakiety.special.time}</p>
              </article>
            )}
            {pakiety.special.place && (
              <article>
                <TiLocation className="icon" />
                <p>{pakiety.special.place}</p>
              </article>
            )}
            {pakiety.special.quality && (
              <article>
                <MdOutlinePhotoSizeSelectLarge className="icon" />
                <p>{pakiety.special.quality}</p>
              </article>
            )}
            {pakiety.special.webGallery && (
              <article>
                <MdOutlineTravelExplore className="icon" />
                <p>{pakiety.special.webGallery}</p>
              </article>
            )}
            {pakiety.special.album && (
              <article>
                <BiPhotoAlbum className="icon" />
                <p>{pakiety.special.album}</p>
              </article>
            )}
            {pakiety.special.price && (
              <article>
                <FaMoneyBillWave className="icon" />
                <p>{pakiety.special.price}</p>
              </article>
            )}
            {pakiety.special.extraImg && (
              <article>
                <RiImageAddLine className="icon" />
                <p>{pakiety.special.extraImg}</p>
              </article>
            )}
            {pakiety.special.drive && (
              <article>
                <FaCarAlt className="icon" />
                <p>{pakiety.special.drive}</p>
              </article>
            )}
            {pakiety.special.ready && (
              <article>
                <GiConfirmed className="icon" />
                <p>{pakiety.special.ready}</p>
              </article>
            )}
          </div>
        </div>
      )}
      {premium && (
        <div
          className={basic.weddingInfo ? "pakiet weedingContainer" : "pakiet"}
        >
          <h2>{premium.name}</h2>
          <div className="infoContent">
            {premium.numberOfImages && (
              <article>
                <TiCamera className="icon" />
                <p>{premium.numberOfImages}</p>
              </article>
            )}
            {premium.time && (
              <article>
                <TiTime className="icon" />
                <p>{premium.time}</p>
              </article>
            )}
            {premium.place && (
              <article>
                <TiLocation className="icon" />
                <p>{premium.place}</p>
              </article>
            )}
            {premium.quality && (
              <article>
                <MdOutlinePhotoSizeSelectLarge className="icon" />
                <p>{premium.quality}</p>
              </article>
            )}
            {premium.webGallery && (
              <article>
                <MdOutlineTravelExplore className="icon" />
                <p>{premium.webGallery}</p>
              </article>
            )}
            {premium.album && (
              <article>
                <BiPhotoAlbum className="icon" />
                <p>{premium.album}</p>
              </article>
            )}
            {premium.price && (
              <article>
                <FaMoneyBillWave className="icon" />
                <p>{premium.price}</p>
              </article>
            )}
            {premium.extraImg && (
              <article>
                <RiImageAddLine className="icon" />
                <p>{premium.extraImg}</p>
              </article>
            )}
            {premium.drive && (
              <article>
                <FaCarAlt className="icon" />
                <p>{premium.drive}</p>
              </article>
            )}
            {premium.ready && (
              <article>
                <GiConfirmed className="icon" />
                <p>{premium.ready}</p>
              </article>
            )}
          </div>
          {premium.weddingInfo && (
            <div className="weedingPakiet">
              <h4>{premium.weddingInfo}</h4>
              <Link href="/kontakt">
                <button className="button">Wyśli do mnie wiadomość!</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10vh auto 10vh;
  flex-wrap: wrap;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  .videoContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    filter: sepia(0.5);
  }

  .separateLine {
    height: 50vh;
    width: 2px;
    background: var(--secondaryColor3);
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .whiteLine {
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .pakiet {
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 10vh;
    @media screen and (max-width: 800px) {
      width: 95%;
      margin: 0 auto 10vh;
    }
    img {
      position: absolute;
      bottom: 0;
      right: 5%;
      width: 15%;
      opacity: 0.6;
    }
    h2 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 4vh;
    }
    .infoContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 25%;
      @media screen and (max-width: 800px) {
        margin: 0 auto 0 1vw;
      }
      article {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2.5vh;
        @media screen and (max-width: 800px) {
          margin-bottom: 1vh;
          align-items: flex-start;
          width: 90%;
          justify-content: flex-start;
        }
        p {
          font-size: 1.2rem;
        }
        .icon {
          font-size: 1.5rem;
          color: var(--secondaryColor);
          margin-right: 15px;
          flex-shrink: 0;
        }
      }
    }
  }
  .weedingContainer {
    background: rgba(0, 0, 0, 0.5);
    width: 50%;
    height: 100%;
    @media screen and (max-width: 800px) {
      width: 100%;
      height: 50%;
      margin: 0 auto 0vh;
    }
    h2 {
      color: white;
      text-transform: uppercase;
      font-size: 2rem;
      @media screen and (max-width: 800px) {
        font-size: 1.8rem;
        margin: -5vh auto 0vh;
      }
    }
  }
  .weedingPakiet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: #fff;
    h4 {
      font-size: 1.5rem;
      margin-top: 10vh;
      text-align: center;
      font-weight: 500;
      @media screen and (max-width: 800px) {
        margin-top: 2vh;
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 800px) {
      .buttonWedding {
        display: none;
      }
    }
  }
  .button {
    position: relative;
    margin: 5vh auto 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: var(--titleFont);
    text-transform: uppercase;
    padding: 10px 10px;
    font-weight: 600;
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
    @media screen and (max-width: 800px) {
      margin: 10vh auto 7vh;
    }
  }
`;

export default PakietSingleOffer;
