import styled from "styled-components";

const blogHeaderImg = "../images/blog/blogHeader.png";

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
`;

export default BlogPage;
