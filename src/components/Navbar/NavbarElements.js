import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  // padding: 0.5rem 14%;
  z-index: 10;
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #ffffff;
`;

export const DownloadBtn = styled.div`
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  color: #ffffff;
  height: 56px;
  width: 254px;
  border-radius: 28px;
  background: #310e3a;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  // padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdcfc;
  }
  @media screen and (max-width: 426px) {
    padding: 0 1rem;
  }
`;

export const MenuBtn = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    padding: 0 1em;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0 31px;
  // margin-right: -24px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
