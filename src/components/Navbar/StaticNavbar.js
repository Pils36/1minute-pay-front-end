import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { LogoIcon } from "../icons";
import { MenuBtn } from "./NavbarElements";
import OpenBtn from "../../assets/menu-open.svg";

export const StaticNavbarContainer = styled.nav`
  width: 90%;
  max-width: 1074px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 32px;

    li a {
      padding: 8px;
      display: block;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      text-transform: uppercase;
      color: rgba(30, 30, 30, 0.8);
      text-decoration: none;
      font-family: "Work Sans", sans-serif;

      &.active {
        color: #310e3a;
        border-bottom: 1px solid #000000;
      }
    }
  }

  @media (max-width: 767px) {
    a svg {
      width: 110px;
    }

    ul {
      display: none;
    }
  }
`;

export const StaticNavbar = ({ toggle }) => (
  <StaticNavbarContainer>
    <Link to="/">
      <LogoIcon />
    </Link>

    <ul>
      <li>
        <NavLink to="/">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <li>
        <a href="https://help.1minutepay.com">Help/FAQs</a>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </ul>

    <MenuBtn onClick={toggle}>
      <img src={OpenBtn} alt="logo" />
    </MenuBtn>
  </StaticNavbarContainer>
);
