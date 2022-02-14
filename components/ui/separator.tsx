import type { NextPage } from 'next'
import styled from "styled-components";

const LineSeparator = styled.div`
  margin: 3rem 0;
  & > hr {
    width: 0%;
    min-width: 20%;
    max-width: 100%;
    margin: 0 auto;
    border: none;
    border-bottom: 2px solid var(--color-text-primary);
    position: relative;
    transition: box-shadow 200ms ease-in-out;
    box-shadow: 0px 0px 0px 0px var(--color-text-secondary);
  }
`

const Separator: NextPage = () => {
  return (
    <LineSeparator>
      <hr />
    </LineSeparator>
  )
}

export default Separator
