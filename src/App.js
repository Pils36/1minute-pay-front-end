import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import PasswordReset from "./pages/password-reset";
import EmailVerification from "./pages/email-verification";
import NotFound from "./pages/not-found";
import ContactUs from "./pages/contact-us";
import Blog from "./pages/blog";
import BlogItem from "./pages/blog-item";
import { HelmetProvider } from "react-helmet-async";
import AboutUs from "./pages/about-us";

function App() {
  let navigate = useNavigate();

  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogItem />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <Header />
      <Coins />
      <CoinCarousel />
      <Download />
      <Footer /> */}
      </div>
    </HelmetProvider>
  );
}

export default App;
