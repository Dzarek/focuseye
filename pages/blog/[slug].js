import styled from "styled-components";
import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";
import { IoChevronBackCircle } from "react-icons/io5";
import Head from "next/head";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../components/context";

const SingleArticleBlog = () => {
  const { blogWP, isLoading } = useGlobalContext();
  const router = useRouter();
  const slug = router.query.slug;
  if (!slug || !blogWP) {
    return <Loading />;
  }
  const oneArticle = blogWP.filter((article) => article.slug === slug);
  const { title, date, text, images, headerimg, bgimg } = oneArticle[0].acf;
  const textWP = Object.values(text);
  const imagesWP = Object.values(images);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>FocusEye | Blog</title>
        <meta
          name="description"
          content="Artykuły na temat fotografii i sesji zdjęciowych."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper>
        <div
          className="bgArticle"
          style={{
            background: `url(${bgimg && bgimg})`,
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            filter: "saturate(0.5) brightness(0.7)",
          }}
        ></div>
        <div className="articleContainer">
          <div className="titleContainer">
            <h1>
              {title && title}
              <span>Data publikacji: {date && date}</span>
            </h1>
            <img src={headerimg && headerimg} alt="title" />
          </div>
          <div className="separateLine"></div>
          {textWP && (
            <section className="infoContent">
              {textWP.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </section>
          )}
          <SRLWrapper>
            {imagesWP && (
              <section className="images">
                {imagesWP.map((img, index) => {
                  return <img key={index} src={img} alt="" />;
                })}
              </section>
            )}
          </SRLWrapper>
        </div>
        <Link href="/blog">
          <button className="backToBlog">
            <IoChevronBackCircle className="icon" />
            powrót do listy artykułów
          </button>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;
  @media screen and (max-width: 800px) {
    padding-top: 0;
  }

  .backToBlog {
    position: relative;
    margin: 15vh auto 15vh;
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
  .articleContainer {
    position: relative;
    width: 60vw;
    margin: 15vh auto 10vh;
    min-height: 80vh;
    background: var(--sectionBgColor);
    padding: 5vh 5vw;
    overflow: hidden;
    @media screen and (max-width: 800px) {
      width: 100vw;
      margin: 0vh auto 10vh;
      padding: 5vh 0;
    }
  }
  .titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      width: 70%;
      font-size: 2rem;
      font-family: var(--titleFont);
      color: var(--secondaryColor);
      font-weight: 600;
      display: flex;
      flex-direction: column;
      span {
        margin-top: 7vh;
        font-size: 1rem;
        color: var(--primaryColor);
        font-weight: 500;
      }
    }
    img {
      width: 30%;
      border-radius: 5px;
      filter: saturate(0.6);
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      width: 100%;
      h1 {
        width: 90%;
        font-size: 1.8rem;
      }
      img {
        margin: 3vh auto;
        width: 100%;
      }
    }
  }
  .separateLine {
    width: 50vw;
    margin: 8vh auto;
    height: 2px;
    background: var(--secondaryColor3);
  }
  .infoContent {
    margin: 0 auto;
    width: 80%;
    p {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 5vh;
      line-height: 1.5;
    }
    @media screen and (max-width: 800px) {
      width: 85%;
      p {
        text-align: justify;
      }
    }
  }
  .images {
    margin: 10vh auto 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    img {
      width: 30%;
      margin: 10px;
      cursor: pointer;
      @media screen and (max-width: 800px) {
        width: 80%;
      }
    }
    @media screen and (max-width: 800px) {
      margin: 10vh auto 15vh;
    }
  }
`;

export default SingleArticleBlog;
