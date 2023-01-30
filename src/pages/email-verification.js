import Logo from "../assets/logo-black.svg";
import { NavLink } from "../components/Navbar/NavbarElements";
import "../styles/passwordReset.scss";

const EmailVerification = () => {
    return (
        <main>
            <NavLink to="/">
                <img src={Logo} alt="logo" />
            </NavLink>

            <div className="reset-form-container">
                <h1>Confirmed! <img src="https://img.icons8.com/color/48/null/verified-account--v1.png" /></h1>
                <p>You have verified your email </p>
                <button className="submit-reset-btn" onClick={() => window.location.href = "/"}>Go Home</button>
                <div className="reset-password-footer-link">
                    <NavLink to="/">
                        <img src={Logo} alt="logo" />
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default EmailVerification;
