import type { NextPage } from 'next';
import styled from 'styled-components';
import { MEDIA_SOCIAL_LINKS } from '../utils/constant';

const AnchorContainer = styled.section`
  text-align: center;
  & > a {
    color: var(--color-text-primary);
    display: inline;
    font-size: 2rem;
    margin: 10px;
  }
`;

const MediaSocial: NextPage = () => {
  return (
    <AnchorContainer>
      {MEDIA_SOCIAL_LINKS.map((aIcon) => (
        <a key={aIcon.href} href={aIcon.href} target='_blank' rel='noreferrer'>
          {aIcon.icon}
        </a>
      ))}
    </AnchorContainer>
  );
};

export default MediaSocial;
