import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SimpleReactLightbox from "simple-react-lightbox";
import CookieAccept from "../components/CookieAccept";
import Cookie from "../components/CookiePage";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [visibleCookie, setVisibleCookie] = useState(false);
  return (
    <div className="app">
      <Navbar />
      <SimpleReactLightbox>
        <Component {...pageProps} setVisibleCookie={setVisibleCookie} />
      </SimpleReactLightbox>
      <Footer />
      <CookieAccept setVisibleCookie={setVisibleCookie} />
      {visibleCookie && <Cookie setVisibleCookie={setVisibleCookie} />}
    </div>
  );
}

export default MyApp;
