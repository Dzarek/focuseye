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
            Sesje plenerowe wykonuję w promieniu 20 km od Tuchowa, maksymalnie
            1,5 h przed zachodem słońca.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Sesje domowe wykonuję pomiędzy godziną 10-13. W sezonie
            jesienno-zimowym o tej porze mamy najwięcej naturalnego światła w
            mieszkaniach ☺️.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Lokalizację wysyłam w wiadomości przez Instagram bądź Facebook w
            dniu sesji.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Decyzję o przeniesieniu sesji na inny termin w przypadku
            niekorzystnych warunków pogodowych podejmujemy maksymalnie 1,5 h
            przed rozpoczęciem sesji. Pogoda zmienną jest, może się okazać, że w
            okolicach zachodu słońca pięknie Nam zaświeci.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Proszę o punktualne przybycie na sesje, w przypadku zakładanego
            spóźnienia się więcej niż 5 minut proszę z wyprzedzeniem o krótką
            informację SMS.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Na każdą sesje zabieram koc, a do sesji ciążowej po wcześniejszym
            ustaleniu mogę zabrać ze sobą sukienkę dla przyszłej Mamusi.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Płatność za sesję następuje w dniu sesji, najpóźniej w następnym
            dniu przelewem na konto.
          </p>
        </article>
        <article>
          <p>
            <TiCamera className="icon" />
          </p>
          <p>
            Na cenę sesji składają się : czas pracy na sesji i przed komputerem,
            doświadczenie i umiejętności fotografa, dojazd na sesję w promieniu
            20 km od Tuchowa, opłaty prowadzenia firmy i podatek, wydruki zdjęć
            oraz inne produkty zawarte w ofercie, opłaty związane z utrzymaniem
            galerii internetowych, pakowanie zdjęć i ich ewentualna wysyłka. Do
            powyższego dochodzą warsztaty i szkolenia 1-2 razy w roku ☺️.
          </p>
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
