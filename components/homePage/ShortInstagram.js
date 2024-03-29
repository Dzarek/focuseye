import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FaInstagramSquare } from "react-icons/fa";
import { galleryInstagram } from "../../public/data";

const ShortInstagram = ({ thumbnails }) => {
  return (
    <Wrapper>
      <Carousel
        className="carousel"
        infinite
        autoPlay={3000}
        animationSpeed={1000}
        slidesPerPage={7}
        breakpoints={{
          900: {
            slidesPerPage: 3,
          },
        }}
      >
        {thumbnails && thumbnails.length > 9
          ? thumbnails.map((item, index) => {
              return <img key={index} src={item} alt="instagram" />;
            })
          : galleryInstagram.map((item, index) => {
              return <img key={index} src={item} alt="instagram" />;
            })}
      </Carousel>

      <a
        href="https://www.instagram.com/focuseye_sylwiasajdak/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaInstagramSquare className="fbInIcon" /> Obserwuj
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 2px solid var(--secondaryColor);
  border-bottom: 2px solid var(--secondaryColor);
  width: 100vw;
  position: relative;
  .carousel {
    width: 100vw;
    img {
      height: 14.28vw;
      width: 14.28vw;
      object-fit: cover;
      @media screen and (max-width: 800px) {
        height: 33.33vw;
        width: 33.33vw;
      }
    }
  }
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 10px;
    width: 180px;
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
    text-decoration: none;
    cursor: pointer;
    :hover {
      background: var(--activeNavLink);
      color: var(--secondaryColor3);
    }
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      width: 150px;
      height: 40px;
    }
  }
`;

export default ShortInstagram;
