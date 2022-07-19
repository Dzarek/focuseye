import styled from "styled-components";
import { useState, useEffect } from "react";
import { gallery } from "../../public/data";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FaInstagramSquare } from "react-icons/fa";

const ShortInstagram = () => {
  const url = `https://www.instagram.com/graphql/query/?query_hash=69cba40317214236af40e7efa697781d&variables={"id":"15459832366","first":10}`;
  const [instaImg, setInstaImg] = useState([]);

  const fetchImg = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // const thumbs = data.user.edge_owner_to_timeline_media.edges.map(
    //   (edge) => ({
    //     url: edge.node.thumbnail_src,
    //     caption: edge.node.edge_media_to_caption?.edges[0]?.node?.text,
    //     id: edge.id,
    //   })
    // );
    setInstaImg(data);
    console.log(instaImg);
  };
  useEffect(() => {
    fetchImg();
  }, [instaImg]);

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
        {galleryInsta.map((item, index) => {
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
