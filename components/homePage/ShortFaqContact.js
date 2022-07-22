import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

const qBg = "../../images/Qbg.jpg";

const questions = [
  {
    id: 1,
    title: "Co to lifestyle w plenerze? Jak się przygotować?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut, repellendus assumenda delectus autem sapiente.",
  },

  {
    id: 2,
    title: "Ile to kosztuje i dlaczego tak drogo?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut, repellendus assumenda delectus autem sapiente.",
  },
  {
    id: 3,
    title: "Jak przebiega sesja lifestyle?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut, repellendus assumenda delectus autem sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut, repellendus assumenda delectus autem sapiente.",
  },
  {
    id: 4,
    title: "Coś tam jeszcze innego do zapytania?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut, repellendus assumenda delectus autem sapiente.",
  },
];

const ShortFaqContact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="faqContainer">
        <h2>
          Zapraszam również do zakładki <span>FAQ</span> gdzie znajdziesz
          odpowiedzi na najczęściej zadawane pytania.
        </h2>
        <Accordion allowZeroExpanded={true}>
          {questions.map((question) => {
            const { title, info, id } = question;
            return (
              <AccordionItem key={id}>
                <div data-aos="fade-down" className="singleQuestion">
                  <header>
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
                  </header>
                  <AccordionItemPanel>
                    <p>{info}</p>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="contactShort">
        <h2>Jeśli interesują Cię moje usługi przejdź do kontaktu</h2>
        <FaLongArrowAltRight className="icon" />
        <button>Kontakt</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 75vh;
  margin: 0vh auto;
  padding: 8vh 0 0;
  position: relative;
  background: url(${qBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .faqContainer {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    h2 {
      width: 40%;
      font-family: var(--titleFont);
      font-size: 1.3rem;
      line-height: 2;
      font-weight: 500;
      margin-top: 10vh;
      span {
        color: var(--secondaryColor);
        font-size: 2rem;
        cursor: pointer;
        transition: 0.4s;
        :hover {
          color: var(--secondaryColor3);
        }
      }
    }
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
    width: 35vw;
    background: #fff;
    color: var(--secondaryColor2);
    border-radius: 5px;
    border: 1px solid var(--secondaryColor3);
    font-family: var(--buttonFont);
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    p {
      margin-top: 4vh;
      font-family: var(--textFont);
      font-size: 1.3rem;
      font-weight: 400;
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-family: var(--textFont);
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
  .contactShort {
    width: 100vw;
    height: 20vh;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 1.3rem;
      font-family: var(--titleFont);
      font-weight: 500;
    }
    button {
      font-size: 1.2rem;
      font-family: var(--titleFont);
      background: var(--secondaryColor);
      padding: 10px 15px;
      color: white;
      border-radius: 10px;
      border: 2px solid var(--secondaryColor);
      transition: 0.5s;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      :hover {
        color: var(--secondaryColor);
        background: white;
      }
    }
    .icon {
      font-size: 2rem;
      margin: 0 5vw;
      transform: translateX(-2vw);
      animation: arrowMove 1s ease infinite alternate;
      @keyframes arrowMove {
        100% {
          transform: translateX(2vw);
        }
      }
    }
  }
`;

export default ShortFaqContact;
