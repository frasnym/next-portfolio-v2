import type { NextPage } from 'next'
import styled from 'styled-components';
import DefaultLayout from '../components/layouts/default-layout';
import Emoji from '../components/ui/emoji';

const Container = styled.article`
  text-align: left;
  font-size: 1.2rem;
  & p {
    padding: 10px 0;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  & img {
    height: 8rem;
    padding: 0 0.8rem;
    border-radius: 1rem;
  }
  & text {
    font-size: 1rem;
  }
`

const AboutMe: NextPage = () => {
  return (
    <DefaultLayout title='About Me'>
      <Container>
        <p><b>Hi! <Emoji symbol="👋" /></b>, I love building new things with code and traveling with the earnings.</p>
        <p>The first time I knew about programming was in my college days. The first programming language I knew was <b>PHP</b> and since then I started building websites with it.</p>
        <p>I got my first job as a full-stack developer after 1 year I graduated from college. At that time it was difficult to get a job as a programmer. <br /><i>FYI</i>, I live in Bali; One of the islands in Indonesia. A suitable place if you want to go on vacation in my opinion. Therefore, most of the job opportunities are opened for tourism, not technology.</p>
        <ImageContainer>
          <img src='https://a.cdn-hotels.com/gdcs/production75/d966/8994658f-13ad-4106-bde4-856450359f47.jpg' alt='Photo of Bali 1' />
          <img src='https://media.timeout.com/images/105240189/image.jpg' alt='Photo of Bali 2' />
          <br />
          <text>This is some photos of Bali</text>
        </ImageContainer>
        <p>After 3 years working with PHP, I want to develop my career and start working with <b>Javascript</b> and <b>Golang</b> programming languages. I started working with a big team and learned a lot of new things.</p>
        <p>Until now, I have been working in programming for about 4 years. I'm used to working in teams, working with senior developers who always help raise my standart  for applications that can be used by wider community.</p>
        <p>Lastly, if you need help building something to achieve your goals with code or just want to know more about me. Feel free to contact me on any of my social media <Emoji symbol='😉' />.</p>
      </Container>
    </DefaultLayout>
  )
}

export default AboutMe
