import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gallery } from "../public/data";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import ReactLoading from "react-loading";
import Aos from "aos";
import "aos/dist/aos.css";

// const galleryHeaderImg = "../images/gallery/galleryHeaderImg.jpg";
const galleryHeaderImg2 = "../images/gallery/galleryHeader.png";

const allCategories = [
  ...new Set(gallery.map((item) => item.category)),
  "wszystkie",
];

const galleryCategory = gallery.filter((item) => item.category === "miłosne");

const GalleryPage = () => {
  const [menuItems, setMenuItems] = useState(galleryCategory);
  const [categories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("miłosne");
  const [currentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
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
    <Wrapper>
      <header>
        {/* <div className="headerBg"></div> */}
        {/* <div className="headerContent"> */}
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
      {/* </div> */}
      <div className="galleryContent">
        <SRLWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {/* {galleryImages} */}
            {/* {currentImages} */}
            {/* {menuItems === gallery ? galleryImages : currentImages} */}
            {menuItems === gallery ? currentImages2 : currentImages}
          </Masonry>
        </SRLWrapper>

        {(menuItems === gallery &&
          currentImages2.length !== galleryArraysFinal.length) ||
        (menuItems !== gallery &&
          currentImages.length !== galleryImages[0].length) ? (
          <>
            {loading ? (
              <button
                // onClick={() => setImagesPerPage(imagesPerPage + 10)}
                onClick={loadImages}
                className="loadImagesBtn"
              >
                Zobacz Więcej
              </button>
            ) : (
              <ReactLoading
                className="loadingImg"
                bubbles
                color={"#94693c"}
                height={"6%"}
                width={"6%"}
              />
            )}
          </>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  /* width: 90vw;
  max-width: 1440px; */
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;
  @media screen and (max-width: 800px) {
    /* margin-top: 5vh; */
    .title {
      /* padding-top: 8vh; */
      /* margin-top: -5vh; */
    }
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
    /* border-bottom: 1px solid var(--secondaryColor); */
    /* .headerBg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${galleryHeaderImg2});
      background-size: contain;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
    } */
    /* .headerContent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    } */
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
      font-family: "Kanit", sans-serif;
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
      width: 100vw;
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

export default GalleryPage;
