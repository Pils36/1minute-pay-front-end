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

export const BlogPageContainer = styled(ContactUsPageContainer)`
  font-family: "Work Sans", sans-serif;
  min-height: 100vh;

  > p {
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    max-width: 793px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    color: rgba(30, 30, 30, 0.8);
    margin-bottom: 40px;
  }

  > button {
    display: block;
    margin: 50px auto 0;
    background: #6b7ed7;
    color: #fff;
    padding: 10px 20px;
    border-radius: 12px;
    border: none;
  }

  @media (max-width: 767px) {
    > p {
      font-size: 14px;
      line-height: 150%;
    }
  }
`;

export const BlogNavigationContainer = styled.div`
  width: 90%;
  max-width: 1074px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  column-gap: 20px;

  @media (max-width: 820px) {
    width: 100%;
    justify-content: flex-start;
    padding: 0 5%;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BlogNavigationButton = styled.button`
  width: 181px;
  height: 56px;
  border: 1px solid ${(props) => (props.isSelected ? "#310E3A" : "#989898")};
  border-radius: 24px;
  cursor: pointer;
  font-family: inherit;
  background: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${(props) => (props.isSelected ? "#310E3A" : "#989898")};

  @media (max-width: 820px) {
    flex: 0 0 auto;
  }
`;

export const BlogCardFlexContainer = styled.div`
  width: 90%;
  max-width: 1074px;
  margin: 63.52px auto 0;
  display: flex;
  justify-content: space-between;
  row-gap: 32px;
  flex-wrap: wrap;
`;

export const EmptyBlog = styled.div``;

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogCategories, setBlogCategories] = useState([]);
  const [blogs, setBlogs] = useState();
  const [filteredBlogs, setFilteredBlogs] = useState();
  const [currentChunk, setCurrentChunk] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [activeBlogCategory, setActiveBlogCategory] = useState("All blogs");

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

        const catRes = await client.getEntries({ content_type: "category" });
        const blogRes = await client.getEntries({ content_type: "blog" });

        setBlogCategories([
          "All blogs",
          ...catRes.items.map((cat) => cat.fields.name),
        ]);
        setBlogs(blogRes.items);
        const splitBlogs = [];

        for (let i = 0; i < blogRes.items.length; i += 10) {
          splitBlogs.push(blogRes.items.slice(i, i + 10));
        }
        setFilteredBlogs(splitBlogs);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredBlogs(
      activeBlogCategory === "All blogs"
        ? blogs
        : blogs.filter(
            (b) => b.fields.category.fields.name === activeBlogCategory
          )
    );
  }, [activeBlogCategory]);

  if (loading)
    return (
      <div className="loader-wrapper">
        <Lottie options={defaultOptions} width={200} height={200} />
      </div>
    );
  return (
    <>
      <Helmet>
        <title>1minutepay | Blog</title>
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
      <BlogPageContainer>
        <StaticNavbar toggle={toggle} />

        <Sidebar isOpen={isOpen} toggle={toggle} />

        <h2>BLOG</h2>

        <h1>1minutepay Blog</h1>

        <p>
          Get informed about gift cards, cryptocurrency,and much more. Read from
          our blog posts
        </p>

        <BlogNavigationContainer>
          {blogCategories.map((cat, i) => (
            <BlogNavigationButton
              key={i}
              isSelected={cat === activeBlogCategory}
              onClick={() => setActiveBlogCategory(cat)}
            >
              {cat}
            </BlogNavigationButton>
          ))}
        </BlogNavigationContainer>

        <BlogCardFlexContainer>
          {filteredBlogs.map(
            (chunk, i) =>
              i <= currentChunk &&
              chunk.map((blog, j) => <BlogCard key={j} blog={blog} />)
          )}
        </BlogCardFlexContainer>

        {currentChunk < filteredBlogs.length - 1 && (
          <button onClick={() => setCurrentChunk((chunk) => chunk + 1)}>
            Load more
          </button>
        )}
      </BlogPageContainer>
    </>
  );
};

export default Blog;
