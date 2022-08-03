import styled from "styled-components";
import { TiCamera, TiTime, TiLocation } from "react-icons/ti";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { FaMoneyBillWave, FaCarAlt } from "react-icons/fa";
import { RiImageAddLine } from "react-icons/ri";
import { BiPhotoAlbum } from "react-icons/bi";

const PakietSingleOffer = ({ pakiety, smallGraphic }) => {
  const { basic, premium } = pakiety;
  console.log(pakiety.special);
  return (
    <Wrapper>
      <div className="pakiet basic">
        <h2>{basic.name}</h2>
        <img src={smallGraphic[0]} alt="" />
        <div className="infoContent">
          <article>
            <TiCamera className="icon" />
            <p>{basic.numberOfImages}</p>
          </article>
          <article>
            <TiTime className="icon" />
            <p>{basic.time}</p>
          </article>
          <article>
            <TiLocation className="icon" />
            <p>{basic.place}</p>
          </article>
          <article>
            <MdOutlinePhotoSizeSelectLarge className="icon" />
            <p>{basic.quality}</p>
          </article>
          <article>
            <FaMoneyBillWave className="icon" />
            <p>{basic.price}</p>
          </article>
          <article>
            <RiImageAddLine className="icon" />
            <p>{basic.extraImg}</p>
          </article>
          <article>
            <FaCarAlt className="icon" />
            <p>{basic.drive}</p>
          </article>
          <article>
            <BiPhotoAlbum className="icon" />
            <p>{basic.ready}</p>
          </article>
        </div>
      </div>
      <div className="separateLine"></div>
      {pakiety.special && (
        <div className="pakiet">
          <img src={smallGraphic[1]} alt="" />
          <h2>{pakiety.special.name}</h2>
          <div className="infoContent">
            <article>
              <TiCamera className="icon" />
              <p>{pakiety.special.numberOfImages}</p>
            </article>
            <article>
              <TiTime className="icon" />
              <p>{premium.time}</p>
            </article>
            <article>
              <TiLocation className="icon" />
              <p>{premium.place}</p>
            </article>
            <article>
              <MdOutlinePhotoSizeSelectLarge className="icon" />
              <p>{premium.quality}</p>
            </article>
            <article>
              <FaMoneyBillWave className="icon" />
              <p>{premium.price}</p>
            </article>
            <article>
              <RiImageAddLine className="icon" />
              <p>{premium.extraImg}</p>
            </article>
            <article>
              <FaCarAlt className="icon" />
              <p>{premium.drive}</p>
            </article>
            <article>
              <BiPhotoAlbum className="icon" />
              <p>{premium.ready}</p>
            </article>
          </div>
        </div>
      )}
      <div className="pakiet pro">
        <img src={smallGraphic[1]} alt="" />
        <h2>{premium.name}</h2>
        <div className="infoContent">
          <article>
            <TiCamera className="icon" />
            <p>{premium.numberOfImages}</p>
          </article>
          <article>
            <TiTime className="icon" />
            <p>{premium.time}</p>
          </article>
          <article>
            <TiLocation className="icon" />
            <p>{premium.place}</p>
          </article>
          <article>
            <MdOutlinePhotoSizeSelectLarge className="icon" />
            <p>{premium.quality}</p>
          </article>
          <article>
            <FaMoneyBillWave className="icon" />
            <p>{premium.price}</p>
          </article>
          <article>
            <RiImageAddLine className="icon" />
            <p>{premium.extraImg}</p>
          </article>
          <article>
            <FaCarAlt className="icon" />
            <p>{premium.drive}</p>
          </article>
          <article>
            <BiPhotoAlbum className="icon" />
            <p>{premium.ready}</p>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10vh auto;
  flex-wrap: wrap;

  .separateLine {
    height: 50vh;
    width: 2px;
    background: var(--secondaryColor3);
  }
  .pakiet {
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 7vh;

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
      article {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2.5vh;
        p {
          font-size: 1.2rem;
        }
        .icon {
          font-size: 1.5rem;
          color: var(--secondaryColor);
          margin-right: 15px;
        }
      }
    }
  }
`;

export default PakietSingleOffer;
