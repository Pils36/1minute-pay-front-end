import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../assets/logo.svg";
import Apple from "../assets/apple.svg";
import "../styles/notFound.scss";
import { LogoIcon, NotFoundIcon, PlayStoreIcon } from "../components/icons";

const NotFound = () => {
  return (
    <div className="not-found-page-container">
      <nav>
        <Link to={"/"}>
          <LogoIcon />
        </Link>
      </nav>

      <div className="not-found-content-container">
        <NotFoundIcon />

        <h1>Oops!</h1>

        <p className="not-found-subtitle">
          It looks like the page you're looking for isn't available. Maybe it
          was moved or deleted. Please return to our link &gt;&gt;homepage or
          &gt;&gt; link contact us for assistance. We'll do our best to help you
          find what you're looking for.
        </p>
        <Link to={"/"}>Go to home</Link>

        <p className="not-found-download-text">
          Ready to take charge of your gift card buying and selling? Download
          the 1minutepay app and get started today! Our professional team is
          here to support you every step of the way
        </p>

        <div>
          <a href="https://onelink.to/q5au2z">
            <PlayStoreIcon /> Google play
          </a>

          <a href="https://onelink.to/q5au2z">
            <img src={Apple} alt="" className="mx-2" />
            App store
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
