import { HiCube, HiNewspaper, HiPhoneArrowUpRight } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';

export type navigationLink = {
  title: string;
  link: string;
  icon: IconType;
};

export const navigationLinks: Array<navigationLink> = [
  // { title: 'Properties', link: '/properties', icon: HiCube },
  { title: 'Liên hệ', link: '/contact', icon: HiNewspaper },
  {
    title: '(+84) 0822057922',
    link: 'tel:(+84) 0822057922',
    icon: HiPhoneArrowUpRight,
  },
];
