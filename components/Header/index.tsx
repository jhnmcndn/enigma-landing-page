'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
import MaxWidth from '@/components/MaxWidth';

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
  {
    name: 'More',
    img: '/header/more.png',
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

  return (
    <div className={styles.popOverContainer}>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          {moreList.firstCol.map((items, index) => (
            <div key={index} className={styles.itemWrap}>
              <div
                className={clsx(styles.left, {
                  [styles.isHovered]: hoveredIndex === index,
                })}
              >
                {items.img}
              </div>
              <div className={styles.right}>
                <Link
                  href={items.navigateTo}
                  className={styles.name}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {items.name}
                </Link>
                <p className={styles.desc}>{items.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {moreList.secondCol.map((items, index) => (
            <div key={index} className={styles.itemWrap}>
              <div
                className={clsx(styles.left, {
                  [styles.isHovered]:
                    hoveredIndex === index + moreList.secondCol.length,
                })}
              >
                {items.img}
              </div>
              <div className={styles.right}>
                <Link
                  href={items.navigateTo}
                  className={styles.name}
                  onMouseEnter={() =>
                    setHoveredIndex(index + moreList.secondCol.length)
                  }
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {items.name}
                </Link>
                <p className={styles.desc}>{items.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMoreHovered, setIsMoreHovered] = useState<boolean>(false);
  const router = useRouter();
  const isNew = true;
  return (
    <header className={styles.header}>
      <MaxWidth className={styles.widthComponent}>
        <div className={styles.logoWrapper} onClick={() => router.push('/')}>
          <Image src='/logo.png' alt='Logo' width={72} height={72} />
          <span>Enigma-AI</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.listWrapper}>
            {navList.map((item, index) => (
              <li key={index} className={styles.list}>
                {item.name === 'More' ? (
                  <div
                    className={styles.link}
                    onMouseEnter={() => setIsMoreHovered(true)}
                    onMouseLeave={() => setIsMoreHovered(false)}
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={33}
                      height={32}
                      className={styles.listImg}
                    />
                    <span className={styles.listText}>{item.name}</span>
                    {isMoreHovered && <PopOver />}
                  </div>
                ) : (
                  item.navigateTo && (
                    <Link href={item.navigateTo} className={styles.link}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={33}
                        height={32}
                        className={styles.listImg}
                      />
                      <span className={styles.listText}>{item.name}</span>
                      {isNew && index === 2 && (
                        <span className={styles.isNew}>New</span>
                      )}
                    </Link>
                  )
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={styles.downloadBtn}
          onClick={() => router.push('/download')}
        >
          Download App
        </button>
      </MaxWidth>
    </header>
  );
};

export default Header;
