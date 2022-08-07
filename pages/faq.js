import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { questions } from "../public/data";
import Head from "next/head";

const faqPersonImg = "/images/faq/faqPerson.png";
const faqHeaderImg = "/images/faq/faqHeader.png";

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>FocusEye | FAQ</title>
        <meta
          name="description"
          content="Odpowiedzi na najczęściej zadawane pytania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <Wrapper>
        <header>
          <img src={faqHeaderImg} alt="gallery title" />
          <div className="title">
            <h2>FAQ </h2>
            <p>Odpowiedzi na najczęściej zadawane pytania.</p>
          </div>
        </header>
        <h4 className="faqSubTitle">
          Jeśli rodzą Ci się w głowie pytania dotyczące moich ofert, może
          znajdziesz odpowiedź na nie poniżej...
        </h4>
        <div className="faqContainer">
          <Accordion allowZeroExpanded={true}>
            {questions.map((question) => {
              const { title, info, id } = question;
              return (
                <AccordionItem key={id}>
                  <div className="singleQuestion">
                    <section className="headerQuesiton">
                      <h3>
                        <BsFillQuestionOctagonFill className="icon" /> {title}
                      </h3>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <button className="btn">
                            <TiArrowSortedDown />
                          </button>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                    </section>
                    <AccordionItemPanel>
                      <p>{info}</p>
                    </AccordionItemPanel>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
          <img
            data-aos="zoom-out"
            className="faqPersonImg"
            src={faqPersonImg}
            alt=""
          />
        </div>
        <h4 className="faqSubTitle2">
          Nie znalazłaś/eś opowiedzi na nurtujące Cię pytania? Zadzwoń do mnie
          lub napisz!
        </h4>
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
    padding-top: 0;
  }
  header {
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2vh;
    background: var(--faqHeaderBgColor);

    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      /* margin-right: 20vw; */
      position: absolute;
      top: 50%;
      left: 55%;
      transform: translateY(-50%);
      h2 {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 3vh;
        margin-top: 3vh;
        color: var(--secondaryColor3);
        letter-spacing: 20px;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--titleFont);
      }
    }
    img {
      height: 50vh;
      animation: imgMove 3s ease 1 forwards;
      z-index: 5;
      @keyframes imgMove {
        0% {
          transform: translateX(55vw);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
    @media screen and (max-width: 800px) {
      margin-top: 0;
      height: 80vh;
      align-items: flex-start;
      .title {
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        text-align: center;
        width: 90vw;
        h2 {
          margin: 0 auto;
          margin-bottom: 3vh;
          margin-top: 3vh;
          text-align: center;
        }
      }
      img {
        height: auto;
        width: 100vw;
        z-index: 0;
        animation: none;
      }
    }
  }
  .faqSubTitle {
    width: 80vw;
    text-align: left;
    margin: 15vh auto 0;
    font-family: var(--titleFont);
    color: var(--secondaryColor);
    font-weight: 500;
    font-size: 1.2rem;
    @media screen and (max-width: 800px) {
      width: 90vw;
      margin: 10vh auto 0;
    }
  }
  .faqSubTitle2 {
    width: 80vw;
    text-align: right;
    margin: 10vh auto 15vh;
    font-family: var(--titleFont);
    color: var(--secondaryColor);
    font-weight: 500;
    font-size: 1.2rem;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }
  .faqContainer {
    width: 90vw;
    margin: 10vh auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .faqPersonImg {
      width: 22vw;
      opacity: 0.5;
      margin-top: 20vh;
    }
    .accordion__panel {
      animation: fadein 0.5s ease-in;
      overflow: hidden;
    }
    @keyframes fadein {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .btn {
      background: transparent;
      border: none;
      font-size: 2rem;
      color: var(--secondaryColor);
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.4s;
      @media screen and (max-width: 800px) {
        font-size: 1.8rem;
      }
      :hover {
        color: var(--secondaryColor3);
      }
    }
    .icon {
      margin-right: 10px;
      color: var(--secondaryColor);
    }

    .singleQuestion {
      margin: 2vh auto;
      padding: 10px 20px;
      width: 50vw;
      background: #fff;
      border-radius: 5px;
      border: 1px solid var(--secondaryColor3);
      font-family: var(--buttonFont);
      @media screen and (max-width: 800px) {
        width: 100%;
      }
      p {
        margin-top: 4vh;
        font-family: var(--textFont);
        font-size: 1.2rem;
        font-weight: 400;
      }
      .headerQuesiton {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-family: var(--textFont);
          display: flex;
          align-items: flex-start;
          font-size: 1.3rem;
          font-weight: 600;
          @media screen and (max-width: 800px) {
            font-size: 1.2rem;
          }
          .icon {
            margin-top: 3px;
          }
        }
      }
    }
    @media screen and (max-width: 800px) {
      img {
        display: none;
      }
    }
  }
`;

export default FaqPage;
