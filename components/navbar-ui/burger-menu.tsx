import type { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import styled from "styled-components";

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
  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  & :hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
    transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  }
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
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  & :hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
    transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  }
  & :nth-child(1) {
    ${(p) => p.showMenu ? "top: 1rem; left: 6rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }
  & :nth-child(2) {
    ${(p) => p.showMenu ? "top: 4rem; left: 3rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  & :nth-child(3) {
    ${(p) => p.showMenu ? "top: 5rem; left: 7rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  & :nth-child(4) {
    ${(p) => p.showMenu ? "top: 7rem; left: 0.5rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 04s;
    transition-delay: 0.4s;
  }
  & :nth-child(5) {
    ${(p) => p.showMenu ? "top: 8rem; left: 4.5rem; opacity: 1;" : "top: 0; left: 0; opacity: 0;"}
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-transition-delay: 05s;
    transition-delay: 0.5s;
  }
`

const BurgerMenu: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Item showMenu={showMenu}>
        <Link href="/"><a>Home</a></Link>
      </Item>
      <Item showMenu={showMenu}>
        <Link href="/about-me"><a>About</a></Link>
      </Item>
      <Item showMenu={showMenu}>
        <Link href="/code"><a>Code</a></Link>
      </Item>
      {/* <Item showMenu={showMenu}>Career</Item>
      <Item showMenu={showMenu}>Project</Item> */}
      <ShowHideBtn showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
        <FaHamburger className='burgerBtn' />
        <FaTimes className='timesBtn' />
      </ShowHideBtn>
    </>
  )
}

export default BurgerMenu
