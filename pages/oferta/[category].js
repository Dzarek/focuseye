import styled from "styled-components";
import { offers } from "../../public/data";

const OneOffer = ({ oneOffer }) => {
  const { imgs, title } = oneOffer;
  const bg = imgs[1];
  return (
    <Wrapper>
      {" "}
      <header className="headerTitle">
        <div className="title">
          <img src={bg} alt="" />
          <h2>{title}</h2>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  /* width: 90vw;
  max-width: 1440px; */
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;
  .headerTitle {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--activeNavLink);
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 50vh;
      }
      h2 {
        font-weight: 800;
        font-size: 3rem;
        color: var(--secondaryColor3);
      }
    }
  }
`;

export const getStaticProps = async (context) => {
  const category = context.params.category;
  const oneOffer = offers.find((item) => item.category === category);
  return {
    props: {
      oneOffer: oneOffer,
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
