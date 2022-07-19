import styled from "styled-components";
import { useEffect, useState } from "react";
import { gallery } from "../../public/data";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FaInstagramSquare } from "react-icons/fa";
import { getInstagramImages } from "../../helpers/api-util";

const ShortInstagram = () => {
  const [instaImg, setInstaImg] = useState([]);

  const fetchImages = async () => {
    const response = await fetch(
      "https://focuseye.pl/wp-json/wp/v2/media?media_folder=59"
    );
    const data = await response.json();
    const thumbnails = data.map((image) => {
      const smallImg = image.media_details.sizes.full.source_url;
      return smallImg;
    });
    setInstaImg(thumbnails);
  };
  useEffect(() => {
    fetchImages();
  }, []);
  const galleryCategory = gallery.filter(
    (item) => item.category === "rodzinne"
  );
  const galleryInsta = galleryCategory[0].img;
  return (
    <Wrapper>
      <Carousel
        className="carousel"
        infinite
        autoPlay={3000}
        animationSpeed={1000}
        slidesPerPage={7}
      >
        {instaImg.map((item, index) => {
          return <img key={index} src={item} alt="" />;
        })}
      </Carousel>

      <button>
        {" "}
        <FaInstagramSquare className="fbInIcon" /> Obserwuj
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 2px solid var(--secondaryColor);
  border-bottom: 2px solid var(--secondaryColor);
  width: 100vw;
  position: relative;
  /* height: 30vh; */
  .carousel {
    width: 100vw;
    /* height: 30vh; */
    img {
      height: 14.28vw;
      width: 14.28vw;
      object-fit: cover;
    }
  }
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 10px;
    width: 160px;
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem;
    font-family: var(--titleFont);
    color: var(--secondaryColor);
    text-transform: uppercase;
    padding: 5px 10px;
    transition: 0.4s;
    cursor: pointer;
    :hover {
      background: var(--sectionBgColor);
    }
  }
`;

export default ShortInstagram;

export const getStaticProps = async () => {
  const thumbnails = await getInstagramImages();
  // const url = "https://focuseye.pl/wp-json/wp/v2/media?media_folder=59";
  // const response = await fetch(url);
  // const data = await response.json();
  // const thumbnails = data.map((image) => {
  //   const smallImg = image.media_details.sizes.thumbnail.source_url;
  //   return smallImg;
  // });
  // return thumbnails;
  console.log(thumbnails);
  return {
    props: {
      thumbnails,
    },
    revalidate: 60,
  };
};
