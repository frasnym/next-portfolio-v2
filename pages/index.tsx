import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import Separator from '../components/separator';

const ThemeToggle = dynamic(() => import('../components/theme-toggle'), { ssr: false })

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: var(--nav-height);
  max-width: var(--max-width);
  margin: 0 auto;
  & > main {
    padding: 10px;
  }
`;

const Header = styled.header`
  text-align: center;
  & > div#titleContainer {
    display: flex;
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

const Blockquote = styled.div`
  background: var(--color-bg-toggle);
  text-align: center;
  font-size: 1.2rem;
  border-left: 5px solid var(--color-text-primary);
  margin: 1.5em;
  padding: 1.5em 0.7em 1em;
  quotes: "“" "”" "U+2018" "U+2019";
  & ::before {
    color: var(--color-text-primary);
    content: open-quote;
    font-size: 4em;
    line-height: 0;
    vertical-align: -0.4em;
  }
  & ::after {
    color: var(--color-text-primary);
    content: close-quote;
    font-size: 4em;
    line-height: 0;
    vertical-align: -0.6em;
  }
  & p {
    display: inline;
  }
`

const ContactSection = styled.div`
  text-align: center;
  font-size: 1.5rem;
`

const Home: NextPage = () => {
  return (
    <Container>
      <main>
        <ThemeToggle />
        <Header>
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
          <h2>Indonesian Software Engineer </h2>
        </Header>
        <Separator />
        <Blockquote>
          <p>Code. Travel. Eat.</p>
        </Blockquote>
        <Separator />
        <ContactSection>
          <p>
            I love building things with code {'&'} hopefully one day the results will pay for my trip to Switzerland..
          </p>
        </ContactSection>
      </main>
    </Container>
  )
}

export default Home
