import type { NextPage } from 'next'
import styled from "styled-components";

const Blockquote = styled.section`
  border-radius: 5px;
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

const Quote: NextPage = () => {
  return (
    <Blockquote>
      <p>Code. Travel. Eat.</p>
    </Blockquote>
  )
}

export default Quote
