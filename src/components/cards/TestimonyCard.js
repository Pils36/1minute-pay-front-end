import styled from "styled-components";
import { StarIcon } from "../icons";
import About from "../../assets/about-us.png";

export const TestimonyCardContainer = styled.div`
  width: 288px;
  height: 234px;
  flex: 0 0 auto;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 24px 24px 0;

  > div:first-child {
    display: flex;
    column-gap: 4px;
    align-items: center;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #5b5b5b;
    margin: 24px 0;
  }

  > div:last-child {
    display: flex;
    column-gap: 8px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      object-position: 0 0;
    }

    > div:last-child {
      width: calc(100% - 56px);

      h4 {
        font-family: "Fredoka", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #1e1e1e;
        margin: 0;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #777777;
        margin: 0;
      }
    }
  }
`;

export const TestimonyCard = () => (
  <TestimonyCardContainer>
    <div>
      {new Array(5).fill(0).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>

    <p>I really love the app, selling gift card was very easy</p>

    <div>
      <img src={About} alt="Williams Briggs" />

      <div>
        <h4>Williams Briggs</h4>
        <p>Trader</p>
      </div>
    </div>
  </TestimonyCardContainer>
);
