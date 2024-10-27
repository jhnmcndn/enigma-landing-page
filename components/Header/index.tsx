'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';

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
      <div className={styles.logoWrapper}>
        <Image src='/logo.png' alt='Logo' width={72} height={72} />
        <span>Enigma-AI</span>
      </div>
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
              onMouseLeave={() => setIsMoreHover(false)} // Set to false on mouse leave
              className={clsx({ [styles.isMoreHover]: isMoreHover })} // Ensure correct class name
            >
              <Image
                src='/header/more.png'
                alt='More'
                width={32}
                height={32}
                className={styles.listImg}
              />
              <span>More</span>
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
