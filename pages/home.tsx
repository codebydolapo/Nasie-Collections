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


//bags_ref = "74181f75-1cf4-40b8-9acb-9960b1bf5eaa"
//gadgets_ref = "1784329b-2774-4d80-8e31-7412239d537c"
//clothing_ref = "237c5a20-9747-4d80-8ce6-9cabd54435a3"
//clothing_ref = "38cd2ac9-8cb8-409d-838f-03c50157b2ae"
//stationery_ref = "1fa3fe8f-df4c-4135-9c25-474e7f9c4c2b"
//footwear_ref = "01fb233d-f761-4d2b-a8f4-d42714f2bc92"
//*[_type == 'product' && categories[0]._ref == "01fb233d-f761-4d2b-a8f4-d42714f2bc92"]

// export async function getServerSideProps(){

// }