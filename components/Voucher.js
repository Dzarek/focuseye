import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const voucherImg = "../images/voucherSesja.jpg";

import { TiArrowRightOutline } from "react-icons/ti";

const Voucher = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper className="voucher mainPage">
      <p className="subtitle">
        Jeśli chcesz zrobić komoś prezent, zachęcam do wykupienia VOUCHERA na
        sesję!
      </p>
      <div className="voucherOrder">
        <img
          data-aos="flip-right"
          data-aos-offset="200"
          src={voucherImg}
          alt="voucher"
        />
      </div>
      <h4>
        Voucher podarunkowy na sesję fotograficzną to dzisiaj popularny prezent!
        Spraw przyjemność swoim najbliższym i podaruj im okazję do stworzenia
        sobie niezwykłej pamiątki.
      </h4>
      <div className="voucherInfo">
        <h3 className="subtitle">Jak zamówić voucher?</h3>
        <section>
          <p>
            <TiArrowRightOutline className="icon" />
          </p>

          <p>
            Wybierz rodzaj sesji zdjęciowej aby sprawdzić cenę. Cena uwzględnia
            samą sesję zdjęciową, bez kosztu ewentualnego albumu i dojazdu.
          </p>
        </section>
        <section>
          <p>
            <TiArrowRightOutline className="icon" />
          </p>

          <p>
            Wyśli przelew na konto: Alior Bank 00 0000 0000 0000 0000 0000 0000.
            W tytule przelewu należy podać nazwę sesji zdjęciowej.
          </p>
        </section>
        <section>
          <p>
            <TiArrowRightOutline className="icon" />
          </p>

          <p>Wyśli potwierdzenie przelewu na kamilfotograf@gmail.com.</p>
        </section>
        <section>
          <p>
            <TiArrowRightOutline className="icon" />
          </p>

          <p>
            Po zaksięgowaniu przelewu przygotowuje voucher i wystawiam rachunek.
          </p>
        </section>
        <section>
          <p>
            <TiArrowRightOutline className="icon" />
          </p>

          <p>
            Voucher wraz z rachunkiem za przelew wysyłam listem poleconym Pocztą
            Polską.
          </p>
        </section>
      </div>
      <h4>
        Voucher jest ważny przez dwa lata od dnia wystawienia. W razie
        jakichkolwiek pytań napisz do mnie poprzez formularz kontaktowy, lub
        zadzwoń pod numer 123 456 789 aby ustalić szczegóły.
      </h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 80vw;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  .subtitle {
    font-size: 1.8rem;
    @media screen and (max-width: 800px) {
      font-size: 1.6rem;
      width: 90%;
    }
  }
  .voucherOrder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 100vw;
    }
    img {
      height: 50vh;
      margin: 5vh auto;
      @media screen and (max-width: 800px) {
        width: 100vw;
        height: auto;
      }
    }
    /* button {
      padding: 10px 20px;
      font-family: var(--titleFont);
      border: 2px solid white;
      font-size: 2rem;
      color: white;
      background: transparent;
      margin-left: 5vw;
    } */
  }
  h4 {
    font-size: 1.2rem;
    width: 90%;
    margin: 3vh auto;
    @media screen and (max-width: 800px) {
      width: 80%;
      text-align: center;
    }
  }
  .voucherInfo {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 3vh auto;
    section {
      font-size: 1.2rem;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 2vh;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
      section {
        font-size: 1.1rem;
        margin-bottom: 2vh;
      }
      .icon {
        font-size: 1rem;
      }
    }
  }
`;

export default Voucher;
