import type { NextPage } from 'next'
import styled from "styled-components";

const Container = styled.header`
  text-align: center;
  & > div#titleContainer {
    display: flex;
  }
  & img#indonesianFlag {
    display: inline;
    width: 1.5rem;
    vertical-align: middle;
  }
`

const HeaderTitle = styled.h1`
  flex: 1;
  align-self: center;
  line-height: 0.8;
  text-align: center;
  & > span {
    display: block;
  }
  & > span:first-of-type {
    font-size: 17vmin;
  }
  & > span:nth-of-type(2) {
    font-size: 10vmin;
  }
`

const HeaderImage = styled.div`
  flex: 1;
  & > img {
    min-width: 10rem;
    max-width: 100%;
    border-radius: 100%;
    padding: 2rem;
  }
`

const Header: NextPage = () => {
  return (
    <Container>
      <div id="titleContainer">
        <HeaderImage>
          <img
            src="/images/avatar.jpg"
            alt="Photos of FrasNym"
          />
        </HeaderImage>
        <HeaderTitle>
          <span>Fras</span>
          <span>Nym</span>
        </HeaderTitle>
      </div>
      <h2>
        Indonesian {' '}
        <img
          id="indonesianFlag"
          className="w-10 inline"
          src="images/flag-indonesia_1f1ee-1f1e9.png"
          alt="Flag of Indonesia Country"
        />
        {' '} Software Engineer </h2>
    </Container>
  )
}

export default Header
