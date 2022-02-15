import type { NextPage } from 'next'
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-size: 1.5rem;
`

const Body: NextPage = () => {
  return (
    <section>
      <Container>
        <p>
          I love building things with code {'&'} hopefully one day the results will pay for my trip to Switzerland..
        </p>
      </Container>
    </section>
  )
}

export default Body
