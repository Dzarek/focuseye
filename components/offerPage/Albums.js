import styled from "styled-components";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoEnterOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const coversStandard = "/images/ofertaImg/albums/okładkiStandard.jpg";
const coversEcovelvet = "/images/ofertaImg/albums/okładkiEcovelvet.jpg";
const albumImg1 = "/images/ofertaImg/albums/album1.jpg";
const albumImg2 = "/images/ofertaImg/albums/album2.jpg";
const albumImg3 = "/images/ofertaImg/albums/album3.jpg";
const albumImg4 = "/images/ofertaImg/albums/album4.jpg";
const albumImg5 = "/images/ofertaImg/albums/album5.jpg";
const crystalAlbums = "/images/ofertaImg/albums/crystalAlbums.png";

const Albums = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <h2>Albumy</h2>
      <Carousel
        className="carousel"
        infinite
        draggable={false}
        autoPlay={5000}
        animationSpeed={1000}
        slidesPerPage={1}
        addArrowClickHandler
        stopAutoPlayOnHover
        arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
        arrowRight={<IoIosArrowDroprightCircle className="arrow arrowRight" />}
      >
        <section className="albumsAndCovers">
          <div className="oneAlbum">
            <h3>Album tradycyjny do wyklejania zdjęć</h3>
            <div className="oneAlbumContent">
              <div className="info">
                <ul>
                  <li>- czarne karty przełożone białym pergaminem,</li>
                  <li>
                    - album nie zawiera w cenie odbitek papierowych oraz
                    przylepców do zdjęć,
                  </li>
                  <li>- czas realizacji 8-14 dni roboczych,</li>
                  <h5>Dodatki:</h5>
                  <li>
                    - grawerowanie (napis lub grafika z przodu lub z tyłu
                    okładki): 25 zł
                  </li>
                  <li>
                    - tłoczenie na złoto (dotyczy jednej linijki tekstu): 30 zł
                  </li>
                </ul>
              </div>
              <div className="table">
                <p>Objętość:</p>
                <p>25 x 25 cm</p>
                <p>20 kart (40 stron)</p>
                <p>140 zł</p>
                <p>30 kart (60 stron)</p>
                <p>160 zł</p>
                <p>40 kart (80 stron)</p>
                <p>180 zł</p>
                <p>50 kart (100 stron)</p>
                <p>200 zł</p>
                <h4>Interesuje Cię większy rozmiar? Zapytaj o szczegóły!</h4>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1PvyfEHDFwzFFs2D7EfX-9JtSKsk09mUo/view"
            target="_blank"
            rel="noopener noreferrer"
            className="covers crystalAlbums"
          >
            <h3>wzorniki opraw</h3>
            <IoEnterOutline />
          </a>
        </section>
        <section className="albumsAndCovers">
          <div className="oneAlbum2">
            <h3>Fotoalbum</h3>
            <div className="oneAlbumContent">
              <div className="info ">
                <ul>
                  <li>- czas realizacji 8-14 dni roboczych,</li>
                  <h5>Dodatki:</h5>
                  <li>
                    - grawerowanie (napis lub grafika z przodu lub z tyłu
                    okładki): 25 zł
                  </li>
                  <li>
                    - tłoczenie na złoto (dotyczy jednej linijki tekstu): 30 zł
                  </li>
                  <li>
                    - rozbiegówki (czyste karty na początku i na końcu): w cenie
                    następnej karty
                  </li>
                </ul>
              </div>
              <div className="table2">
                <p>Objętość:</p>
                <p>20 x 20 cm</p>
                <p>25 x 25 cm</p>
                <p>10 kart (20 stron)</p>
                <p>330 zł</p>
                <p>380 zł</p>
                <p>następna karta</p>
                <p>12 zł</p>
                <p>16 zł</p>
                <h4>Interesuje Cię większy rozmiar? Zapytaj o szczegóły!</h4>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1PvyfEHDFwzFFs2D7EfX-9JtSKsk09mUo/view"
            target="_blank"
            rel="noopener noreferrer"
            className="covers crystalAlbums"
          >
            <h3>wzorniki opraw</h3>
            <IoEnterOutline />
          </a>
        </section>
        <section className="albumsAndCovers">
          <div className="oneAlbum3">
            <div className="oneSection">
              <h3>Album Eko (malutka książeczka)</h3>
              <div className="oneAlbumContent">
                <div className="table">
                  <p>Objętość:</p>
                  <p>20 x 20 cm</p>
                  <p>5 rozkładówek</p>
                  <p>80 zł</p>
                  <p>10 rozkładówek</p>
                  <p>120 zł</p>
                </div>
              </div>
            </div>
            <div className="oneSection">
              <h3>Wyjątkowy kieszonkowy albumik</h3>
              <div className="oneAlbumContent">
                <div className="table">
                  <p>Objętość:</p>
                  <p>15 x 15 cm</p>
                  <p>5 rozkładówek</p>
                  <p>120 zł</p>
                </div>
              </div>
            </div>
            <div className="info">
              <ul>
                <h5>
                  Idealny na prezent dla dziadków i najbliższych przyjaciół
                  rodziny.
                </h5>
                <li>- okładka płócienna / eco velvet ze złotym serduszkiem,</li>
                <li>
                  - brak rozbiegówek (kontrokładek) - pierwsza i ostatnia strona
                  przylega do okładki.
                </li>
              </ul>
            </div>
          </div>
          <ReactCompareSlider
            className="covers"
            portrait={true}
            handle={
              <ReactCompareSliderHandle
                portrait={true}
                buttonStyle={{
                  background: "#5a270d",
                  color: "white",
                  transform: "rotate(90deg)",
                  height: "3vw",
                  width: "3vw",
                }}
                linesStyle={{ background: "#5a270d", height: "1px" }}
              />
            }
            itemOne={
              <div className="oneSliderA">
                <h3>Okładki Standard</h3>
                <img className="img1" src={coversStandard} alt="" />
              </div>
            }
            itemTwo={
              <div className="oneSliderB">
                <img className="img2" src={coversEcovelvet} alt="" />
                <h3>Okładki EcoVelvet</h3>
                <p>eco velvet to miziasty materiał</p>
              </div>
            }
          />
        </section>
      </Carousel>
      <SRLWrapper>
        <div className="images">
          <img data-aos="fade-up" src={albumImg1} alt="album 1" />
          <img data-aos="fade-up" src={albumImg2} alt="album 2" />
          <img data-aos="fade-up" src={albumImg3} alt="album 3" />
          <img data-aos="fade-up" src={albumImg4} alt="album 4" />
          <img data-aos="fade-up" src={albumImg5} alt="album 5" />
        </div>
      </SRLWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  width: 100vw;
  min-height: 80vh;
  /* padding: 2vh 12vw; */
  h2 {
    margin-left: 12vw;
    text-transform: uppercase;
    color: var(--secondaryColor);
    font-size: 2rem;
    margin-bottom: 5vh;
  }
  .carousel {
    width: 90vw;
    margin: 0 auto;
    min-height: 55vh;
  }

  .albumsAndCovers {
    width: 80vw;
    margin: 5vh auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .oneAlbum {
      width: 65%;
      min-height: 55vh;
      background: var(--aboutMeBgColor);
      padding: 2vw;
      border: 2px solid var(--secondaryColor3);
      border-radius: 10px;
      h3 {
        color: var(--secondaryColor3);
        font-size: 1.4rem;
        margin: 0 auto 5vh;
        text-align: center;
      }
      .oneAlbumContent {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .table {
          width: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          h4 {
            margin-top: 2vh;
          }
          p {
            background: white;
            padding: 5px 10px;
            font-size: 1rem;
            border: 1px solid var(--primaryColor);
            border-bottom: none;
            font-weight: 500;
            :nth-last-child(2),
            :nth-last-child(3) {
              border-bottom: 1px solid var(--primaryColor);
            }
            :nth-of-type(odd) {
              width: 65%;
            }
            :nth-of-type(even) {
              width: 35%;
              border-left: none;
            }
          }
        }

        .info {
          width: 55%;
          ul {
            list-style: none;
            li {
              font-size: 1.1rem;
              margin-bottom: 1vh;
              display: flex;
              align-items: center;
              font-weight: 500;
              .iconA {
                color: var(--secondaryColor);
                margin-right: 5px;
              }
            }
            h5 {
              margin-top: 3vh;
              margin-bottom: 1vh;
              font-size: 1.2rem;
            }
          }
        }
      }
    }
    .oneAlbum2 {
      width: 65%;
      min-height: 55vh;
      background: var(--aboutMeBgColor);
      padding: 2vw;
      border: 2px solid var(--secondaryColor3);
      border-radius: 10px;
      display: flex;
      flex-direction: column;

      h3 {
        color: var(--secondaryColor3);
        font-size: 1.4rem;
        margin: 0 auto 2vh;
        text-align: center;
      }
      .oneAlbumContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .table2 {
          width: 70%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          h4 {
            margin-top: 2vh;
          }
          p {
            background: white;
            padding: 5px 10px;
            font-size: 1rem;
            border: 1px solid var(--primaryColor);
            border-bottom: none;
            font-weight: 500;
            width: 30%;
            :nth-last-child(2),
            :nth-last-child(3),
            :nth-last-child(4) {
              border-bottom: 1px solid var(--primaryColor);
            }
            :nth-of-type(1),
            :nth-of-type(4),
            :nth-of-type(7) {
              width: 40%;
            }
          }
        }
        .info {
          width: 85%;
          margin-bottom: 1vh;
          ul {
            list-style: none;
            li {
              font-size: 1.1rem;
              margin-bottom: 1vh;
              display: flex;
              align-items: center;
              font-weight: 500;
              .iconA {
                color: var(--secondaryColor);
                margin-right: 5px;
              }
            }
            h5 {
              margin-top: 1vh;
              margin-bottom: 1vh;
              font-size: 1.2rem;
            }
          }
        }
      }
    }
    .oneAlbum3 {
      width: 65%;
      min-height: 55vh;
      background: var(--aboutMeBgColor);
      padding: 2vw;
      border: 2px solid var(--secondaryColor3);
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      .oneSection {
        width: 45%;
      }
      h3 {
        color: var(--secondaryColor3);
        font-size: 1.2rem;
        margin: 0 auto 5vh;
        text-align: center;
      }
      .oneAlbumContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .table {
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          h4 {
            margin-top: 2vh;
          }
          p {
            background: white;
            padding: 5px 10px;
            font-size: 1rem;
            border: 1px solid var(--primaryColor);
            border-bottom: none;
            font-weight: 500;
            width: 40%;
            :nth-last-child(2),
            :nth-last-child(1) {
              border-bottom: 1px solid var(--primaryColor);
            }
            :nth-of-type(1),
            :nth-of-type(3),
            :nth-of-type(5) {
              width: 60%;
            }
          }
        }
      }
      .info {
        width: 85%;
        margin-bottom: 1vh;
        ul {
          list-style: none;
          li {
            font-size: 1.1rem;
            margin-bottom: 1vh;
            display: flex;
            align-items: center;
            font-weight: 500;
            .iconA {
              color: var(--secondaryColor);
              margin-right: 5px;
            }
          }
          h5 {
            margin-top: 1vh;
            margin-bottom: 3vh;
            font-size: 1.2rem;
          }
        }
      }
    }
    .covers {
      width: 27%;
      height: 55vh;
      /* background: var(--aboutMeBgColor); */
      border: 2px solid var(--secondaryColor3);
      border-radius: 10px;
      .oneSliderA {
        width: 100%;
        height: 55vh;
        background: var(--aboutMeBgColor);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
          width: 100%;
          height: 85%;
        }
        h3 {
          margin-top: 2vh;
          text-align: center;
          text-transform: uppercase;
        }
        p {
          text-align: center;
        }
      }
      .oneSliderB {
        width: 100%;
        height: 55vh;
        background: var(--aboutMeBgColor);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
          width: 100%;
          height: 85%;
        }
        h3 {
          text-align: center;
          text-transform: uppercase;
          margin-top: 1vh;
        }
        p {
          text-align: center;
          margin-bottom: 2vh;
        }
      }
    }
    .crystalAlbums {
      background-image: url(${crystalAlbums});
      background-size: cover;
      background-position: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      filter: sepia(0.5);

      h3 {
        text-transform: uppercase;
        color: white;
        font-size: 1.5rem;
        margin-bottom: 5vh;
        font-family: var(--titleFont);
        text-shadow: 1px 1px 1px black;
      }
      svg {
        color: white;
        font-size: 3.5rem;
        transition: 0.4s;
      }
      :hover svg {
        font-size: 4.5rem;
      }
    }
  }

  .images {
    width: 85vw;
    margin: 15vh auto;
    display: flex;
    justify-content: space-between;
    img {
      width: 30vh;
      height: 20vh;
      cursor: pointer;
      :nth-child(even) {
        margin-top: 10vh;
      }
    }
  }
  .arrow {
    font-size: 2.5rem;
    color: var(--secondaryColor3);
  }
`;

export default Albums;
