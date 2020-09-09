import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/common/Footer';
import { useQuery, gql } from '@apollo/client';

const HELLO_WORLD = gql`
  query helloWorld {
    hello
  }
`;

export default function Home(props) {
  const { loading, error, data } = useQuery(HELLO_WORLD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to About Page
        </h1>
        <p>{data.hello}</p>
      </main>
      <Footer/>
    </div>
  )
}
