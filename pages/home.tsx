import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.css";
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'

const Home: any | NextPage = () => {
  return (
    <div className={styles.homeMain}>
      <Head>
        <title>Nasie Collections</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Navbar/>
      <Mainbody/>
    </div>
  );
};

export default Home;
