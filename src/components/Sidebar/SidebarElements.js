import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #6B7ED6;
  display: grid;
  align-items: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')}
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  display: flex ;
  padding: 2em 1em;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  cursor: pointer;
  outline: none;
  padding: 2em;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding: 0;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }

  @media screen and (max-width: 375px) {
    grid-template-rows: repeat(6, 60px);
    padding-top: 6em;
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  font-family: Fredoka;
  font-size: 40px!important;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 0 1em;

  &:hover {
    color: #4B2A85;
    transition: 0.2s ease-in-out;
  } 
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1em;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    bbackground: #fff;
    color: #010606;
  }
`