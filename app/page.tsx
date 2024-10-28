import Image from 'next/image';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <main className={styles.homeMain}>
      <div className={styles.bgWrap}>
        <Image
          src='/home/heroSectionBg1.png'
          alt='Hero Home'
          width={2880}
          height={2156}
        />
      </div>
      <div className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h1 className={styles.intro}>
                Unlock Your Coding Potential with Enigma <span>Code-ai</span>
              </h1>
              <p className={styles.details}>
                Learn coding and design with Enigma-AI, your ultimate
                destination for mastering the art of creating stunning designs
                and building powerful applications.
              </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.getStartedBtn}>Get Started</button>
                <button className={styles.startFreeTrialBtn}>
                  Start a Free Trial
                </button>
              </div>
            </div>
            <div className={styles.right}>
              <Image
                src='/home/heroApp.png'
                alt='Hero App'
                width={1626}
                height={1134}
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.trustedText}>
              Trusted By Industry Leaders
            </div>
            <div className={styles.iconWrappers}>
              <Image
                src='/home/amazonLogo.svg'
                alt='Amazon'
                width={121}
                height={36}
              />
              <Image
                src='/home/appleLogo.svg'
                alt='Apple'
                width={121}
                height={36}
              />
              <Image
                src='/home/youtubeLogo.svg'
                alt='Youtube'
                width={121}
                height={36}
              />
              <Image
                src='/home/figmaLogo.svg'
                alt='Figma'
                width={121}
                height={36}
              />
              <Image
                src='/home/googleLogo.svg'
                alt='Google'
                width={121}
                height={36}
              />
              <Image src='/home/xLogo.svg' alt='X' width={121} height={36} />
              <Image
                src='/home/vercelLogo.svg'
                alt='Vercel'
                width={121}
                height={36}
              />
              <Image
                src='/home/airbnbLogo.svg'
                alt='Airbnb'
                width={121}
                height={36}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
