import type { NextPage } from 'next'
import { useState } from 'react';
import { FaHamburger, FaTimes, FaUserAstronaut } from 'react-icons/fa';
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
`

const ShowHideBtn = styled.div<{ showMenu: boolean }>`
  background: var(--color-bg-toggle);
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 3rem;
  padding: 1rem;
  overflow: hidden;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  & > .burgerBtn {
    position: absolute;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transform: ${(p) =>
    p.showMenu
      ? "translateY(-50px)"
      : "translateY(0)"};
    opacity: ${(p) =>
    p.showMenu
      ? "0"
      : "1"};
  }
  & > .timesBtn {
    position: absolute;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transform: ${(p) =>
    !p.showMenu
      ? "translateY(-50px)"
      : "translateY(0)"};
    opacity: ${(p) =>
    !p.showMenu
      ? "0"
      : "1"};
  }
`

const Item = styled.div<{ showMenu: boolean }>`
  background: var(--color-bg-toggle);
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  font-size: 0.8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  & :nth-child(1) {
    ${(p) => p.showMenu ? "top: 1rem; left: 6rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }
  & :nth-child(2) {
    ${(p) => p.showMenu ? "top: 4rem; left: 2.5rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  & :nth-child(3) {
    ${(p) => p.showMenu ? "top: 6rem; left: 6rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  & :nth-child(4) {
    ${(p) => p.showMenu ? "top: 8rem; left: 0.5rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 041s;
    transition-delay: 0.4s;
  }
`

const Menu: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Container>
      <Item showMenu={showMenu}>About</Item>
      <Item showMenu={showMenu}>Skills</Item>
      <Item showMenu={showMenu}>Career</Item>
      <Item showMenu={showMenu}>Project</Item>
      <ShowHideBtn showMenu={showMenu}>
        <FaHamburger className='burgerBtn' onClick={() => setShowMenu(!showMenu)} />
        <FaTimes className='timesBtn' onClick={() => setShowMenu(!showMenu)} />
      </ShowHideBtn>
    </Container>
  )
}

export default Menu
