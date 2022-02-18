import type { NextPage } from 'next'
import styled from 'styled-components';
import SkillsBox from '../components/code-page/skills-box';
import DefaultLayout from '../components/layouts/default-layout';
import { COLOR_PALLETES } from '../components/utils/contant';

const Container = styled.article`
  text-align: left;
  font-size: 1.2rem;
  & p {
    padding: 0.8rem 0.8rem 0 0.8rem;
  }
`;

const Code: NextPage = () => {
  return (
    <DefaultLayout title='Code'>
      <Container>
        <p>
          I have been in this programming field for more than 4 years.
          I have written a lot of code. Learn different programming languages along the way from either the frontend or the backend.
          Sometimes it&apos;s just a little tasting and always go deep into it if I feel comfortable using it.
        </p>
        <p>
          Now I&apos;ve decided to go more towards the backend.
          Therefore, I often use Golang and NodeJS in accordance with my work as a <b>backend developer</b>.
          <SkillsBox
            skills={['Golang', 'JavaScript', 'TypeScript', 'NodeJS', 'PHP', 'SQL', 'NoSQL', 'Redis', 'Firebase']}
            colorPalletes={COLOR_PALLETES[0]}
          />
        </p>
        <p>
          There was also a time when I suddenly got a project idea. To make it happen, of course I need frontend skills too, although not deep.
          I think it&apos;s enough to make a small application.
          <SkillsBox
            skills={['ReactJS', 'NextJS', 'Flutter', 'TailwindCSS']}
            colorPalletes={COLOR_PALLETES[1]}
          />
        </p>
        <p>
          And some honorable mentions. There are tools, architectures, best practices and more that help me when developing apps.
          <SkillsBox
            skills={['Git', 'Docker', 'Unit Testing', 'Message Queue', 'gRPC']}
            colorPalletes={COLOR_PALLETES[2]}
          />
        </p>
      </Container>
    </DefaultLayout>
  )
}

export default Code
