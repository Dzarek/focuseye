import { useState } from "react";
import styled from "styled-components";
// import Cookie from "./CookiePage";
// import CookieConsent from "react-cookie-consent";
import { offers } from "../public/data";

let minDate = new Date().toISOString().slice(0, 10);

const MyForm = () => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);
  const [category, setCategory] = useState("---");
  const [date, setDate] = useState(minDate);
  // const [visibleCookie, setVisibleCookie] = useState(false);

  const mailBody =
    `IMIĘ I NAZWISKO:  ` +
    `<strong>${name}</strong>` +
    `<br/> <br/> ADRES EMAIL:  ` +
    `<strong>${email}</strong>` +
    `<br/> <br/> NUMER TELEFONU:  ` +
    `<strong>${phone}</strong>` +
    `<br/> <br/> KATEGORIA:  ` +
    `<strong>${category}</strong>` +
    `<br/> <br/> TERMIN:  ` +
    `<strong>${date}</strong>` +
    `<br/> <br/> WIADOMOŚĆ:  ` +
    `<strong>${text}</strong>`;
  const mailSubject = `focuseye.pl, Wiadomość od ${name}`;
  const handleWowSubmit = async (e) => {
    e.preventDefault();
    if (category === "---") {
      return alert("Wybierz kategorię przed wysłaniem formularza.");
    } else {
      window.Email.send({
        Host: "smtp.gmail.com",
        Username: "",
        Password: ``,
        To: [""],
        From: email,
        Subject: mailSubject,
        Body: mailBody,
      }).then((data) => {
        if (data === "OK") {
          setStatus("SUCCESS");
        } else {
          setStatus("ERROR");
        }
      });
      setTimeout(() => {
        setStatus("");
        setName("");
        setEmail("");
        setPhone("");
        setText("");
        setBox(false);
        setCategory("---");
        setDate(minDate);
      }, 3000);
    }
  };

  let categories = offers.map((item) => {
    const { category } = item;
    return category;
  });
  categories = ["---", ...categories].map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      <Wrapper onSubmit={(e) => handleWowSubmit(e)}>
        <input
          className="inputName"
          type="text"
          name="name"
          placeholder="Imię i Nazwisko"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            minLength={9}
            maxLength={12}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="inputs">
          <div className="chooseInput">
            <label htmlFor="category">Wybierz kategorie:</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories}
            </select>
          </div>
          <div className="chooseInput">
            <label htmlFor="category">Wybierz termin:</label>

            <input
              type="date"
              name="date"
              value={date}
              min={minDate}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <br />
        <textarea
          placeholder="Twoja wiadomość..."
          name="message"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="labelCookieContainer">
          <label className="labelCheck" htmlFor="accept">
            <p>
              <input
                type="checkbox"
                id="accept"
                name="accept"
                required
                checked={box}
                onChange={() => setBox(!box)}
              />
              Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi
              na mojego e-maila
              <span
                onClick={() => setVisibleCookie(true)}
                className="cookieLink"
              >
                (Polityka Prywatności).
              </span>
            </p>
          </label>
        </div>
        <>
          {status === "SUCCESS" ? (
            <p className="messageAlert">Wiadomość wysłana! </p>
          ) : (
            <button>Wyślij</button>
          )}
          {status === "ERROR" && (
            <p className="messageAlert">ups... coś poszło nie tak!</p>
          )}
        </>
      </Wrapper>
      {/* <CookieConsent
        buttonText="Akceptuje"
        cookieName="myAwesomeCookieName2"
        className="cookieInfo"
        style={{
          background: "rgba(0,0,0, .8)",
          fontSize: "18px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 999999,
        }}
        buttonStyle={{
          color: "white",
          fontSize: "18px",
          backgroundColor: "#4f7e52",
          padding: "10px",
          borderRadius: "5px",
        }}
        expires={7}
      >
        Strona korzysta z plików cookies. Pozostając na niej wyrażasz zgodę na
        ich używanie. <br /> Ze szczegółowymi informacjami dotyczącymi cookies
        na tej stronie można się zapoznać tutaj:
        <span
          onClick={() => this.setState({ visibleCookie: true })}
          className="cookieLink"
        >
          (Polityka Prywatności)
        </span>
        .
      </CookieConsent> */}
    </>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* height: 65vh; */
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
  input,
  select {
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid var(--secondaryColor);
    font-family: var(--textFont);
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      width: 47%;
      padding: 8px 10px;
    }
  }
  .inputName {
    width: 100%;
    margin-bottom: 2vh;
  }
  .inputs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vh;
    input {
      width: 45%;
    }
    .chooseInput {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2vh;
      input,
      select {
        width: 100%;
      }
    }
  }
  textarea {
    width: 100%;
    /* min-height: 15vh; */
    padding: 10px 20px 0;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid var(--secondaryColor);
    font-family: var(--textFont);
    line-height: 1.2;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      padding: 8px 10px;
      min-height: 30vh;
    }
  }
  .labelCookieContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: var(--textFont);
    font-size: 1rem;
    line-height: 1.2;
    label {
      margin: 3vh auto 0;
      @media (orientation: portrait) and (max-width: 800px) {
        font-size: 0.9rem;
      }
      input {
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .cookieLink {
      color: var(--secondaryColor);
      cursor: pointer;
      margin-left: 5px;
    }
  }
  button {
    width: 30%;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 1rem;
    font-family: var(--titleFont);
    text-transform: uppercase;
    padding: 10px 0px;
    margin: 5vh auto 0;
    font-weight: 600;
    color: #fff;
    background: var(--secondaryColor);
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: #fff;
      border: 2px solid var(--secondaryColor);
      color: var(--secondaryColor);
    }
  }
  .messageAlert {
    font-family: var(--titleFont);
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--secondaryColor);
    margin-top: 3vh;
  }
`;

export default MyForm;
