import styled from "styled-components";

const blogHeaderImg = "../images/blog/blogHeader.png";
const articleImg = "../images/ofertaImg/zakochani2.jpg";

const BlogPage = () => {
  return (
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
        <article>
          <section className="articleImg">
            <img src={articleImg} alt="title" />
          </section>
          <section className="articleInfo">
            <h3>Jak przebiega sesja lifestyle?</h3>
            <span>26.07.2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quo id repellat illum error totam dicta temporibus quam
              exercitationem officiis.
            </p>
          </section>
        </article>
        <article>
          <section className="articleImg">
            <img src={articleImg} alt="title" />
          </section>
          <section className="articleInfo">
            <h3>Jak przebiega sesja lifestyle?</h3>
            <span>26.07.2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quo id repellat illum error totam dicta temporibus quam
              exercitationem officiis.
            </p>
          </section>
        </article>
        <article>
          <section className="articleImg">
            <img src={articleImg} alt="title" />
          </section>
          <section className="articleInfo">
            <h3>Jak przebiega sesja lifestyle?</h3>
            <span>26.07.2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quo id repellat illum error totam dicta temporibus quam
              exercitationem officiis.
            </p>
          </section>
        </article>
      </div>
    </Wrapper>
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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    article {
      margin-bottom: 10vh;
      width: 45%;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid var(--secondaryColor3);
      border-radius: 5px;
      cursor: pointer;
      transition: 0.4s;
      .articleImg {
        transition: 0.4s;
        height: 60%;
        width: 100%;
        overflow: hidden;
        filter: saturate(0.4);
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
      :hover .articleImg {
        filter: saturate(1);
      }
      :hover {
        border: 2px solid var(--secondaryColor);
      }
      .articleInfo {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--sectionBgColor);
        padding: 10px 20px;
        h3 {
          margin-bottom: 2vh;
          color: var(--secondaryColor);
          font-size: 1.5rem;
        }
        span {
          font-size: 1rem;
          margin-bottom: 2vh;
        }
        p {
          font-size: 1.1rem;
          text-align: center;
        }
      }
    }
  }
`;

export default BlogPage;
