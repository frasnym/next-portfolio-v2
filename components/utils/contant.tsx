import { FaTwitter, FaGithub, FaLinkedinIn, FaGooglePlay, FaRegEnvelope, FaDev } from 'react-icons/fa';

export const MEDIA_SOCIAL_LINKS = [
  {
    href: 'mailto:frastyawan.nym@gmail.com',
    icon: <FaRegEnvelope />,
  },
  {
    href: 'https://www.linkedin.com/in/frasnym/',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'https://github.com/frasnym',
    icon: <FaGithub />,
  },
  {
    href: 'https://twitter.com/intent/follow?screen_name=frasnym',
    icon: <FaTwitter />,
  },
  {
    href: 'https://dev.to/frasnym/',
    icon: <FaDev />,
  },
  {
    href:
      'https://play.google.com/store/apps/developer?id=FrastyawanNym',
    icon: <FaGooglePlay />,
  },
];