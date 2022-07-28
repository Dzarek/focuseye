import styled from "styled-components";
import { offers } from "../../public/data";

const OneOffer = (props) => {
  // const offer = oneOffer;
  // const { imgs, title } = offer;
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
      <section className="longInfo">
        <p>{text}</p>
        <p>
          Sesje dobrze jest wykonać na przełomie 7/8 miesiąca ciąży, kiedy
          brzuszek jest już ładnie zaokrąglony Na dzień przed sesją przede
          wszystkim odpocznij, wyśpij się, a kilka dni wcześniej możesz
          zafundować swojej cerze peeling enzymatyczny (jeśli już taki robiłaś w
          czasie ciąży). Jeżeli masz dylemat w co się ubrać to podeślij mi swoje
          propozycje, pomogę Ci w doborze garderoby. Od siebie dodam, że
          świetnie sprawdzają się sukienki podkreślające brzuszek lub jeansowe
          ogrodniczki, fajnie też prezentują się krótkie bluzki lub topy
          odkrywające ciążowy brzuszek i jeansy do tego Warto założyć białą lub
          cielistą bieliznę pod sukienkę. Jeśli na sesji będzie Twój mąż to
          idźcie w jeden styl, np. elegancki, sielankowy lub sportowy.
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
          łatwiej będzie nam pracować już w trakcie sesji
        </p>
      </section>
      <section className="shortInfo"></section>
      <section className="smallGallery"></section>
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
  .longInfo {
    width: 70vw;
    margin: 15vh auto;
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 3vh;
      /* text-align: justify; */
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
