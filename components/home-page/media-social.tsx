import type { NextPage } from 'next'
import styled from "styled-components";
import { FaTwitter, FaGithub, FaLinkedinIn, FaGooglePlay, FaRegEnvelope, FaDev } from 'react-icons/fa';

const anchorIcons = [
  {
    href: 'mailto:frastyawan.nym@gmail.com',
    icon: <FaRegEnvelope className="inline-block mr-6" />,
  },
  {
    href: 'https://www.linkedin.com/in/frasnym/',
    icon: <FaLinkedinIn className="inline-block mr-6" />,
  },
  {
    href: 'https://github.com/frasnym',
    icon: <FaGithub className="inline-block mr-6" />,
  },
  {
    href: 'https://twitter.com/frasnym',
    icon: <FaTwitter className="inline-block mr-6" />,
  },
  {
    href: 'https://dev.to/frasnym/',
    icon: <FaDev className="inline-block mr-6" />,
  },
  {
    href:
      'https://play.google.com/store/apps/developer?id=FrastyawanNym',
    icon: <FaGooglePlay className="inline-block mr-6" />,
  },
];

const AnchorContainer = styled.div`
  text-align: center;
  & > a {
    color: var(--color-text-primary);
    display: inline;
    font-size: 2rem;
    margin: 10px;
  }
`

const MediaSocial: NextPage = () => {
  return (
    <AnchorContainer>
      {
        anchorIcons.map(aIcon => (
          <a
            className="text-white text-3xl inline"
            key={aIcon.href}
            href={aIcon.href}
            target="_blank"
            rel="noreferrer"
          >
            {aIcon.icon}
          </a>
        ))
      }
    </AnchorContainer>
  )
}

export default MediaSocial
