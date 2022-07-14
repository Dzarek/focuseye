import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gallery } from "../public/data";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import ReactLoading from "react-loading";
import Aos from "aos";
import "aos/dist/aos.css";

const allCategories = [
  ...new Set(gallery.map((item) => item.category)),
  "wszystkie",
];

const galleryCategory = gallery.filter((item) => item.category === "ciąża");

const GalleryPage = () => {
  const [menuItems, setMenuItems] = useState(galleryCategory);
  const [categories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("ciąża");
  // const [currentPage, setCurrentPage] = useState(1);
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
  // console.log(galleryArraysFinal);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages[0].slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  // console.log(galleryImages[0]);

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
    default: 4,
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
    <Wrapper id="gallery" className="mainPage">
      <div className="title">
        <h2>Galeria</h2>
      </div>
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
      <SRLWrapper>
        <div className="galleryContent">
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
                  color={"#4f7e52"}
                  height={"6%"}
                  width={"6%"}
                />
              )}
            </>
          ) : null}
        </div>
      </SRLWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  @media screen and (max-width: 800px) {
    /* margin-top: 5vh; */
    .title {
      /* padding-top: 8vh; */
      margin-top: -5vh;
    }
  }

  .galleryCategory {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 90vw;
      flex-wrap: wrap;
    }
    button {
      padding: 10px;
      background: transparent;
      color: var(--primaryColor);
      border: none;
      border-bottom: 2px solid var(--secondaryColor);
      border-radius: 5px;
      font-size: 1.2rem;
      /* text-transform: uppercase; */
      cursor: pointer;
      font-weight: 400;
      font-family: "Kanit", sans-serif;
      transition: background 0.5s;
      :hover {
        background: var(--galleryBtnBg);
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
      background: var(--logoBgMobile);
    }
  }
  .galleryContent {
    width: 100vw;
    margin: 10vh auto 0;
    /* margin-left: -5vw; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
    padding: 10vh 12vw;
    background: var(--galleryBtnBg);
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
    margin: 0 auto;
  }
  /* .my-masonry-grid_column {
    background-clip: padding-box;
  } */

  .my-masonry-grid_column > img {
    background: grey;
    margin-bottom: 30px;
    width: 250px;
    @media screen and (max-width: 800px) {
      width: 100vw;
    }
  }
  .loadImagesBtn {
    margin: 10vh auto;
    text-align: center;
    padding: 10px 20px;
    font-size: 1rem;
    text-transform: uppercase;
    background: var(--secondaryColor);
    color: white;
    border: none;
    border-radius: 5px;
    font-family: "Genos", sans-serif;
    font-family: "Kanit", sans-serif;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      /* color: var(--secondaryColor); */
      background: var(--primaryColor);
    }
  }
  .loadingImg {
    margin: 10vh auto;
  }
`;

export default GalleryPage;
