import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaGooglePlay,
  FaRegEnvelope,
  FaDev,
} from 'react-icons/fa';
import { ColorPallet } from '../../types';

export const SOCIAL_MEDIA_LINKS = [
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
    href: 'https://play.google.com/store/apps/developer?id=FrastyawanNym',
    icon: <FaGooglePlay />,
  },
];

export const COLOR_PALLETES: ColorPallet[][] = [
  [
    { background: '#005f73', color: 'var(--color-text-light)' },
    { background: '#0a9396', color: 'var(--color-text-light)' },
    { background: '#94d2bd', color: 'var(--color-text-dark)' },
    { background: '#e9d8a6', color: 'var(--color-text-dark)' },
    { background: '#ee9b00', color: 'var(--color-text-dark)' },
    { background: '#ca6702', color: 'var(--color-text-light)' },
    { background: '#bb3e03', color: 'var(--color-text-light)' },
    { background: '#ae2012', color: 'var(--color-text-light)' },
    { background: '#9b2226', color: 'var(--color-text-light)' },
  ],
  [
    { background: '#f72585', color: 'var(--color-text-light)' },
    { background: '#b5179e', color: 'var(--color-text-light)' },
    { background: '#7209b7', color: 'var(--color-text-light)' },
    { background: '#560bad', color: 'var(--color-text-light)' },
    { background: '#480ca8', color: 'var(--color-text-light)' },
    { background: '#3f37c9', color: 'var(--color-text-light)' },
    { background: '#4361ee', color: 'var(--color-text-light)' },
    { background: '#4895ef', color: 'var(--color-text-light)' },
    { background: '#4cc9f0', color: 'var(--color-text-light)' },
  ],
  [
    { background: '#f94144', color: 'var(--color-text-light)' },
    { background: '#f3722c', color: 'var(--color-text-light)' },
    { background: '#f8961e', color: 'var(--color-text-dark)' },
    { background: '#f9844a', color: 'var(--color-text-dark)' },
    { background: '#f9c74f', color: 'var(--color-text-dark)' },
    { background: '#90be6d', color: 'var(--color-text-light)' },
    { background: '#43aa8b', color: 'var(--color-text-light)' },
    { background: '#4d908e', color: 'var(--color-text-light)' },
    { background: '#577590', color: 'var(--color-text-light)' },
    { background: '#277da1', color: 'var(--color-text-light)' },
  ],
];

export const PAGE_NAV = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about-me',
  },
  {
    title: 'Code',
    href: '/code',
  },
  {
    title: 'Writing',
    href: '/writing',
  },
];
