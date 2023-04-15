import Head from 'next/head';
import Navbar from './Navbar';
import styles from "../styles/Home.module.css";

export default function Layout({ children, ...props }) {
  return (
    <div>
      <Head>
        <title>aniMATE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
         <span>aniMATE</span>
        </h1>

        <p className={styles.description}>
          Hold the creator's coins to unlock the next-gen of Pleasuree
        </p>
        {children}
      </main>
    </div>
  );
}