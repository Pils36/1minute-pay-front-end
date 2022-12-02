import { useState } from "react";
import Logo from "../assets/logo-black.svg";
import { NavLink } from "../components/Navbar/NavbarElements";
import "../styles/passwordReset.scss";
import ResetSuccess from "../components/modals/reset-success";
import PasswordInput from "../components/PasswordInput";
import { validatePassword } from "../utils/validate/validatePassword";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const PasswordReset = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const userId = searchParams.get("userId");

  /** tracks when user enters new password to enable reenter field */
  const [hasEnteredPassword, setHasEnteredPassword] = useState(false);

  /** FORM VALUES */
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /** LOADING STATE */
  const [isLoading, setIsLoading] = useState(false);

  /** SUCCESS STATE */
  const [success, setSuccess] = useState(null);

  /** ERROR STATES */
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [error, setError] = useState(null);

  /** Validate password field on change */
  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
    const { isValid, error } = validatePassword(evt.target.value);
    if (!isValid && error) {
      setPasswordError(error);
    } else {
      passwordError && setPasswordError(null);
    }
  };

  const handleConfirmPasswordChange = (evt) => {
    error && setError(null);
    setConfirmPassword(evt.target.value);

    if (evt.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      confirmPasswordError && setConfirmPasswordError(null);
    }
  };

  /** INPUT BLUR HANDLERS
   * i.e. when user leaves/removes focus on the input fields
   */
  const handlePasswordBlur = () => {
    const { isValid, error } = validatePassword(password);
    if (!isValid && error) setPasswordError(error);
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    }
  };

  const handlePasswordEntered = (evt) => {
    evt.preventDefault();
    if (!isLoading) {
      const { isValid, error } = validatePassword(password);

      if (!isValid && error) {
        setPasswordError(error);
      } else {
        passwordError && setPasswordError(null);
        setHasEnteredPassword(true);
      }
    }
  };

  /** SUBMIT HANDLER
   * when the user clicks save new password button or presses enter in reenter field
   */
  const handleReset = async (evt) => {
    evt.preventDefault();

    /** handle field validation */
    if (!isLoading) {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        try {
          setIsLoading(true);

          const body = {
            newPassword: password,
            confirmPassword,
            userId,
          };

          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const { data } = await axios.post(
            "https://api.1minutepay.com/api/v1/auth/reset-password",
            body,
            config
          );

          if (data) {
            setSuccess(true);
            setIsLoading(false);
          }
        } catch (err) {
          setIsLoading(false);
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          setError(message);
          console.error(error);
        }
      }
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>

      <div className="reset-form-container">
        {userId ? (
          <>
            <div>
              <h1>Reset Password</h1>

              <p>
                Please create a new password to access your 1minutepay account
              </p>

              <div>
                {error && <div className="error-text">{error}</div>}
                <form onSubmit={handlePasswordEntered}>
                  <PasswordInput
                    placeholder="Create New Password"
                    id="reset_new_password"
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={() => passwordError && setPasswordError(null)}
                    error={passwordError}
                    onBlur={handlePasswordBlur}
                    disabled={isLoading || hasEnteredPassword}
                  />
                </form>
                <form onSubmit={handleReset}>
                  <PasswordInput
                    // disabled={!hasEnteredPassword || isLoading}
                    placeholder="Type Password again"
                    id="confirm_new_password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onFocus={() =>
                      confirmPasswordError && setConfirmPasswordError(null)
                    }
                    error={confirmPasswordError}
                    onBlur={handleConfirmPasswordBlur}
                  />

                  <button className="submit-reset-btn">
                    {isLoading ? (
                      <div className="button-loader" />
                    ) : (
                      "Save New Password"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {success && <ResetSuccess onClose={() => setSuccess(false)} />}
          </>
        ) : (
          <h1>Invalid User</h1>
        )}

        <div className="reset-password-footer-link">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default PasswordReset;
