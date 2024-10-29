'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LuAlertCircle,
  LuAlertTriangle,
  LuHardDriveDownload,
  LuList,
  LuMenu,
  LuPhone,
  LuShieldCheck,
  LuWifiOff,
} from 'react-icons/lu';

const navList = [
  {
    name: 'Extension',
    img: '/header/extension.png',
    navigateTo: '/extension',
  },
  {
    name: 'Features',
    img: '/header/features.png',
    navigateTo: '/features',
  },
  {
    name: 'Pro',
    img: '/header/pro.png',
    navigateTo: '/pro',
  },
  {
    name: 'Developer',
    img: '/header/developer.png',
    navigateTo: '/developer',
  },
];

const moreList = {
  firstCol: [
    {
      name: 'Download',
      img: <LuHardDriveDownload />,
      desc: 'Download Enigma Code-ai to boost your coding with AI.',
      navigateTo: '/download',
    },
    {
      name: 'About',
      img: <LuAlertCircle />,
      desc: 'Learn about Enigma Code-ai and our mission to revolutionize.',
      navigateTo: '/about',
    },
    {
      name: 'Contact',
      img: <LuPhone />,
      desc: 'Contact us for support or inquiries.',
      navigateTo: '/contact',
    },
    {
      name: 'Blog',
      img: <LuMenu />,
      desc: 'Read our blog for AI coding insights and tips.',
      navigateTo: '/blog',
    },
  ],
  secondCol: [
    {
      name: 'Detail Blog',
      img: <LuList />,
      desc: 'Boost productivity with AI code suggestions. Learn how in this.',
      navigateTo: '/blog/test',
    },
    {
      name: 'Privacy Policy',
      img: <LuShieldCheck />,
      desc: 'Understand how we protect your personal information.',
      navigateTo: '/privacy-policy',
    },
    {
      name: 'Terms of Service',
      img: <LuAlertTriangle />,
      desc: 'Review our terms for using Enigma Code-ai.',
      navigateTo: '/terms-of-service',
    },
    {
      name: '404',
      img: <LuWifiOff />,
      desc: 'Page not found. Return to the homepage.',
      navigateTo: '/404',
    },
  ],
};

const PopOver = () => {};

const Header = () => {
  return <div>Header</div>;
};

export default Header;
