import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import Body from '../components/home-page/body';
import Header from '../components/home-page/header';
import MediaSocial from '../components/home-page/media-social';
import Quote from '../components/home-page/quote';
import Menu from '../components/ui/menu';
import Separator from '../components/ui/separator';

const ThemeToggle = dynamic(() => import('../components/ui/theme-toggle'), { ssr: false })

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





const Home: NextPage = () => {
  return (
    <Container>
      <main>
        <Header />
        <Separator />
        <Quote />
        <Separator />
        <Body />
        <MediaSocial />
      </main>
      <ThemeToggle />
      <Menu />
    </Container>
  )
}

export default Home
