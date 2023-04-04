import styled from "styled-components";
import BlogPlaceholder from "../../assets/blog-placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RightCaretIcon } from "../icons";
import { Link } from "react-router-dom";
import moment from "moment";

export const BlogCardContainer = styled.div`
  font-family: "Work Sans", sans-serif;
  width: calc(50% - 11.5px);

  img {
    object-fit: cover;
    object-position: 0 0;
    border-radius: 24px 24px 0 0;
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    column-gap: 16px;
    font-weight: 500;
    font-size: 14px;
    margin-top: 24px;
    line-height: 150%;

    > div:first-child {
      padding: 0 10px;
      min-width: 94px;
      height: 29px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.catBg ?? "#e4e8fc"};
      border-radius: 8px;
      color: ${(props) => props.catColor ?? "#6b7ed6"};
    }

    > span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #d9d9d9;
    }

    > div:nth-child(3) {
      color: #4b2a85;
    }

    > div:last-child {
      color: #777777;
    }
  }

  h4 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 16px 0 8px;
    height: 68px;
    font-family: "Fredoka", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #000000;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    height: 72px;
    margin-bottom: 24px;
    color: #000000;
  }

  a {
    width: 176px;
    height: 56px;
    border: 1px solid #4b2a85;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-decoration: none;
    color: #4b2a85;
  }

  @media (max-width: 930px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    > div:nth-child(2) {
      font-size: 9.01333px;
      line-height: 150%;
      column-gap: 10.3px;

      span {
        width: 5.15px;
        height: 5.15px;
      }

      > div:first-child {
        height: 19.15px;
        min-width: 60.52px;
      }
    }

    h4 {
      font-size: 15.4514px;
      line-height: 140%;
      height: 44px;
      margin: 10px 0 5px;
    }

    p {
      font-size: 10.301px;
      line-height: 150%;
      height: 45px;
      margin-bottom: 15px;
    }

    a {
      width: 113.31px;
      height: 36.05px;
      font-size: 10.301px;
      line-height: 150%;
      column-gap: 5.15px;

      svg {
        width: 15.45px;
        height: 15.45px;
      }
    }
  }

  @media (max-width: 500px) {
    ${(props) =>
      props.isRelated &&
      `
      width: 300px;
      flex: 0 0 auto;
      `}

    img {
      height: 193px;
    }
  }

  @media (max-width: 320px) {
    > div:nth-child(2) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 5px;

      span {
        display: none;
      }
    }
  }
`;

export const BlogCard = ({ isRelated, blog }) => (
  <BlogCardContainer
    isRelated={isRelated}
    catBg={blog.fields.category.fields.backgroundColor}
    catColor={blog.fields.category.fields.textColor}
  >
    <LazyLoadImage
      alt="Blog title"
      height={300}
      src={`https:${blog.fields.thumbnail.fields.file.url}`}
      width="100%"
    />

    <div>
      <div>{blog.fields.category.fields.name}</div>
      <span />
      <div>{blog.fields.duration} min read</div>
      <span />
      <div>{moment(blog.sys.createdAt).format("Do MMMM, YYYY")}</div>
    </div>

    <h4>{blog.fields.title}</h4>

    <p>{blog.fields.snippet}</p>

    <Link to={`/blog/${blog.fields.slug}`}>
      Read more <RightCaretIcon />
    </Link>
  </BlogCardContainer>
);
