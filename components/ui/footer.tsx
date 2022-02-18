import type { NextPage } from 'next'
import styled from "styled-components";
import { MEDIA_SOCIAL_LINKS } from '../utils/contant';

const Container = styled.footer`
  text-align: right;
  padding: 0.5rem 0 1rem;
  margin: 0 0.5rem;
  & a {
    padding: 0 0.2rem;
    vertical-align: middle;
  }
`
const Footer: NextPage = () => {
  return (
    <Container>
      <hr />
      {
        MEDIA_SOCIAL_LINKS.map(aIcon => {
          return (
            <a
              key={aIcon.href}
              href={aIcon.href}
              target="_blank"
              rel="noreferrer"
            >
              {aIcon.icon}
            </a>
          )
        })
      }
      | <b>FrasNym</b> &copy; {new Date().getFullYear()}
    </Container>
  )
}

export default Footer
