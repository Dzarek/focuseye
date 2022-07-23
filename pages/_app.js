import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar />
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
      <Footer />
    </div>
  );
}

export default MyApp;
