import styled from "styled-components";
import Link from "next/link";

const mirrorImg1 = "../images/ofertaImg/fotolustro/fotolustro2.jpg";

const Mirror = () => {
  return (
    <Wrapper>
      <img className="leftMirror" src={mirrorImg1} alt="" />
      <section className="mirrorText">
        <h2>Fotolustro</h2>
        <p>
          Fotolustro to ekstrawagancka alternatywa dla popularnej fotobudki.
          Przykuwa wzrok i wzbudza zainteresowanie Twoich gości. Utrwalone
          wspomnienia wydrukujesz w kilka sekund. Dwa formaty wydruków:
          pocztówka 10x15cm, foto-paski 5x15cm.
        </p>
        <Link href="/oferta/fotolustro">
          <button className="backToBlog">przejdź do oferty</button>
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 60vh;
  background: var(--activeNavLink);
  margin: 20vh auto;
  padding: 2vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    text-transform: uppercase;
    color: var(--secondaryColor3);
    font-size: 2rem;
    margin: 0 auto;
    text-align: center;
  }
  .leftMirror {
    height: 60vh;
    opacity: 0.8;
  }

  .mirrorText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 5vw;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.5;
    width: 50vw;
    text-align: right;
    margin: 7vh auto;
  }
  .backToBlog {
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

export default Mirror;
