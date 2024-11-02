import styles from './styles.module.scss';
import Image from 'next/image';

const Home = () => {
  return (
    <main className={styles.parent}>
      <Image
        src='/home/heroSectionBg1.webp'
        alt='Hero Home'
        width={2880}
        height={2156}
        className={styles.heroBackground}
      />
    </main>
  );
};

export default Home;
