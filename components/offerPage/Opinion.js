import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { TiHeartOutline } from "react-icons/ti";

const opinions = [
  {
    id: 1,
    text: "Przed sesją byłam lekko przerażona bo nigdy nie miałam sesji zdjęciowej z fotografem ale zupełnie niepotrzebnie. Sylwia to taki człowiek przy którym od pierwszego uśmiechu i spojrzenia w oczy wiesz że nic ci nie grozi i że będzie dobrze.  Bije od niej tak niesamowite ciepło i to też pokazuje na swoich zdjęciach. Bez zadęcia, na luzie z uśmiechem, rozmowami pomiędzy ujęciami tak potrafi wyluzować osobę przed obiektywem że zdjęcia mimo że może człowiek na początku spięty wychodzą magiczne. Dlatego z całego serca polecam jak dla mnie 100/10 😍",
    author: "Nina Słupek",
  },
  {
    id: 2,
    text: "Idealny Fotograf!!! Z ogromną pasją ! Zdjęcia są cudowne :) Wszystkim tym, którzy oczekują spektakularnego efektu, profesjonalnej pamiątki i obsługi na najwyższym poziomie polecam !!!",
    author: "Karolina Prokop",
  },
  {
    id: 3,
    text: "Nie ma słów by opisać jak piękne zdjęcia otrzymaliśmy od Sylwii ❤ Dodatkowo taka osoba jak Ona jest idealnym fotografem w każdym calu 🥰 tworzy świetną atmosferę dzięki czemu i my i goście krępowaliśmy się zdjęć znacznie mniej 😀 Ponadto ma tak wspaniałe i kreatywne pomysły, tworzy cuda 😍 Byliśmy zachwyceni podczas przyjęcia i ceremonii i jesteśmy zachwyceni oglądając zdjęcia 😍 Serdecznie polecamy każdemu i z całego serca dziękujemy ❤❤❤❤",
    author: "Ewelina Bryk-Kumorek",
  },
];

const Opinion = () => {
  return (
    <Wrapper>
      <div className="horizontalLine">
        <div className="oneLine"></div>
        <span>
          <TiHeartOutline />
        </span>
        <div className="oneLine"></div>
      </div>
      <Carousel
        className="carousel"
        infinite
        autoPlay={5000}
        animationSpeed={1000}
        slidesPerPage={1}
        addArrowClickHandler
        stopAutoPlayOnHover
        arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
        arrowRight={<IoIosArrowDroprightCircle className="arrow arrowRight" />}
      >
        {opinions.map((opinion) => {
          const { id, text, author } = opinion;
          return (
            <div key={id} className="oneOpinion">
              <p>{text}</p>
              <span className="shortLine"></span>
              <h5>{author}</h5>
            </div>
          );
        })}
      </Carousel>
      <div className="horizontalLine2"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  margin: 10vh auto;
  .horizontalLine2 {
    width: 100vw;
    height: 2px;
    background: #ddd;
  }
  .horizontalLine {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .oneLine {
      width: 45vw;
      height: 2px;
      background: #ddd;
    }
    span {
      width: 50px;
      height: 50px;
      background-color: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border-radius: 50%;
      font-size: 1.5rem;
      transition: 0.4s;
    }
  }
  .carousel {
    width: 100vw;
    margin: 10vh auto;
    @media screen and (max-width: 800px) {
      margin: 2vh auto;
    }
    .oneOpinion {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 60vw;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
      p {
        font-size: 1.2rem;
        text-align: center;
        line-height: 1.5;
      }
      .shortLine {
        width: 100px;
        height: 2px;
        background: var(--secondaryColor);
        margin: 5vh auto;
      }
      h5 {
        font-size: 1.1rem;
        font-family: var(--titleFont);
        color: #999;
        font-weight: 600;
      }
    }
  }
  :hover span {
    background-color: var(--secondaryColor);
  }
  .arrow {
    font-size: 2rem;
    color: var(--secondaryColor);
    @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
`;

export default Opinion;
