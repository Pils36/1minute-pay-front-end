import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import moment from "moment";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import lottieLoader from "../assets/lottie/loader.json";
import { BlogCard } from "../components/cards/BlogCard";
import { StaticNavbar } from "../components/Navbar/StaticNavbar";
import Sidebar from "../components/Sidebar";
import { BlogPageContainer } from "./blog";
import Apple from "../assets/apple.svg";
import { AppleIcon, PlayStoreIcon } from "../components/icons";

export const BlogItemPageContainer = styled(BlogPageContainer)`
  > h2 {
    max-width: 154px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
    margin: 32px auto 40px;
  }

  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
    color: #310e3a;
    width: 90%;
    max-width: 1074px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 24px;
      line-height: 140%;
      margin-top: 24px;
    }
  }
`;

export const BlogItemContentContainer = styled.div`
  width: 90%;
  max-width: 1074px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;

  > div:first-child {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;

    > p:first-child {
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: rgba(0, 0, 0, 0.7);
      margin-bottom: 0;
    }

    > div:last-child {
      display: flex;
      align-items: center;
      column-gap: 32px;
      font-weight: 500;
      font-size: 14px;
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

      > div:last-child {
        color: #777777;
      }
    }
  }

  > img:nth-child(2) {
    object-fit: cover;
    object-position: 0 0;
    border-radius: 24px;
    margin: 40px 0 64px;
  }

  > div:nth-child(3) {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #000000;

    a {
      color: #6b7ed6;
      text-decoration: none;
    }

    img {
      width: 100%;
      margin: 20px 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin-top: 20px;
      color: #310e3a;
      font-family: "Fredoka", sans-serif;
      font-weight: 500;

      b {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 767px) {
    > div:first-child {
      > p:first-child {
        font-size: 12px;
        line-height: 150%;
      }

      > div:last-child {
        column-gap: 16px;

        > div:first-child {
          font-size: 12px;
          line-height: 150%;
          height: 26px;
          min-width: 94px;
        }

        > div:last-child {
          font-size: 12px;
          line-height: 150%;
        }
      }
    }

    > img:nth-child(2) {
      /* height: 217px; */
      margin: 24px 0 39px;
    }

    > div:last-child {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
    }
  }

  @media (max-width: 420px) {
    > div:first-child {
      flex-direction: column-reverse;
      row-gap: 10px;
      align-items: flex-start;
    }
  }
`;

export const RelatedContainer = styled.div`
  width: 90%;
  max-width: 1074px;
  margin: 80px auto 0;

  > h2 {
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    margin-bottom: 16px;
    color: #310e3a;
    font-family: "Fredoka", sans-serif;
  }

  > p {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    font-family: "Work Sans", sans-serif;
    color: #000000;
  }

  > div:last-child {
    margin: 40px auto 0;
    display: flex;
    justify-content: space-between;
    row-gap: 32px;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    > h2 {
      font-size: 24px;
      line-height: 150%;
      margin-bottom: 8px;
    }

    > p {
      font-size: 14px;
      line-height: 150%;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    > h2,
    > p,
    > div:last-child {
      padding: 0 5%;
    }

    > div:last-child {
      flex-wrap: nowrap;
      justify-content: flex-start;
      column-gap: 11.34px;
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const BlogDownloadLinks = styled.div`
  margin: 50px auto 0;
  width: 90%;
  max-width: 1074px;
  > div {
    max-width: 551px;
    display: flex;
    column-gap: 24px;

    a {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 8px;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #ffffff;
      height: 56px;
      background: #310e3a;
      border-radius: 32px;
      text-decoration: none;
    }
  }

  @media (max-width: 400px) {
    > div {
      flex-direction: column;
      row-gap: 24px;

      a {
        flex: 0 0 auto;
      }
    }
  }
`;

const BlogItem = () => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [blog, setBlog] = useState();
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const { slug } = useParams();
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const client = createClient({
          space: "arabq5oiyplh",
          environment: "master",
          accessToken: "ntwe_lNDyy4dF-dBHcwKR0joVt0KjkQg8_Kh8HQ-nMs",
        });

        const blogRes = await client.getEntries({ content_type: "blog" });

        const blogItem = blogRes.items.filter((bl) => bl.fields.slug === slug);

        if (!blogItem.length) {
          navigate("/not-found");
        } else {
          setBlog(blogItem[0]);
          setRelatedBlogs(
            blogRes.items.filter(
              (bl) =>
                bl.fields.category.fields.name ===
                  blogItem[0].fields.category.fields.name &&
                bl.fields.slug !== blogItem[0].fields.slug
            )
          );
          setLoading(false);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  if (loading)
    return (
      <div className="loader-wrapper">
        <Lottie options={defaultOptions} width={200} height={200} />
      </div>
    );
  return (
    <>
      {/* <Helmet>
        <title>{blog?.fields?.title ?? "1minutepay | Blog"}</title>
        <meta
          name="description"
          content={
            blog?.fields?.snippet ??
            "Get informed about gift cards, cryptocurrency,and much more. Read from our blog posts"
          }
        />

        <meta
          name="og:description"
          content={
            blog?.fields?.snippet ??
            "Get informed about gift cards, cryptocurrency,and much more. Read from our blog posts"
          }
        />

        <meta property="og:site_name" content="1minuepay" />
        twitter card
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1minutepay" />
        <meta
          name="twitter:description"
          content={
            blog?.fields?.snippet ??
            "Get informed about gift cards, cryptocurrency,and much more. Read from our blog posts"
          }
        />
      </Helmet> */}
      <BlogItemPageContainer>
        <StaticNavbar toggle={toggle} />

        <Sidebar isOpen={isOpen} toggle={toggle} />

        <h2>BLOG / {blog.fields.title}</h2>

        <h1>{blog.fields.title}</h1>

        <BlogItemContentContainer
          catBg={blog.fields.category.fields.backgroundColor}
          catColor={blog.fields.category.fields.textColor}
        >
          <div>
            <p>{blog.fields.duration}mins read</p>

            <div>
              <div>{blog.fields.category.fields.name}</div>
              <span />
              <div>{moment(blog.sys.createdAt).format("Do MMMM, YYYY")}</div>
            </div>
          </div>

          <img
            alt={blog.fields.title}
            // height={420}
            src={`https:${blog.fields.thumbnail.fields.file.url}`}
            width="100%"
          />

          <div>
            {documentToReactComponents(blog.fields.content, {
              renderNode: {
                "embedded-asset-block": (node) => (
                  <img
                    src={`https:${node.data.target.fields.file.url}`}
                    alt={blog.title}
                  />
                ),
              },
            })}
          </div>
        </BlogItemContentContainer>

        <BlogDownloadLinks>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.oneminutepay"
              target="_blank"
              rel="noreferrer noopener"
            >
              <PlayStoreIcon /> Google play
            </a>

            <a
              href="https://apps.apple.com/ng/app/1minutepay-com/id1637654016"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AppleIcon />
              App store
            </a>
          </div>
        </BlogDownloadLinks>

        {relatedBlogs.length ? (
          <RelatedContainer>
            <h2>Related post</h2>
            <p>Read related post to what you have read</p>

            <div>
              {relatedBlogs.map((blog, i) => (
                <BlogCard isRelated blog={blog} key={i} />
              ))}
            </div>
          </RelatedContainer>
        ) : null}
      </BlogItemPageContainer>
    </>
  );
};

export default BlogItem;
