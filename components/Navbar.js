import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";

// const navImg = "/images/faq/faqPerson.png";
const navLogo = "/images/navLogo.png";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handlePhone = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
  };
  const handleEmail = () => {
    setShowPhone(false);
    setShowEmail(!showEmail);
  };

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  const handleScroll = () => {
    setTimeout(() => {
      scroll.scrollMore(1);
    }, 1100);
  };
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <div className={offset === 0 ? "navbar" : "navbar navbarBg"}>
          <Link href="/galeria">
            <a className={router.pathname == "/galeria" ? "active" : ""}>
              Galeria
            </a>
          </Link>
          <Link href="/oferta">
            <a className={router.pathname == "/oferta" ? "active" : ""}>
              Oferta
            </a>
          </Link>
          <Link href="/blog">
            <a className={router.pathname == "/blog" ? "active" : ""}>Blog</a>
          </Link>
          <div className="logo">
            <Link href="/">
              <h2>
                FocusEye
                {router.pathname == "/" ? (
                  <div className="logoLine"></div>
                ) : (
                  <IoHome className="logoIcon" />
                )}
                <span className="logoName">Sylwia Sajdak</span>
              </h2>
            </Link>
          </div>
          <Link href="/omnie">
            <a className={router.pathname == "/omnie" ? "active" : ""}>
              O mnie
            </a>
          </Link>
          <Link href="/faq">
            <a className={router.pathname == "/faq" ? "active" : ""}>FAQ</a>
          </Link>
          <Link href="/kontakt">
            <a className={router.pathname == "/kontakt" ? "active" : ""}>
              Kontakt
            </a>
          </Link>
        </div>
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      </Wrapper>
      <Wrapper2>
        {!showMenu ? (
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="navHamburger"
          >
            <HiMenuAlt2 />
          </button>
        ) : (
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="navHamburger2"
          >
            <FaRegArrowAltCircleUp />
          </button>
        )}
        <div className={showMenu ? "mobileNav showMain-Nav" : "mobileNav"}>
          <div className="logo">
            <h2>
              FocusEye
              <div className="logoLine"></div>
              <span className="logoName">Sylwia Sajdak</span>
            </h2>
          </div>
          <div className="navlinks">
            <img src={navLogo} alt="logo" />
            <Link href="/">
              <a
                onClick={() => setShowMenu(false)}
                className={router.pathname == "/" ? "active" : ""}
              >
                Strona Główna
              </a>
            </Link>
            <Link href="/galeria">
              <a
                onClick={() => setShowMenu(false)}
                className={router.pathname == "/galeria" ? "active" : ""}
              >
                Galeria
              </a>
            </Link>
            <Link href="/oferta">
              <a
                onClick={() => setShowMenu(false)}
                className={router.pathname == "/oferta" ? "active" : ""}
              >
                Oferta
              </a>
            </Link>
            <Link href="/blog">
              <a
                onClick={() => setShowMenu(false)}
                className={router.pathname == "/blog" ? "active" : ""}
              >
                Blog
              </a>
            </Link>

            <Link href="/omnie">
              <a
                onClick={() => setShowMenu(false)}
                className={router.pathname == "/omnie" ? "active" : ""}
              >
                O mnie
              </a>
            </Link>
            <Link href="/faq">
              <a
                onClick={() => setShowMenu(false)}
                className={router.pathname == "/faq" ? "active" : ""}
              >
                FAQ
              </a>
            </Link>
            <Link href="/kontakt">
              <a
                onClick={() => setShowMenu(false)}
                className={router.pathname == "/kontakt" ? "active" : ""}
              >
                Kontakt
              </a>
            </Link>
          </div>
          <section className="media-icons">
            <a
              href="https://www.facebook.com/sylwiasajdakfotografia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="icon" />
            </a>
            <a
              href="https://www.instagram.com/focuseye_sylwiasajdak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="icon" />
            </a>
            <a href="tel:+48798698605" onClick={handlePhone}>
              <FaPhoneSquare className="icon" />
            </a>
            <ImMail className="icon" onClick={handleEmail} />
            <div className="media-info">
              {showPhone && <p>798 698 605</p>}
              {showEmail && <p>kontakt.focuseye@gmail.com</p>}
            </div>
          </section>
        </div>
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  @media screen and (max-width: 800px) {
    display: none;
  }
  .navbar {
    margin: 0 auto;
    position: fixed;
    height: 10vh;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    h5,
    a {
      font-weight: 600;
      font-size: 1.1rem;
      letter-spacing: 1px;
      font-family: var(--titleFont);
      margin: 10px 1.5vw 0;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      text-decoration: none;
      color: var(--secondaryColor);
      &.active {
        color: var(--secondaryColor3);
        font-size: 1.2rem;
      }
      :hover {
        color: var(--secondaryColor3);
        font-size: 1.2rem;
      }
    }
    .logo {
      margin: 0 4vw;
      cursor: pointer;
      h2 {
        font-family: "Genos", sans-serif;
        font-size: 1.7rem;
        letter-spacing: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover .logoIcon {
          transform: scale(1.2);
        }
        .logoIcon {
          margin: 5px 30px 0;
          color: var(--secondaryColor);
          transition: 0.4s;
          font-size: 1.5rem;
        }
        .logoLine {
          margin: 5px 30px 0;
          height: 1.5rem;
          width: 3px;
          background: var(--secondaryColor);
          animation: logoR 4s linear infinite;
          @keyframes logoR {
            20% {
              transform: rotate(0deg);
            }
            30% {
              transform: rotate(90deg);
            }
            40% {
              transform: rotate(90deg);
            }
            50% {
              transform: rotate(180deg);
            }
            60% {
              transform: rotate(180deg);
            }
            70% {
              transform: rotate(270deg);
            }
            80% {
              transform: rotate(270deg);
            }
            90% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
        span {
          color: var(--primaryColor);
        }
      }
    }
  }
  .navbarBg {
    background: var(--navigationBgColor);
    color: #fff;
    transition: 1s;
    h5,
    a {
      color: #fff;
      &.active {
        color: var(--activeNavLink);
        font-size: 1.2rem;
      }
      :hover {
        color: var(--activeNavLink);
        font-size: 1.2rem;
      }
    }
    .logo {
      h2 {
        color: var(--sectionBgColor);
        text-shadow: 2px 2px 2px black;
        :hover .logoIcon {
          color: var(--activeNavLink);
        }
        .logoIcon {
          color: #fff;
        }
        .logoLine {
          background: #fff;
        }
        span {
          color: var(--sectionBgColor);
        }
      }
    }
  }
  .upBtn {
    position: fixed;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--navigationBgColor);
    transition: 0.5s;
    cursor: pointer;
    :hover {
      color: var(--secondaryColor);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;
const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }

  .mobileNav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    transition: 0.7s;
    transform: translateY(-100vh);
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    color: var(--secondaryColor3);
    z-index: 999;
  }
  .showMain-Nav {
    transition: 0.7s;
    transform: translateY(0vh);
  }

  .logo {
    margin: 0 auto;
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background: var(--activeNavLink);
    box-shadow: 0px 3px 5px 0px var(--activeNavLink);
  }
  h2 {
    font-family: "Genos", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin-left: 0;
    color: white;
    .logoLine {
      margin: 5px 25px 0;
      height: 1rem;
      width: 3px;
      background: var(--primaryColor);
      animation: logoR 4s linear infinite;

      @keyframes logoR {
        20% {
          transform: rotate(0deg);
        }
        30% {
          transform: rotate(90deg);
        }
        40% {
          transform: rotate(90deg);
        }
        50% {
          transform: rotate(180deg);
        }
        60% {
          transform: rotate(180deg);
        }
        70% {
          transform: rotate(270deg);
        }
        80% {
          transform: rotate(270deg);
        }
        90% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    span {
      color: var(--secondaryColor3);
    }
  }
  .navlinks {
    margin: 0 auto;
    /* height: 10vh; */
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    z-index: 9999;
    position: relative;
    h5,
    a {
      margin-right: 5vw;
      font-weight: 500;
      font-size: 1.5rem;
      font-family: var(--titleFont);
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      display: flex;
      align-items: center;
      user-select: none;
      color: var(--primaryColor);
      margin-bottom: 2vh;
      &.active {
        color: var(--secondaryColor);
      }
    }
    img {
      position: absolute;
      top: 20%;
      left: 0%;
      width: 65vw;
      /* transform: rotateY(180deg); */
      opacity: 0.8;
      animation: hideImg 2s linear infinite alternate;
      @keyframes hideImg {
        0% {
          opacity: 0.8;
        }
        100% {
          opacity: 0.5;
        }
      }
    }
  }
  .media-icons {
    height: 20vh;
    color: var(--secondaryColor);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    width: 80%;
    margin: -7vh auto 12vh;
    flex-wrap: wrap;
    position: relative;
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon {
      cursor: pointer;
      transition: 0.3s;
      color: var(--secondaryColor);
      font-size: 2.3rem;
      :hover {
        font-size: 2.4rem;
      }
    }
    .media-info {
      width: 100%;
      margin: 0vh auto;
      text-align: center;
      position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translateX(-50%);
      p {
        font-size: 1rem;
        font-family: var(--titleFont);
        color: var(--primaryColor);
        font-weight: 500;
      }
    }
  }
  .upBtn {
    position: fixed;
    z-index: 9;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--navigationBgColor);
    transition: 0.5s;
    cursor: pointer;
    :hover {
      color: var(--secondaryColor);
    }
  }
  .upBtnNone {
    display: none;
  }
`;

export default Navbar;
