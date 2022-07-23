import styled from "styled-components";
import { TiCamera } from "react-icons/ti";
import { BsExclamationLg } from "react-icons/bs";

const ImportantInfoOffer = () => {
  return (
    <Wrapper className="importantInfo">
      <BsExclamationLg className="iconBig" />

      <h2>Ważne informacje</h2>
      <div className="infoContent">
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Zdjęcia są wykonywane profesionalnym sprzętem fotograficznym,
            odpowiednim do scenerii oraz typu sesji zdjęciowej.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Cena uwzględnia samą sesję zdjęciową i nie obejmuje ona ceny
            ewentualnego albumu oraz kosztów dojazdu. Ostateczna kwota jest
            uzgodniona podpisując umowę.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Umowę można zawrzeć podczas spotkania lub korespondencyjnie.
            Zawarcie umowy wymaga wpłacenia zaliczki. Wysokość zaliczki jest
            równa 50% całkowitej ceny.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>Działam na terenie powiatu krakowskiego oraz brzeskiego.</p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Zdjęcia są wykonywane profesionalnym sprzętem fotograficznym,
            odpowiednim do scenerii oraz typu sesji zdjęciowej.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Cena uwzględnia samą sesję zdjęciową i nie obejmuje ona ceny
            ewentualnego albumu oraz kosztów dojazdu. Ostateczna kwota jest
            uzgodniona podpisując umowę.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Umowę można zawrzeć podczas spotkania lub korespondencyjnie.
            Zawarcie umowy wymaga wpłacenia zaliczki. Wysokość zaliczki jest
            równa 50% całkowitej ceny.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>Działam na terenie powiatu krakowskiego oraz brzeskiego.</p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5vh 20vw 5vh 12vw;
  background: var(--sectionBgColor);
  /* margin-bottom: 15vh; */
  position: relative;
  .iconBig {
    position: absolute;
    right: 6vw;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12rem;
    color: var(--secondaryColor);
  }
  h2 {
    text-transform: uppercase;
    color: var(--secondaryColor);
    font-size: 2rem;
    margin-bottom: 5vh;
  }
  .infoContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    article {
      display: flex;
      align-items: flex-start;
      /* justify-content: center; */
      font-size: 1.3rem;
      margin-bottom: 1vh;
      .icon {
        color: var(--secondaryColor);
        margin-top: 3px;
      }
    }
  }
`;

export default ImportantInfoOffer;
