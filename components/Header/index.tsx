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

const PopOver = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={styles.popOverContainer}
    >
      <div className={styles.popOverWrapper}>
        <div className={styles.column}>
          {moreList.firstCol.map((list, index) => (
            <div
              key={index}
              className={clsx(styles.wrapper, {
                [styles.isHover]: hoveredIndex === index,
              })}
            >
              <div className={styles.icon}>{list.img}</div>
              <div className={styles.text}>
                <Link
                  href={list.navigateTo}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={styles.name}
                >
                  {list.name}
                </Link>
                <p className={styles.desc}>{list.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {moreList.secondCol.map((list, index) => (
            <div
              key={index}
              className={clsx(styles.wrapper, {
                [styles.isHover]:
                  hoveredIndex === index + moreList.firstCol.length,
              })}
            >
              <div className={styles.icon}>{list.img}</div>
              <div className={styles.text}>
                <Link
                  href={list.navigateTo}
                  onMouseEnter={() =>
                    handleMouseEnter(index + moreList.firstCol.length)
                  }
                  onMouseLeave={handleMouseLeave}
                  className={styles.name}
                >
                  {list.name}
                </Link>
                <p className={styles.desc}>{list.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMoreHover, setIsMoreHover] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logoWrapper}>
        <Image src='/logo.png' alt='Logo' width={72} height={72} />
        <span>Enigma-AI</span>
      </Link>
      <nav>
        <ul>
          {navList.map((list, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={clsx({ [styles.isHover]: hoveredIndex === index })}
            >
              <Link href={list.navigateTo} className={styles.listWrapper}>
                <Image
                  src={list.img}
                  alt={list.name}
                  width={32}
                  height={32}
                  className={styles.listImg}
                />
                <span>{list.name}</span>
              </Link>
            </li>
          ))}
          <li className={styles.moreWrapper}>
            <div
              onMouseEnter={() => setIsMoreHover(true)}
              onMouseLeave={() => setIsMoreHover(false)}
              className={clsx(styles.wrapper, {
                [styles.isMoreHover]: isMoreHover,
              })}
            >
              <Image
                src='/header/more.png'
                alt='More'
                width={32}
                height={32}
                className={styles.listImg}
              />
              <span className={styles.more}>More</span>
              <AnimatePresence>{isMoreHover && <PopOver />}</AnimatePresence>
            </div>
          </li>
        </ul>
      </nav>
      <span
        className={`${styles.downloadText} hover:opacity-50 hover:backdrop-blur-[10px] transition-opacity duration-100`}
      >
        Download App
      </span>
    </header>
  );
};

export default Header;
