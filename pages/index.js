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

export default function Home() {
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
        <ShortInstagram />
        <Footer />
      </>
    </>
  );
}
