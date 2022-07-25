import styled from "styled-components";

const faqHeaderImg = "../images/faq/faqHeader.png";

const BlogPage = () => {
  return (
    <Wrapper>
      <header>
        <img src={faqHeaderImg} alt="gallery title" />
        <div className="title">
          <h2>FAQ </h2>
          <p>Odpowiedzi na najczęściej zadawane pytania.</p>
        </div>
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
    justify-content: space-between;
    align-items: center;
    margin-top: 2vh;
    background: var(--faqHeaderBgColor);
    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      /* margin-right: 20vw; */
      position: absolute;
      top: 50%;
      left: 55%;
      transform: translateY(-50%);
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 3vh;
        margin-top: 3vh;
        /* color: var(--aboutMeHeaderBgColor); */
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
      animation: imgMove 3s ease 1 forwards;
      z-index: 5;
      @keyframes imgMove {
        0% {
          transform: translateX(55vw);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
  }
`;

export default BlogPage;
