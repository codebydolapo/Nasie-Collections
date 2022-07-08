import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Mainbody from '../components/Mainbody'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Purple Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Mainbody/>
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
  
// }
