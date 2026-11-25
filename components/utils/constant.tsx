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
    label: 'Email',
    icon: <FaRegEnvelope />,
  },
  {
    href: 'https://www.linkedin.com/in/frasnym/',
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'https://github.com/frasnym',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://twitter.com/intent/follow?screen_name=frasnym',
    label: 'Twitter',
    icon: <FaTwitter />,
  },
  {
    href: 'https://dev.to/frasnym/',
    label: 'DEV Community',
    icon: <FaDev />,
  },
  {
    href: 'https://play.google.com/store/apps/developer?id=FrastyawanNym',
    label: 'Google Play',
    icon: <FaGooglePlay />,
  },
];

export const COLOR_PALLETS: ColorPallet[][] = [
  [
    { background: '#005f73', color: '#ffffff' },
    { background: '#0a9396', color: '#111111' },
    { background: '#94d2bd', color: '#111111' },
    { background: '#e9d8a6', color: '#111111' },
    { background: '#ee9b00', color: '#111111' },
    { background: '#ca6702', color: '#111111' },
    { background: '#bb3e03', color: '#ffffff' },
    { background: '#ae2012', color: '#ffffff' },
    { background: '#9b2226', color: '#ffffff' },
  ],
  [
    { background: '#f72585', color: '#111111' },
    { background: '#b5179e', color: '#ffffff' },
    { background: '#7209b7', color: '#ffffff' },
    { background: '#560bad', color: '#ffffff' },
    { background: '#480ca8', color: '#ffffff' },
    { background: '#3f37c9', color: '#ffffff' },
    { background: '#4361ee', color: '#ffffff' },
    { background: '#4895ef', color: '#111111' },
    { background: '#4cc9f0', color: '#111111' },
  ],
  [
    { background: '#f94144', color: '#111111' },
    { background: '#f3722c', color: '#111111' },
    { background: '#f8961e', color: '#111111' },
    { background: '#f9844a', color: '#111111' },
    { background: '#f9c74f', color: '#111111' },
    { background: '#90be6d', color: '#111111' },
    { background: '#43aa8b', color: '#111111' },
    { background: '#4d908e', color: '#111111' },
    { background: '#577590', color: '#ffffff' },
    { background: '#277da1', color: '#ffffff' },
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
