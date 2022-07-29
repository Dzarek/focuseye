import styled from "styled-components";
import { offers } from "../../public/data";
import { SRLWrapper } from "simple-react-lightbox";
import PakietSingleOffer from "../../components/offerPage/PakietSingleOffer";

const rodzinaGrafika = "../images/ofertaImg/singleOffer/rodzinaGrafika.png";
const zakochaniGrafika = "../images/ofertaImg/singleOffer/zakochaniGrafika.png";
const ciazaGrafika = "../images/ofertaImg/singleOffer/ciazaGrafika.png";
const noworodekGrafika = "../images/ofertaImg/singleOffer/noworodekGrafika.png";
const slubGrafika = "../images/ofertaImg/singleOffer/slubGrafika.png";
const chrzcinyGrafika = "../images/ofertaImg/singleOffer/chrzcinyGrafika.png";

const ciaza1 = "../images/gallery/ciazowe/1.jpg";
const ciaza2 = "../images/gallery/ciazowe/8.jpg";
const ciaza3 = "../images/gallery/ciazowe/19.jpg";
const ciaza4 = "../images/gallery/ciazowe/11.jpg";
const ciaza5 = "../images/ofertaImg/singleOffer/ciaza/poradnikCiaza1.jpg";
const ciaza6 = "../images/ofertaImg/singleOffer/ciaza/poradnikCiaza2.jpg";
const ciaza7 = "../images/ofertaImg/singleOffer/ciaza/poradnikCiaza3.jpg";
const ciaza8 = "../images/ofertaImg/singleOffer/ciaza/poradnikCiaza4.jpg";

const OneOffer = (props) => {
  // const offer = oneOffer;
  // const { imgs, title } = offer;
  const smallGallery = [
    ciaza1,
    ciaza2,
    ciaza3,
    ciaza4,
    ciaza5,
    ciaza6,
    ciaza7,
    ciaza8,
  ];
  const { title, headerImg } = props;
  if (!title) {
    return (
      <Wrapper>
        {" "}
        <header className="headerTitle">
          <div className="title">
            <h2>Loading...</h2>
          </div>
        </header>
      </Wrapper>
    );
  }

  const text =
    "To jest ten moment! Przyznasz, że duma z rosnącego brzuszka zachęca do fotografowania go każdego dnia? Też tak miałam <3 Łap więc kilka porad przed sesją ciążową!";

  return (
    <Wrapper>
      <header className="headerTitle" style={{ overflow: "hidden" }}>
        <div
          className="headerBg"
          style={{
            backgroundImage: `url(${headerImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            animation: "singleOfferHeader 7s linear 1 forwards",
            width: "100vw",
            height: "80vh",
            filter: "brightness(0.8)",
          }}
        ></div>
        <div className="title">
          <h2>{title}</h2>
        </div>
      </header>
      <div className="infoAndGraphic">
        <section className="longInfo">
          <p>{text}</p>
          <p>
            Sesje dobrze jest wykonać na przełomie 7/8 miesiąca ciąży, kiedy
            brzuszek jest już ładnie zaokrąglony Na dzień przed sesją przede
            wszystkim odpocznij, wyśpij się, a kilka dni wcześniej możesz
            zafundować swojej cerze peeling enzymatyczny (jeśli już taki robiłaś
            w czasie ciąży). Jeżeli masz dylemat w co się ubrać to podeślij mi
            swoje propozycje, pomogę Ci w doborze garderoby. Od siebie dodam, że
            świetnie sprawdzają się sukienki podkreślające brzuszek lub jeansowe
            ogrodniczki, fajnie też prezentują się krótkie bluzki lub topy
            odkrywające ciążowy brzuszek i jeansy do tego Warto założyć białą
            lub cielistą bieliznę pod sukienkę. Jeśli na sesji będzie Twój mąż
            to idźcie w jeden styl, np. elegancki, sielankowy lub sportowy.
          </p>
          <p>
            Na sesje zabierz tylko najpotrzebniejsze rzeczy, tj. szczotka do
            włosów, sukienka na przebranie, coś na komary i kleszcze, małą wodę.
            Możesz też zabrać dodatki tj. kapelusz (ja też zawsze mam go przy
            sobie ;p), wianek, buciki dla dziecka lub drobną zabawkę. Jeśli masz
            ochotę możesz umówić się do swojej kosmetyczki na makijaż.
          </p>
          <p>
            Spotykamy się maksymalnie 1,5 h przed zachodem słońca. Sesje w zimie
            wykonuję w zaciszu Twojego domu w godzinach 10-13.
          </p>
          <p>
            Zerknij jak ułożyć ciążowy brzuszek, poćwicz w domu przed lustrem,
            sama lub z drugą połówką. Pamiętaj by być wyprostowaną i ściągać
            łopatki. Zawsze przypominam o tym na sesji, ale ćwicząc w domu pozy
            łatwiej będzie nam pracować już w trakcie sesji.
          </p>
        </section>
        <img src={ciazaGrafika} alt="" />
      </div>
      <SRLWrapper>
        <section className="smallGallery">
          {smallGallery.map((image, index) => {
            return <img key={index} src={image} />;
          })}
        </section>
      </SRLWrapper>
      <PakietSingleOffer />
      <h3 className="cennik">Powyższy cennik obowiązuje od 01.08.2022 r.</h3>
      <section className="opinion"></section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  .cennik {
    text-align: center;
    margin-bottom: 10vh;
  }
  header {
    position: relative;
    width: 100vw;
    height: 80vh;
    /* margin-top: 2vh; */
    overflow: "hidden";

    .title {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      padding: 5px 0;
      /* background: var(--singleOfferTitle); */
      h2 {
        font-weight: 800;
        letter-spacing: 5px;
        font-size: 3.2rem;
        color: #fff;
        font-family: var(--textFont);
        text-shadow: 3px 3px 3px black;
      }
    }
  }
  .infoAndGraphic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 15vh auto 10vh;
    img {
      width: 25%;
      opacity: 0.8;
    }
  }
  .longInfo {
    width: 70%;
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 3vh;
      /* text-align: justify; */
    }
  }
  .smallGallery {
    display: flex;
    width: 100vw;
    margin: 10vh auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: var(--sectionBgColor);
    padding: 5vh 5vw;
    img {
      margin-bottom: 5vh;
      margin-top: 5vh;
      width: 22%;
      cursor: pointer;
    }
  }
`;

export const getStaticProps = async (context) => {
  const category = context.params.category;
  const oneOffer = offers.find((item) => item.category === category);
  const { title, imgs } = oneOffer;
  const headerImg = imgs[1];
  return {
    props: {
      headerImg,
      title,
    },
    revalidate: 30,
  };
};
export const getStaticPaths = async () => {
  const paths = offers.map((offer) => ({
    params: { category: offer.category },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default OneOffer;
