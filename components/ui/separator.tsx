import type { NextPage } from 'next'
import styled from "styled-components";

const LineSeparator = styled.hr`
  margin: 3rem 0;
  border: 0; 
  height: 1px; 
  background-image: -webkit-linear-gradient(left, black, white, black);
  background-image: -moz-linear-gradient(left, black, white, black);
  background-image: -ms-linear-gradient(left, black, white, black);
  background-image: -o-linear-gradient(left, black, white, black); 
`

const Separator: NextPage = () => {
  return (
    <LineSeparator />
  )
}

export default Separator
