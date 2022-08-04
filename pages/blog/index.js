import styled from "styled-components";
import { IoEnter } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { blogData } from "../../public/data";
import Head from "next/head";

const blogHeaderImg = "/images/blog/blogHeader.png";

const BlogPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
        <header>
          <div className="title">
            <h2>Blog </h2>
            <p data-aos="fade-up">
              Artykuły na temat fotografii i sesji zdjęciowych.
            </p>
          </div>
          <img src={blogHeaderImg} alt="gallery title" />
        </header>
        <h2 className="blogSubtitle">Lista Artykułów</h2>
        <div className="blogContent">
          {blogData.map((article) => {
            const { id, slug, title, text, headerImg, date } = article;
            return (
              <Link key={id} href={`/blog/${slug}`}>
                <article
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-offset="300"
                >
                  <section className="articleImg">
                    <img src={headerImg} alt="zdjęcie" />
                    <span>{date}</span>
                  </section>
                  <section className="articleInfo">
                    <h3>{title}</h3>
                    <p>{text[0].slice(0, 250) + "..."}</p>
                    <IoEnter className="icon" />
                  </section>
                </article>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;

  header {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--activeNavLink);
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 3vh;
        margin-top: 3vh;
        color: var(--secondaryColor3);
        color: white;
        letter-spacing: 20px;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--titleFont);
      }
    }
    img {
      height: 50vh;
      margin-left: 5vw;
    }
  }
  .blogSubtitle {
    text-align: center;
    margin: 10vh auto;
    font-family: var(--titleFont);
    font-size: 2rem;
    font-weight: 600;
    color: var(--secondaryColor);
  }
  .blogContent {
    width: 70vw;
    margin: 0 auto 20vh;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    flex-wrap: wrap;
    article {
      /* margin-bottom: 10vh; */
      width: 35%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid #fff;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.4s;
      :nth-of-type(even) {
        margin-top: 15vh;
      }
      .articleImg {
        transition: 0.4s;
        height: 40%;
        width: 100%;
        overflow: hidden;
        position: relative;
        filter: saturate(0.4);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        span {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--sectionBgColor);
          padding: 15px;
          border-radius: 0 0 0 15px;
          font-size: 1.1rem;
          font-weight: 500;
        }
      }
      .icon {
        /* position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%); */
        color: var(--secondaryColor);
        font-size: 3rem;
        opacity: 0.6;
        transition: 0.4s;
      }
      :hover .articleImg {
        filter: saturate(1);
      }
      :hover .icon {
        opacity: 1;
      }
      :hover {
        border: 2px solid var(--secondaryColor);
      }
      .articleInfo {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--sectionBgColor);
        padding: 10px 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        h3 {
          margin-bottom: 4vh;
          color: var(--secondaryColor);
          font-size: 1.5rem;
        }
        /* span {
          font-size: 1rem;
          margin-bottom: 2vh;
        } */
        p {
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 2vh;
        }
      }
    }
  }
`;

export default BlogPage;
