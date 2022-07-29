import styled from "styled-components";
import { TiCamera, TiTime, TiLocation } from "react-icons/ti";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { FaMoneyBillWave, FaCarAlt } from "react-icons/fa";
import { RiImageAddLine } from "react-icons/ri";
import { BiPhotoAlbum } from "react-icons/bi";

const ciazaGrafika2 = "../images/ofertaImg/singleOffer/ciazaGrafika2.png";
const ciazaGrafika3 = "../images/ofertaImg/singleOffer/ciazaGrafika3.png";

const PakietSingleOffer = () => {
  return (
    <Wrapper>
      <div className="pakiet basic">
        <h2>Pakiet BASIC - w sam raz na początek</h2>
        <img src={ciazaGrafika2} alt="" />
        <div className="infoContent">
          <article>
            <TiCamera className="icon" />
            <p>15 zdjęć elektronicznych i papierowych w rozmiarze 15x23 cm</p>
          </article>
          <article>
            <TiTime className="icon" />
            <p>czas: 1h</p>
          </article>
          <article>
            <TiLocation className="icon" />
            <p>miejsce: plener lub dom</p>
          </article>
          <article>
            <MdOutlinePhotoSizeSelectLarge className="icon" />
            <p>rozdzielczość: pełna + wersja pod publikację w Internecie</p>
          </article>
          <article>
            <FaMoneyBillWave className="icon" />
            <p>inwestujesz: 500 zł</p>
          </article>
          <article>
            <RiImageAddLine className="icon" />
            <p>dodatkowe ujęcie: 35 zł/szt</p>
          </article>
          <article>
            <FaCarAlt className="icon" />
            <p>dojazd powyżej 20 km od Tuchowa: 1zł/1km</p>
          </article>
          <article>
            <BiPhotoAlbum className="icon" />
            <p>gotowe zdjęcia: do 3 tygodni</p>
          </article>
        </div>
      </div>
      <div className="separateLine"></div>
      <div className="pakiet pro">
        <img src={ciazaGrafika3} alt="" />
        <h2>Pakiet PRO - wszystko czego potrzebujesz</h2>
        <div className="infoContent">
          <article>
            <TiCamera className="icon" />
            <p>30 zdjęć elektronicznych i papierowych w rozmiarze 15x23 cm</p>
          </article>
          <article>
            <TiTime className="icon" />
            <p>czas: 1-1,5h</p>
          </article>
          <article>
            <TiLocation className="icon" />
            <p>miejsce: plener lub dom</p>
          </article>
          <article>
            <MdOutlinePhotoSizeSelectLarge className="icon" />
            <p>rozdzielczość: pełna + wersja pod publikację w Internecie</p>
          </article>
          <article>
            <FaMoneyBillWave className="icon" />
            <p>inwestujesz: 800 zł</p>
          </article>
          <article>
            <RiImageAddLine className="icon" />
            <p>dodatkowe ujęcie: 30 zł/szt</p>
          </article>
          <article>
            <FaCarAlt className="icon" />
            <p>dojazd powyżej 20 km od Tuchowa: 1zł/1km</p>
          </article>
          <article>
            <BiPhotoAlbum className="icon" />
            <p>gotowe zdjęcia: do 3 tygodni</p>
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

  .separateLine {
    height: 50vh;
    width: 2px;
    background: var(--secondaryColor3);
  }
  .pakiet {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      position: absolute;
      bottom: 0;
      right: 10%;
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
