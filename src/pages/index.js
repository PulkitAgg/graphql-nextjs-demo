import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Home Page
        </h1>
      </main>
      <Footer/>
    </div>
  )
}
