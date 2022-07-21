import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Welcome from '../components/Welcome'


const Raggamuffin: any | NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nasie Collections</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Welcome/>
    </div>
  );
  
};

export default Raggamuffin;

