import { StaticNavbar } from "../components/Navbar/StaticNavbar";
import styled from "styled-components";
import { Input } from "../components/form/Input";
import { Textarea } from "../components/form/Textarea";
import {
  ChatIcon,
  MailIcon,
  PinIcon,
  PlayStoreIcon,
} from "../components/icons";
import Apple from "../assets/apple.svg";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/icons/social";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { validateContactUs } from "../utils/validate/validateContactUs";
import axios from "axios";
import { BASE_URL } from "../lib/config";
import { message as antdMessage } from "antd";
import { ButtonLoader } from "../components/ButtonLoader";
import { validateName } from "../utils/validate/validateName";
import { validateEmail } from "../utils/validate/validateEmail";
import { validatePhoneNumber } from "../utils/validate/validatePhoneNumber";
import { validateText } from "../utils/validate/validateText";
import { RE_DIGIT } from "../constants/RE_DIGIT";
import { capitalizeText } from "../utils/validate/capitalizeText";

export const ContactUsPageContainer = styled.div`
  background: #f1f2f5;
  padding: 64px 0 126px;

  > h2 {
    margin: 32px 0 40px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #777777;
    font-family: "Work Sans", sans-serif;
  }

  > h1 {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #4b2a85;
    font-family: "Fredoka", sans-serif;
  }

  @media (max-width: 767px) {
    > h2 {
      display: none;
    }

    > h1 {
      font-size: 20px;
      line-height: 120%;
      margin: 39px 0 24px;
    }
  }
`;

export const ContactUsContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 64px;
  width: 90%;
  max-width: 1074px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;

  > div:first-child {
    width: calc(100% - 551px);
    h3 {
      font-family: "Fredoka", sans-serif;
      font-weight: 500;
      font-size: 32px;
      line-height: 150%;
      color: #333333;
    }

    > p {
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: rgba(30, 30, 30, 0.8);

      span {
        color: #6b7ed6;
      }
    }

    form > button {
      height: 64px;
      width: 100%;
      margin-top: 64px;
      background: #4b2a85;
      border-radius: 26px;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: #ffffff;
    }
  }

  > div:last-child {
    width: 487px;
    background: #f8f8f8;
    border-radius: 8px;
    padding: 32px 32px 92px;
    height: fit-content;

    h3 {
      font-family: "Fredoka", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: #4b2a85;
      margin-bottom: 40px;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      row-gap: 32px;
    }

    > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #777777;
      margin-top: 105px;
    }

    > div:last-child {
      display: flex;
      align-items: center;
      column-gap: 24px;
    }
  }

  @media (max-width: 1100px) {
    > div:first-child {
      width: 439px;
    }

    > div:last-child {
      width: calc(100% - 469px);
    }
  }

  @media (max-width: 930px) {
    flex-direction: column;
    row-gap: 40px;

    > div:first-child,
    > div:last-child {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    > div:first-child {
      h3 {
        font-size: 20px;
        line-height: 150%;
        margin-bottom: 16px;
      }

      > p {
        font-size: 14px;
        line-height: 150%;
      }

      form > button {
        border-radius: 16px;
        margin-top: 40px;
      }
    }

    > div:last-child {
      padding: 24px 24px 51px;
      h3 {
        font-size: 16px;
        line-height: 150%;
        margin-bottom: 24px;
      }

      > div:nth-child(2) {
        row-gap: 24px;
      }

      > p {
        margin: 56px 0 16px;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
      }

      > div:last-child {
        justify-content: center;

        svg {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;

export const ContactInfoContainer = styled.div`
  max-width: 374px;
  display: flex;
  column-gap: 24px;

  > div:last-child {
    width: calc(100% - 56px);

    h4 {
      font-weight: 500;
      font-size: 20px;
      line-height: 18px;
      color: #310e3a;
      margin-bottom: 16px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #000000;
      margin-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    column-gap: 16px;

    svg {
      width: 24px;
      height: 24px;
    }

    > div:last-child {
      width: calc(100% - 40px);

      h4 {
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 8px;
      }

      p {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }
`;

export const ContactAppDownload = styled.div`
  width: 90%;
  max-width: 1074px;
  margin: 64px auto 0;

  > div {
    width: calc(100% - 551px);

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 32px;
    }

    > div:last-child {
      display: flex;
      column-gap: 24px;
      margin-top: 32px;

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
  }

  @media (max-width: 1100px) {
    > div {
      width: 439px;
    }
  }

  @media (max-width: 930px) {
    > div {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    > div {
      p {
        text-align: center;
        font-size: 14px;
        line-height: 150%;
      }
    }
  }

  @media (max-width: 475px) {
    > div > div:last-child {
      flex-direction: column;
      row-gap: 24px;
      padding: 0;

      a {
        flex: 0 0 auto;
      }
    }
  }
`;

const socialLinks = [
  { link: "https://facebook.com", icon: <FacebookIcon /> },
  { link: "https://instagram.com", icon: <InstagramIcon /> },
  { link: "https://twitter.com", icon: <TwitterIcon /> },
  { link: "https://linkedin.com", icon: <LinkedinIcon /> },
];

const contactInfo = [
  {
    icon: <PinIcon />,
    title: "Pay us a visit",
    text: "23, Afolabi Close, Opebi Road, Ikeja, Lagos",
  },
  {
    icon: <MailIcon />,
    title: "Send us a mail",
    text: "Our friendly team is here to help you. Send a mail to 1minutepay@gmail.com",
  },
  {
    icon: <ChatIcon />,
    title: "Chat with our Experts",
    text: "+23436364747 (WhatsApp)",
  },
];

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  /** FORM VALUES */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  /** LOADING STATE */
  const [isLoading, setIsLoading] = useState(false);

  /** ERROR STATES */
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [error, setError] = useState(null);

  /** success state */
  const [success, setSuccess] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneNumberChange = (evt) => {
    const val = evt.target.value.split(",").join("");

    if (!RE_DIGIT.test(val) && val !== "") return;

    setPhoneNumber(val);
  };

  /** INPUT BLUR HANDLERS
   * i.e. when user leaves/removes focus on the input fields
   */
  const handleFirstNameBlur = () => {
    const { isValid, error } = validateName(firstName.trim());
    if (!isValid && error) setFirstNameError(error);
  };

  const handleLastNameBlur = () => {
    const { isValid, error } = validateName(lastName.trim());
    if (!isValid && error) setLastNameError(error);
  };

  const handleEmailBlur = () => {
    const { isValid, error } = validateEmail(email.trim());
    if (!isValid && error) setEmailError(error);
  };

  const handlePhoneNumberBlur = () => {
    const { isValid, error } = validatePhoneNumber(phoneNumber.trim());
    if (!isValid && error) setPhoneNumberError(error);
  };

  const handleMessageBlur = () => {
    const { isValid, error } = validateText(message.trim());
    if (!isValid && error) setMessageError(error);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  /** SUBMIT HANDLER
   * when the user clicks submit button or presses enter in any field
   */
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    /** handle field validations */
    if (!isLoading) {
      const { isValid, error } = validateContactUs({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phoneNumber: phoneNumber.trim(),
        message: message.trim(),
      });

      if (!isValid) {
        if (error?.firstName) setFirstNameError(error.firstName);
        if (error?.lastName) setLastNameError(error.lastName);
        if (error?.email) setEmailError(error.email);
        if (error?.phoneNumber) setPhoneNumberError(error.phoneNumber);
        if (error?.message) setMessageError(error.message);
      } else {
        try {
          setIsLoading(true);

          let body = {
            firstName: capitalizeText(firstName.trim()),
            lastName: capitalizeText(lastName.trim()),
            email: email.trim().toLowerCase(),
            phoneNumber: `234${phoneNumber.trim().slice(1)}`,
            message: message.trim(),
          };

          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const { data } = await axios.post(
            `${BASE_URL}/contactus`,
            body,
            config
          );

          if (data) {
            antdMessage.success("Message submitted");
            setIsLoading(false);
            clearForm();
          }
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          setIsLoading(false);
          antdMessage.error(message);
        }
      }
    }
  };

  return (
    <ContactUsPageContainer>
      <StaticNavbar toggle={toggle} />

      <Sidebar isOpen={isOpen} toggle={toggle} />

      <h2>CONTACT</h2>

      <h1>Contact us</h1>

      <ContactUsContentContainer>
        <div>
          <h3>Send us a message</h3>

          <p>
            Please don't hesitate to get in touch with us using the form below.
            Our team typically responds within one hour during business hours.
            If your matter is urgent, please feel free to use our live chat
            feature or call us directly at <span>+2348138176064</span>.
            We're here to help!
          </p>

          <form onSubmit={handleSubmit}>
            <Input
              placeholder="First Name"
              label="Your first name"
              id="contact_us_first_name"
              value={firstName}
              onChange={(evt) => setFirstName(evt.target.value)}
              onFocus={() => firstNameError && setFirstNameError(null)}
              error={firstNameError}
              onBlur={handleFirstNameBlur}
              disabled={isLoading}
            />

            <Input
              placeholder="Last Name"
              label="Your last name"
              id="contact_us_last_name"
              value={lastName}
              onChange={(evt) => setLastName(evt.target.value)}
              onFocus={() => lastNameError && setLastNameError(null)}
              error={lastNameError}
              onBlur={handleLastNameBlur}
              disabled={isLoading}
            />

            <Input
              placeholder="Email address"
              id="contact_us_email"
              label="Email address"
              inputMode="email"
              x-autocompletetype="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              onFocus={() => emailError && setEmailError(null)}
              error={emailError}
              onBlur={handleEmailBlur}
              disabled={isLoading}
            />

            <Input
              id="contact_phone_number"
              placeholder="enter phone number"
              label="Phone number"
              mt={16}
              inputMode="numeric"
              maxLength={11}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onFocus={() => phoneNumberError && setPhoneNumberError(null)}
              error={phoneNumberError}
              onBlur={handlePhoneNumberBlur}
              disabled={isLoading}
            />

            <Textarea
              placeholder="Type your message"
              label="Message"
              id="contact_us_message"
              value={message}
              onChange={(evt) => setMessage(evt.target.value)}
              onFocus={() => messageError && setMessageError(null)}
              error={messageError}
              onBlur={handleMessageBlur}
              disabled={isLoading}
            />

            <button>{isLoading ? <ButtonLoader /> : "Submit"}</button>
          </form>
        </div>

        <div>
          <h3>Say hello to us</h3>

          <div>
            {contactInfo.map(({ icon, title, text }, i) => (
              <ContactInfoContainer key={i}>
                {icon}

                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </ContactInfoContainer>
            ))}
          </div>

          <p>Connect with us on social media</p>

          <div>
            {socialLinks.map(({ link, icon }, i) => (
              <a key={i} href={link} target="_blank" rel="noreferrer noopener">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </ContactUsContentContainer>

      <ContactAppDownload>
        <div>
          <p>
            Ready to take charge of your gift card buying and selling? Download
            the 1minutepay app and get started today! Our professional team is
            here to support you every step of the way
          </p>

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
              <img src={Apple} alt="" className="mx-2" />
              App store
            </a>
          </div>
        </div>
      </ContactAppDownload>
    </ContactUsPageContainer>
  );
};

export default ContactUs;
