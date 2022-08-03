import CookieConsent from "react-cookie-consent";

const CookieAccept = ({ setVisibleCookie }) => {
  return (
    <CookieConsent
      buttonText="Akceptuje"
      cookieName="myAwesomeCookieName"
      className="cookieInfo"
      style={{
        background: "rgba(60, 45, 37,0.99)",
        fontSize: "14px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontFamily: '"Poppins", sans-serif',
        padding: "0.5vh 0",
        zIndex: 999999,
      }}
      buttonStyle={{
        color: "#94693c",
        fontSize: "16px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px",
        fontFamily: '"Poppins", sans-serif',
        fontWeight: "600",
      }}
      expires={7}
    >
      Strona korzysta z plików cookies. Pozostając na niej wyrażasz zgodę na ich
      używanie. <br /> Ze szczegółowymi informacjami dotyczącymi cookies na tej
      stronie można się zapoznać tutaj:
      <span onClick={() => setVisibleCookie(true)} className="cookieLink">
        (Polityka Prywatności)
      </span>
      .
    </CookieConsent>
  );
};

export default CookieAccept;
