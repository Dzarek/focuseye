import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { localGallery } from "../public/data";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import ReactLoading from "react-loading";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const galleryHeaderImg2 = "/images/gallery/galleryHeader.png";

const GalleryPage = ({
  ciazoweImgWP,
  chrzestImgWP,
  noworodkoweImgWP,
  rodzinneImgWP,
  slubyImgWP,
  zakochaniImgWP,
}) => {
  const galleryWordPress = [
    { id: 1, img: ciazoweImgWP, category: "brzuszkoweWP" },
    { id: 2, img: slubyImgWP, category: "ślubneWP" },
    { id: 3, img: zakochaniImgWP, category: "miłosneWP" },
    { id: 4, img: noworodkoweImgWP, category: "noworodkoweWP" },
    { id: 5, img: chrzestImgWP, category: "chrzcinyWP" },
    { id: 6, img: rodzinneImgWP, category: "rodzinneWP" },
  ];

  const [gallery, setGallery] = useState(localGallery);
  const galleryCategory = gallery.filter(
    (item) => item.category === "brzuszkowe"
  );
  const [menuItems, setMenuItems] = useState(galleryCategory);
  const [activeBtn, setActiveBtn] = useState("brzuszkowe");
  const [currentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const categories = [
    ...new Set(gallery.map((item) => item.category)),
    "wszystkie",
  ];
  useEffect(() => {
    if (
      ciazoweImgWP &&
      slubyImgWP &&
      zakochaniImgWP &&
      noworodkoweImgWP &&
      chrzestImgWP &&
      rodzinneImgWP
    ) {
      setGallery(galleryWordPress);
    } else {
      setGallery(localGallery);
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "false" });
  }, []);
  const galleryImages = menuItems.map((item) => {
    const { img } = item;
    return img.map((item, index) => {
      return (
        <img
          data-aos="fade-down"
          className="oneImg"
          key={index}
          src={item}
          alt={index + 1}
        />
      );
    });
  });
  const allImages = [...new Set(gallery.map((item) => item.img))];
  const galleryArrays = [
    ...allImages[0],
    ...allImages[1],
    ...allImages[2],
    ...allImages[3],
    ...allImages[4],
    ...allImages[5],
  ];
  const galleryArraysFinal = galleryArrays.map((item, index) => {
    return (
      <img
        data-aos="fade-down"
        className="oneImg"
        key={index}
        src={item}
        alt={index + 1}
      />
    );
  });

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages[0].slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const currentImages2 = galleryArraysFinal.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  const filterItems = (category) => {
    setImagesPerPage(10);
    if (category === "wszystkie") {
      setMenuItems(gallery);
      setActiveBtn(category);
      return;
    }
    const newItems = gallery.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActiveBtn(category);
  };

  const breakpointColumnsObj = {
    default: 5,
    1280: 3,
    900: 2,
    500: 1,
  };

  const loadImages = () => {
    setTimeout(() => {
      setLoading(true);
      setImagesPerPage(imagesPerPage + 10);
    }, 600);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>FocusEye | Galeria</title>
        <meta
          name="description"
          content="Twoja codzienność uchwycona lekko i naturalnie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper>
        <header>
          <div className="title">
            <h2>Galeria </h2>
            <p data-aos="fade-right">
              Twoja codzienność uchwycona lekko i naturalnie.
            </p>
          </div>
          <img src={galleryHeaderImg2} alt="gallery title" />
        </header>
        <div data-aos="fade-up" className="galleryCategory">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() => filterItems(category)}
                className={activeBtn === category ? "activeBtn" : null}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="galleryContent">
          <SRLWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {menuItems === gallery ? currentImages2 : currentImages}
            </Masonry>
          </SRLWrapper>

          {(menuItems === gallery &&
            currentImages2.length !== galleryArraysFinal.length) ||
          (menuItems !== gallery &&
            currentImages.length !== galleryImages[0].length) ? (
            <>
              {loading ? (
                <button onClick={loadImages} className="loadImagesBtn">
                  Zobacz Więcej
                </button>
              ) : (
                <ReactLoading
                  className="loadingImg"
                  bubbles
                  color={"#94693c"}
                  height={"8%"}
                  width={"8%"}
                />
              )}
            </>
          ) : null}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;
  @media screen and (max-width: 800px) {
    padding-top: 0vh;
  }

  header {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    background: var(--sectionBgColor);
    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 3vh;
        margin-top: 3vh;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--titleFont);
      }
    }
    img {
      height: 50vh;
      margin-left: 5vw;
    }
    @media screen and (max-width: 800px) {
      margin-top: 0vh;
      flex-direction: column-reverse;
      img {
        height: auto;
        width: 60vw;
        margin: 0 auto;
      }
      .title {
        padding: 5vh 2vw;
        text-align: center;
        margin: 0 auto;
        h2 {
          font-size: 2.5rem;
          text-align: center;
          margin: 3vh auto;
        }
      }
    }
  }

  .galleryCategory {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    margin: 5vh auto 0;

    @media screen and (max-width: 800px) {
      width: 90vw;
      flex-wrap: wrap;
    }
    button {
      padding: 8px 12px;
      background: transparent;
      color: var(--primaryColor);
      border: 2px solid #fff;
      border-bottom: 2px solid var(--secondaryColor);
      border-radius: 10px;
      font-size: 1.2rem;
      /* text-transform: uppercase; */
      cursor: pointer;
      font-weight: 400;
      font-family: var(--textFont);
      transition: 0.5s;
      background: #fff;
      :hover {
        background: var(--sectionBgColor);
        border-color: var(--secondaryColor);
      }
      @media screen and (max-width: 800px) {
        margin: 2vh 2vw;
        width: 40%;
        padding: 10px 5px;

        :hover {
          background: var(--logoBgMobile);
        }
      }
    }
    .activeBtn {
      border: 2px solid var(--secondaryColor);
      background: var(--sectionBgColor);
    }
  }
  .galleryContent {
    width: 95vw;
    margin: 0 auto;
    /* margin-left: -5vw; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
    padding: 10vh 0;
    /* background: var(--galleryBtnBg); */
    @media screen and (max-width: 800px) {
      padding: 30px 0;
    }
  }
  .oneImg {
    cursor: pointer;
    filter: brightness(0.8);
    transition: 0.4s;
    :hover {
      filter: brightness(1);
    }
  }
  .my-masonry-grid {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1330px;
    margin: 0 auto;
  }
  /* .my-masonry-grid_column {
    background-clip: padding-box;
  } */

  .my-masonry-grid_column > img {
    background: grey;
    margin-bottom: 10px;
    width: 250px;
    @media screen and (max-width: 800px) {
      width: 95vw;
    }
  }
  .loadImagesBtn {
    margin: 10vh auto;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: var(--titleFont);
    text-transform: uppercase;
    padding: 10px 0px;
    width: 180px;
    font-weight: 700;
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
  .loadingImg {
    margin: 10vh auto;
  }
`;

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  try {
    const responseChrzestImg = await fetch(
      "https://focuseye.pl/wp-json/wp/v2/media?media_folder=60&per_page=100"
    );
    const dataChrzest = await responseChrzestImg.json();
    const chrzestImgWP = dataChrzest.map((image) => {
      const images = image.source_url;
      return images;
    });

    const responseCiazoweImg = await fetch(
      "https://focuseye.pl/wp-json/wp/v2/media?media_folder=62&per_page=100"
    );
    const dataCiazowe = await responseCiazoweImg.json();
    const ciazoweImgWP = dataCiazowe.map((image) => {
      const images = image.source_url;
      return images;
    });

    const responseNoworodkoweImg = await fetch(
      "https://focuseye.pl/wp-json/wp/v2/media?media_folder=63&per_page=100"
    );
    const dataNoworodkowe = await responseNoworodkoweImg.json();
    const noworodkoweImgWP = dataNoworodkowe.map((image) => {
      const images = image.source_url;
      return images;
    });

    const responseRodzinneImg = await fetch(
      "https://focuseye.pl/wp-json/wp/v2/media?media_folder=64&per_page=100"
    );
    const dataRodzinne = await responseRodzinneImg.json();
    const rodzinneImgWP = dataRodzinne.map((image) => {
      const images = image.source_url;
      return images;
    });
    const responseSlubyImg = await fetch(
      "https://focuseye.pl/wp-json/wp/v2/media?media_folder=65&per_page=100"
    );
    const dataSluby = await responseSlubyImg.json();
    const slubyImgWP = dataSluby.map((image) => {
      const images = image.source_url;
      return images;
    });
    const responseZakochaniImg = await fetch(
      "https://focuseye.pl/wp-json/wp/v2/media?media_folder=66&per_page=100"
    );
    const dataZakochani = await responseZakochaniImg.json();
    const zakochaniImgWP = dataZakochani.map((image) => {
      const images = image.source_url;
      return images;
    });

    return {
      props: {
        chrzestImgWP,
        ciazoweImgWP,
        noworodkoweImgWP,
        rodzinneImgWP,
        slubyImgWP,
        zakochaniImgWP,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default GalleryPage;
