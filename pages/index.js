import Head from "next/head";
import { useState } from "react";

import Header from "../components/homePage/Header";
import FirstInfo from "../components/homePage/FirstInfo";
import ShortGallery from "../components/homePage/ShortGallery";
import ShortOffer from "../components/homePage/ShortOffer";
import ShortBlog from "../components/homePage/ShortBlog";
import ShortAboutMe from "../components/homePage/ShortAboutMe";
import ShortFaqContact from "../components/homePage/ShortFaqContact";
import ShortInstagram from "../components/homePage/ShortInstagram";
import Footer from "../components/Footer";

const Home = ({ thumbnails }) => {
  const [showDetails, setShowDetails] = useState("");
  return (
    <>
      <Head>
        <title>FocusEye</title>
        <meta name="description" content="Fotografia..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="google-site-verification"
          content="GRMdcoFs-83heCcyahrWtFvJ0Qg5z4ANC5q6YeHolQc"
        /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <>
        <Header setShowDetails={setShowDetails} />
        <FirstInfo />
        <ShortGallery />
        <ShortOffer showDetails={showDetails} setShowDetails={setShowDetails} />
        <ShortBlog />
        <ShortAboutMe />
        <ShortFaqContact />
        <ShortInstagram thumbnails={thumbnails} />
        <Footer />
      </>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    "https://focuseye.pl/wp-json/wp/v2/media?media_folder=59"
  );
  const data = await response.json();
  const thumbnails = data.map((image) => {
    const smallImg = image.media_details.sizes.thumbnail.source_url;
    return smallImg;
  });
  return {
    props: {
      thumbnails,
    },
    revalidate: 60,
  };
};

export default Home;
