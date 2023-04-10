import { useEffect, useState } from "react";
import styled from "styled-components";
import { BlogCard } from "../components/cards/BlogCard";
import { StaticNavbar } from "../components/Navbar/StaticNavbar";
import Sidebar from "../components/Sidebar";
import { ContactUsPageContainer } from "./contact-us";
import { createClient } from "contentful";
import lottieLoader from "../assets/lottie/loader.json";
import Lottie from "react-lottie";
import { Helmet } from "react-helmet-async";
import About from "../assets/about-us.png";
import { StarIcon } from "../components/icons";
import { TestimonyCard } from "../components/cards/TestimonyCard";

export const AboutUsPageContainer = styled(ContactUsPageContainer)`
  font-family: "Work Sans", sans-serif;
  > h1 {
    margin-top: 70px;
  }
`;

export const AboutHeroSectionContainer = styled.section`
  width: 90%;
  max-width: 1074px;
  margin: 0 auto 72px;

  h2 {
    font-family: "Fredoka", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    color: #4b2a85;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: rgba(30, 30, 30, 0.8);
    margin-bottom: 40px;
  }

  img {
    width: 100%;
    height: 387px;
    border-radius: 24px;
    object-fit: cover;
    object-position: 0 0;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 23px;
    }

    img {
      height: 206px;
    }
  }
`;

export const AboutStorySectionContainer = styled.section`
  width: 90%;
  max-width: 1074px;
  margin: 0 auto 80px;

  h2 {
    font-family: "Fredoka", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    color: #4b2a85;
    margin-bottom: 24px;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
    h2 {
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 16px;
    }
  }
`;

export const AboutStatisticsCardContainer = styled.div`
  height: 327px;
  background: #f3f5ff;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 93px 0 86px;

  h3 {
    font-family: "Fredoka", sans-serif;
    width: 228px;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #4b2a85;
  }

  > div {
    width: calc(100% - 302px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      text-align: center;

      h4 {
        font-family: "Fredoka", sans-serif;
        font-weight: 400;
        font-size: 50px;
        line-height: 35px;
        color: #bb9cc3;
        margin-bottom: 18px;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #52345a;
      }
    }
  }

  @media (max-width: 1140px) {
    padding: 0 5%;

    > div {
      width: calc(100% - 258px);
    }
  }

  @media (max-width: 990px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 30px;

    > div {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    filter: drop-shadow(0px -4px 4px #e3e7f8);
    height: auto;
    padding: 53px 5% 71px;
    row-gap: 56px;

    h3 {
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      width: 100%;
      max-width: 228px;
    }

    > div > div h4 {
      font-weight: 400;
      font-size: 40px;
      line-height: 35px;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 590px) {
    > div {
      flex-direction: column;
      row-gap: 40px;
    }
  }
`;

export const AboutStatementContainer = styled.div`
  display: flex;
  column-gap: 22px;
  margin-top: 80px;

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    flex: 1;

    h3 {
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      color: #4b2a85;
      font-family: "Fredoka", sans-serif;
    }

    > div {
      padding: 65px 38px;
      min-height: 247px;
      flex: 1;
      font-weight: 400;
      font-size: 24px;
      line-height: 120%;
      color: #4b2a85;
      background: #f3f5ff;
      border-radius: 24px;
    }
  }

  @media (max-width: 767px) {
    margin-top: 16px;
    flex-direction: column;
    row-gap: 16px;

    > div {
      row-gap: 16px;

      h3 {
        font-size: 16px;
        line-height: 120%;
      }

      > div {
        min-height: 107px;
        flex: 0 0 auto;
        padding: 24px 18px;
        font-size: 14px;
        line-height: 120%;
      }
    }
  }
`;

export const AboutUsOfferSectionContainer = styled.section`
  width: 90%;
  max-width: 1074px;
  margin: 0 auto 80px;

  h2 {
    font-family: "Fredoka", sans-serif;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    color: #4b2a85;
    text-align: center;
  }

  > div {
    background: #f3f5ff;
    border-radius: 24px;
    padding: 80px 40px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 64px;
    align-items: center;

    > div {
      width: calc(50% - 25px);
      display: flex;
      column-gap: 16px;
      align-items: center;

      h3 {
        font-family: "Quantico", sans-serif;
        font-weight: 400;
        font-size: 128px;
        line-height: 120%;
        /* border: 1.5px solid #4b2a85; */
        color: #f3f5ff;
        text-shadow: -1.5px 1.5px 0 #4b2a85, 1.5px 1.5px 0 #4b2a85,
          1.5px -1.5px 0 #4b2a85, -1.5px -1.5px 0 #4b2a85;
      }

      > div {
        flex: 1;

        h4 {
          font-family: "Fredoka", sans-serif;
          font-weight: 400;
          font-size: 32px;
          line-height: 120%;
          color: #4b2a85;
          margin-bottom: 16px;
        }

        p {
          font-weight: 400;
          font-size: 20px;
          line-height: 120%;
          color: #000000;
        }
      }
    }
  }

  @media (max-width: 900px) {
    > div {
      flex-direction: column;
      align-items: flex-start;

      > div {
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    h2 {
      text-align: left;
      font-size: 16px;
      line-height: 120%;
    }

    > div {
      background: transparent;
      padding: 0;
      row-gap: 16px;

      > div {
        h3 {
          font-size: 96px;
          line-height: 100%;
        }

        > div {
          h4 {
            margin-bottom: 8px;
            font-size: 20px;
            line-height: 120%;
          }

          p {
            font-size: 14px;
            line-height: 120%;
          }
        }
      }
    }
  }
`;

export const AboutUsTestimonySectionContainer = styled.section`
  h2 {
    font-family: "Fredoka", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    color: #4b2a85;
    margin-bottom: 41px;
    text-align: center;
    margin: 0 5% 41px;
  }

  > div {
    display: flex;
    column-gap: 23px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 23px;
    max-width: 1500px;
    margin: 0 auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 16px;
      line-height: 120%;
      text-align: left;
      margin-bottom: 24px;
    }
  }
`;

const whatWeOffer = [
  {
    title: "Best rates",
    content:
      "No matter the amount of gift card you want to trade we will offer you juicy rates",
  },
  {
    title: "Convenience",
    content: "Both our Website and mobile are very easy to use",
  },
  {
    title: "Top level support",
    content: "Our support teams are always available to help.",
  },
];

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Helmet>
        <title>1minutepay | About Us</title>
        <meta
          name="description"
          content="Get informed about gift cards, cryptocurrency,and much more. Read from
          our blog posts"
        />

        <meta
          name="og:description"
          content="Get informed about gift cards, cryptocurrency,and much more. Read from
          our blog posts"
        />

        <meta property="og:site_name" content="1minuepay" />
        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1minutepay" />
        <meta
          name="twitter:description"
          content="Get informed about gift cards, cryptocurrency,and much more. Read from
          our blog posts"
        />
      </Helmet>
      <AboutUsPageContainer>
        <StaticNavbar toggle={toggle} />

        <Sidebar isOpen={isOpen} toggle={toggle} />

        <h1>About Us</h1>

        <AboutHeroSectionContainer>
          <h2>Who are we?</h2>
          <p>
            1minutepay.com is a cash exchange platform for bitcoin and gift
            cards. We buy gift cards and bitcoins and in return we pay you the
            Naira Value in just one minute. Our reliable instant cash remittance
            has earned us repeated transactions from customers across the world.
          </p>

          <img src={About} alt="About Us" />
        </AboutHeroSectionContainer>

        <AboutStorySectionContainer>
          <h2>Our Story</h2>

          <AboutStatisticsCardContainer>
            <h3>Let the Numbers speak for Us.</h3>

            <div>
              <div>
                <h4>97,084</h4>
                <p>Happy Clients</p>
              </div>

              <div>
                <h4>1,632,394</h4>
                <p>Successful Transactions</p>
              </div>

              <div>
                <h4>4</h4>
                <p>Years of Service</p>
              </div>
            </div>
          </AboutStatisticsCardContainer>

          <AboutStatementContainer>
            <div>
              <h3>Mission statement</h3>

              <div>
                We strive to offer our customers the lowest possible prices, the
                best available selection, and the utmost convenience
              </div>
            </div>

            <div>
              <h3>Vision statement</h3>

              <div>
                To be Earth's most customer-centric company, where customers can
                find and discover anything they might want to buy online
              </div>
            </div>
          </AboutStatementContainer>
        </AboutStorySectionContainer>

        <AboutUsOfferSectionContainer>
          <h2>What we offer</h2>
          <div>
            {whatWeOffer.map(({ title, content }, i) => (
              <div key={i}>
                <h3>{i + 1}</h3>

                <div>
                  <h4>{title}</h4>

                  <p>{content}</p>
                </div>
              </div>
            ))}
          </div>
        </AboutUsOfferSectionContainer>

        <AboutUsTestimonySectionContainer>
          <h2>What our customers say about us </h2>

          <div>
            {new Array(10).fill(0).map((_, i) => (
              <TestimonyCard key={i} />
            ))}
          </div>
        </AboutUsTestimonySectionContainer>
      </AboutUsPageContainer>
    </>
  );
};

export default AboutUs;
