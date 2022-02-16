import type { NextPage } from 'next'
import styled from "styled-components";

const Container = styled.footer`
  text-align: right;
  padding: 0.5rem 0 1rem;
`

const Footer: NextPage = () => {
  return (
    <Container>
      <strong>FrasNym</strong> &copy; {new Date().getFullYear()}
    </Container>
  )
}

export default Footer
