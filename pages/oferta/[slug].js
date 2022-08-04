import Link from "next/link";
import styled from "styled-components";
import { offers } from "../../public/data";
import { SRLWrapper } from "simple-react-lightbox";
import PakietSingleOffer from "../../components/offerPage/PakietSingleOffer";
import Opinion from "../../components/offerPage/Opinion";
import { IoChevronBackCircle } from "react-icons/io5";

const OneOffer = (props) => {
  const {
    title,
    headerImg,
    graphic,
    longDescription,
    smallGallery,
    pakiety,
    category,
  } = props;

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

  return (
    <Wrapper>
      <header className="headerTitle" style={{ overflow: "hidden" }}>
        <div
          className="headerBg"
          style={{
            backgroundImage: `url(${headerImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            animation: "singleOfferHeader 5s linear 1 forwards",
            width: "100vw",
            height: "80vh",
            filter: "brightness(0.8)",
          }}
        ></div>
        <div className="title">
          <h2>{title}</h2>
        </div>
      </header>
      {category === "brzuszkowe" ? (
        <div className="infoAndGraphic">
          <section className="longInfo">
            {longDescription.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
          </section>
          <img src={graphic[0]} alt="grafika" />
        </div>
      ) : (
        <div className="infoAndGraphic2">
          <img src={graphic[0]} alt="grafika" />
          <section className="longInfo">
            {longDescription.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
          </section>
          <img src={graphic[1]} alt="grafika" />
        </div>
      )}
      <SRLWrapper>
        <section className="smallGallery">
          {smallGallery.map((image, index) => {
            return <img key={index} src={image} />;
          })}
        </section>
      </SRLWrapper>
      <PakietSingleOffer pakiety={pakiety} />
      <h3 className="cennik">Powyższy cennik obowiązuje od 01.08.2022 r.</h3>
      <Opinion />
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
    width: 80vw;
    margin: 15vh auto 10vh;
    img {
      width: 25%;
      opacity: 0.8;
      margin-bottom: -10vh;
    }
    .longInfo {
      width: 70%;
      p {
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 3vh;
      }
    }
  }
  .infoAndGraphic2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    margin: 20vh auto;
    img {
      width: 12%;
      opacity: 0.8;
      margin-bottom: -10vh;
    }
    .longInfo {
      width: 60%;
      margin-top: -10vh;
      p {
        text-align: center;
        font-size: 1.4rem;
        line-height: 2;
        /* margin-bottom: 3vh; */
      }
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
  .backToBlog {
    position: relative;
    margin: 10vh auto 10vh;
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

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const oneOffer = offers.find((item) => item.slug === slug);
  const {
    title,
    imgs,
    graphic,
    longDescription,
    smallGallery,
    pakiety,
    category,
  } = oneOffer;
  const headerImg = imgs[1];
  return {
    props: {
      headerImg,
      title,
      graphic,
      longDescription,
      smallGallery,
      pakiety,
      category,
    },
    revalidate: 30,
  };
};
export const getStaticPaths = async () => {
  const paths = offers.map((offer) => ({
    params: { slug: offer.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default OneOffer;