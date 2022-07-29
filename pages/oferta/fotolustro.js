import styled from "styled-components";
import Link from "next/link";
import { IoChevronBackCircle } from "react-icons/io5";

const mirrorHeader = "../images/ofertaImg/fotolustro/fotolustro4.jpg";
const mirrorImg1 = "../images/ofertaImg/fotolustro/fotolustro3.jpg";
const mirrorImg2 = "../images/ofertaImg/fotolustro/fotolustro5.jpg";
const mirrorImg3 = "../images/ofertaImg/fotolustro/fotolustro1.jpg";

const Fotolustro = () => {
  return (
    <Wrapper>
      <header>
        <h2>Fotolustro</h2>
      </header>
      <section className="info">
        <div className="text">
          <h3>Co to jest?</h3>
          <p>
            Fotolustro to unowocześniona wersja klasycznej fotobudki z dużym
            lustrem na frontowej ścianie. <br /> Lustro jest dotykowe, pozwala
            na wchodzenie w interakcję uczestnikom zabawy, można je dotykać i
            dokonywać wyborów, można po nim rysować, podpisywać zdjęcia.
            <br />
            Fotolustro to idealny pomysł na imprezową atrakcję PREMIUM -
            nowoczesna pamiątka, świetna zabawa!
          </p>
          <h3>Jak działa magia?</h3>
          <p>
            Obsługa urządzenia to sama przyjemność. <br /> Podczas pracy
            fotolustra uczestnicy zabawy widzą swoje odbicia w lustrze, a z
            głośników rozlega się dźwięk lektora wydającego instrukcje zabawy
            np. odliczanie do kolejnego ujęcia. <br /> Zza dotykowego lustra -
            niejako na tafli lustra - widać magicznie wyświetlane animacje.{" "}
            <br /> Wystarczy kilka przesunięć palcem po lustrze i zdjęcie
            gotowe!
          </p>
        </div>
        <div className="images">
          <img src={mirrorImg1} alt="fotolustro 1" />
          <img src={mirrorImg2} alt="fotolustro 2" />
          <img src={mirrorImg3} alt="fotolustro 3" />
        </div>
      </section>
      <section className="pakietyWrapper">
        <h2>Pakiety</h2>
        <div className="pakietyMirror">
          <div className="onePakiet">
            <div className="pakietTitle">
              <h3>ZWIERCIADEŁKO</h3>
              <h5>do 2h, zalecane do 60 gości</h5>
              <ul>
                <li>nielimitowana ilość zdjęć</li>
                <li>różne układy zdjęć</li>
                <li>zabawne gadżety</li>
                <li>personalizowana grafika wydruków</li>
                <li>
                  tła graficzne do wyboru z przeznaczeniem pod Twoją imprezę
                </li>
                <li>asystent do pomocy</li>
                <li>podpisywanie zdjęć palcem na lustrze</li>
                <li>dojazd do 30 km od Tuchowa Gratis</li>
              </ul>
            </div>

            <span>700 zł</span>
          </div>
          <div className="separateLine"></div>
          <div className="onePakiet">
            <div className="pakietTitle">
              <h3>ZWIERCIADŁO</h3>
              <h5>do 3h, zalecane do 150 gości</h5>
              <ul>
                <li>nielimitowana ilość zdjęć</li>
                <li>różne układy zdjęć</li>
                <li>zabawne gadżety</li>
                <li>personalizowana grafika wydruków</li>
                <li>
                  tła graficzne do wyboru z przeznaczeniem pod Twoją imprezę
                </li>
                <li>asystent do pomocy</li>
                <li>podpisywanie zdjęć palcem na lustrze</li>
                <li>galeria internetowa dla gości</li>
                <li>album do wklejania zdjęć</li>
                <li>dojazd do 50 km od Tuchowa Gratis</li>
              </ul>
            </div>

            <span>900 zł</span>
          </div>
          <div className="separateLine"></div>
          <div className="onePakiet">
            <div className="pakietTitle">
              <h3>LUSTRO</h3>
              <h5>do 4h, zalecane do 250 gości</h5>
              <ul>
                <li>nielimitowana ilość zdjęć</li>
                <li>różne układy zdjęć</li>
                <li>zabawne gadżety</li>
                <li>personalizowana grafika wydruków</li>
                <li>
                  tła graficzne do wyboru z przeznaczeniem pod Twoją imprezę
                </li>
                <li>asystent do pomocy</li>
                <li>podpisywanie zdjęć palcem na lustrze</li>
                <li>galeria internetowa dla gości</li>
                <li>album do wklejania zdjęć</li>
                <li>dojazd do 50 km od Tuchowa Gratis</li>
              </ul>
            </div>

            <span>1100 zł</span>
          </div>
        </div>
      </section>
      <Link href="/oferta">
        <button className="backToBlog">
          <IoChevronBackCircle className="icon" />
          powrót do listy ofert
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 12vh;
  header {
    height: 70vh;
    width: 100vw;
    background-image: url(${mirrorHeader});
    background-size: cover;
    background-position: top;
    position: relative;
    margin-bottom: -10vh;
    h2 {
      color: white;
      text-transform: uppercase;
      font-size: 4rem;
      position: absolute;
      top: 60%;
      left: 10%;
    }
  }
  h3 {
    font-size: 2rem;
    color: var(--secondaryColor);
    margin-bottom: 5vh;
    margin-top: 10vh;
    text-align: left;
  }
  .info {
    width: 80vw;
    margin: 10vh auto 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .text {
      width: 60%;
      p {
        font-size: 1.2rem;
        line-height: 1.4;
      }
    }
    .images {
      width: 35%;
      position: relative;
      height: 50vh;
      img {
        width: 35%;
        position: absolute;
        box-shadow: 1px 1px 5px 1px black;
        :nth-child(1) {
          top: 10%;
          left: 60%;
        }
        :nth-child(2) {
          top: 75%;
          left: 20%;
        }
        :nth-child(3) {
          top: 0%;
          left: 10%;
        }
      }
    }
  }
  .pakietyWrapper {
    width: 100vw;
    /* background: var(--sectionBgColor); */
    padding-top: 5vh;
    h2 {
      text-transform: uppercase;
      margin: 3vh auto 0;
      text-align: center;
      font-size: 3rem;
      color: var(--secondaryColor3);
    }
  }
  .separateLine {
    height: 80vh;
    width: 2px;
    background: var(--secondaryColor3);
    align-self: center;
  }
  .pakietyMirror {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 5vh auto 10vh;
    .onePakiet {
      padding-bottom: 5vh;
      width: 33.33%;
      height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      :nth-child(1) {
        background: var(--aboutMeHeaderBgColor);
      }
      :nth-child(3) {
        background: var(--sectionBgColor);
      }
      :nth-child(5) {
        background: var(--contactHeaderBgColor);
      }
      .pakietTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
          font-size: 1.8rem;
          font-family: var(--titleFont);
          font-weight: 600;
          margin-bottom: 1vh;
        }
        h5 {
          margin-bottom: 4vh;
          font-size: 1.1rem;
          font-family: var(--titleFont);
          font-weight: 500;
        }
      }
      li {
        margin-bottom: 1vh;
        font-size: 1.1rem;
      }
      span {
        color: var(--secondaryColor3);
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }
  .backToBlog {
    position: relative;
    margin: 15vh auto 10vh;
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
`;

export default Fotolustro;
