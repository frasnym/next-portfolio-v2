import styled from 'styled-components';
import { NextPage } from 'next';
import { ColorPallet } from '../../types';

type SkillsBoxProps = {
  skills: string[];
  colorPallets: ColorPallet[];
};

const Container = styled.div<{ colorPallets: ColorPallet[] }>`
  margin: 0.5rem 0 0 2rem;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  & div {
    display: inline-block;
    padding: 1rem;
    margin: 0.2rem;
    cursor: default;
    & :hover {
      transform: rotate(10deg);
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.17), 0 4px 15px rgba(0, 0, 0, 0.15);
    }
  }
  ${(p) =>
    p.colorPallets.map(
      (color, index) => `& div:nth-child(${index + 1}) {
      background: ${color.background};
      color: ${color.color};
    }`
    )}
`;

const SkillsBox: NextPage<SkillsBoxProps> = function ({
  skills,
  colorPallets,
}) {
  return (
    <Container colorPallets={colorPallets}>
      {skills.map((skill) => (
        <div key={skill}>{skill}</div>
      ))}
    </Container>
  );
};

export default SkillsBox;
