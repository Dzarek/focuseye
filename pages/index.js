import Head from "next/head";
import { useState, useEffect } from "react";

import Header from "../components/homePage/Header";
import FirstInfo from "../components/homePage/FirstInfo";
import ShortGallery from "../components/homePage/ShortGallery";
import ShortOffer from "../components/homePage/ShortOffer";
import ShortOfferWP from "../components/homePage/ShortOfferWP";
import ShortBlog from "../components/homePage/ShortBlog";
import ShortAboutMe from "../components/homePage/ShortAboutMe";
import ShortFaqContact from "../components/homePage/ShortFaqContact";
import ShortInstagram from "../components/homePage/ShortInstagram";
// import { blogData } from "../public/data";

const Home = () => {
  const [showDetails, setShowDetails] = useState("");
  const [thumbnails, showThumbnails] = useState(null);
  const [fourTitle, showFourTitle] = useState(null);
  const [offersWP, showOffersWP] = useState(null);

  useEffect(async () => {
    try {
      const response = await fetch(
        "https://focuseye.pl/wp-json/wp/v2/media?media_folder=59&per_page=100"
      );
      const data = await response.json();
      const thumbnails = data.map((image) => {
        const smallImg = image.media_details.sizes.full.source_url;
        return smallImg;
      });

      const responseBlog = await fetch(
        `https://focuseye.pl/wp-json/wp/v2/artykuly`
      );
      const dataBlog = await responseBlog.json();
      const blogWP = dataBlog.map((article) => {
        return article;
      });
      const titleOfArticles = blogWP.map((item) => {
        const title = item.acf.title;
        return title;
      });
      const fourTitle = titleOfArticles.slice(0, 4);

      const responseOferta = await fetch(
        `https://focuseye.pl/wp-json/wp/v2/oferty?order=asc`
      );
      const dataOfferWP = await responseOferta.json();
      const offersWP = dataOfferWP.map((offer) => {
        return offer;
      });
      showThumbnails(thumbnails);
      showFourTitle(fourTitle);
      showOffersWP(offersWP);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>FocusEye</title>
        <meta
          name="description"
          content="W fotografii zależy mi na tym aby oddać naturalność i pokazać Waszą miłość. Za każdym zaproszeniem mnie na sesję kryje się głęboka radość i wzruszenie. Domowe sesje lifestyle to jest to co kocham najbardziej, a fotografia reportażowa to ludzie! którzy mnie inspirują, poruszają i rozbudzają wyobraźnię."
        />
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
        {offersWP ? (
          <ShortOfferWP
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            offersWP={offersWP}
          />
        ) : (
          <ShortOffer
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        )}
        <ShortBlog fourTitle={fourTitle && fourTitle} />
        <ShortAboutMe />
        <ShortFaqContact />
        <ShortInstagram thumbnails={thumbnails && thumbnails} />
      </>
    </>
  );
};

// export const getStaticProps = async () => {
//   try {
//     const response = await fetch(
//       "https://focuseye.pl/wp-json/wp/v2/media?media_folder=59&per_page=100"
//     );
//     const data = await response.json();
//     const thumbnails = data.map((image) => {
//       const smallImg = image.media_details.sizes.full.source_url;
//       return smallImg;
//     });

//     const responseBlog = await fetch(
//       `https://focuseye.pl/wp-json/wp/v2/artykuly`
//     );
//     const dataBlog = await responseBlog.json();
//     const blogWP = dataBlog.map((article) => {
//       return article;
//     });
//     const titleOfArticles = blogWP.map((item) => {
//       const title = item.acf.title;
//       return title;
//     });
//     const fourTitle = titleOfArticles.slice(0, 4);

//     const responseOferta = await fetch(
//       `https://focuseye.pl/wp-json/wp/v2/oferty?order=asc`
//     );
//     const dataOfferWP = await responseOferta.json();
//     const offersWP = dataOfferWP.map((offer) => {
//       return offer;
//     });

//     return {
//       props: {
//         thumbnails,
//         fourTitle,
//         offersWP,
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
// };

export default Home;
