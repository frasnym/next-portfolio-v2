import type { NextPage } from 'next'
import Image from 'next/image';
import { Emoji } from 'react-component-utility';
import styled from 'styled-components';
import DefaultLayout from '../components/layouts/default-layout';

const Container = styled.article`
  text-align: left;
  font-size: 1.2rem;
  & p {
    padding: 10px 0;
  }
`;

const BaliContainer = styled.div`
  text-align: center;
  & > div {
    display: inline-block;
    padding: 0 0.8rem;
    & img {
      border-radius: 0.5rem;
    }
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
        <p>
          The first time I knew about programming was in my college days. 
          The first programming language I knew was <b>PHP</b> and since then I started building websites with it.
        </p>
        <p>
          I got my first job as a full-stack developer after 1 year I graduated from college. 
          At that time it was difficult to get a job as a programmer. <br /><i>FYI</i>, I live in Bali; One of the islands in Indonesia. 
          A suitable place if you want to go on vacation in my opinion. 
          Therefore, most of the job opportunities are opened for tourism, not technology.
        </p>
        <BaliContainer>
          <div><Image src='https://i.ibb.co/fYpKzSy/bali2.jpg' alt='Photo of Bali 1' height={128} width={160} /></div>
          <div><Image src='https://i.ibb.co/t3K0qGn/bali1.jpg' alt='Photo of Bali 2' height={128} width={160} /></div>
          <br />
          <text>This is some photos of Bali</text>
        </BaliContainer>
        <p>
          After 3 years working with PHP, I want to develop my career and start working with <b>Javascript</b> and <b>Golang</b> programming languages. 
          I started working with a big team and learned a lot of new things.
        </p>
        <p>
          Until now, I have been working in programming for about 4 years. 
          I&apos;m used to working in teams, working with senior developers who always help raise my standart for applications 
          that can be used by wider community.
        </p>
        <p>
          Lastly, if you need help building something to achieve your goals with code or just want to know more about me. 
          Feel free to contact me on any of my social media <Emoji symbol='😉' />.
        </p>
      </Container>
    </DefaultLayout>
  )
}

export default AboutMe
