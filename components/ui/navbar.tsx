import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link';
import styled from "styled-components";
import BurgerMenu from '../navbar-ui/burger-menu';
const ThemeToggle = dynamic(() => import('../navbar-ui/theme-toggle'), { ssr: false })

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-bg-primary-transparent);
`

const NavMenu = styled.nav`
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
  & a {
    color: var(--color-text-primary);
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
    display: inline-block;
    padding: 0 0.5rem;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    & :hover {
      color: var(--color-bg-toggle);
    }
  }
`

const NavBar: NextPage = () => {
  return (
    <Container>
      <BurgerMenu />
      <NavMenu>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about-me"><a>About</a></Link>
        <Link href="/"><a>Skills</a></Link>
        <Link href="/"><a>Career</a></Link>
        <Link href="/"><a>Project</a></Link>
      </NavMenu>
      <ThemeToggle />
    </Container>
  )
}

export default NavBar
