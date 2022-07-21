import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.css";
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'
import {sanityClient} from '../sanity'

const Home: any | NextPage = ({
  watches,
  gadgets,
  clothing,
  footwear,
  bags,
  stationery,
}: any) => {
  //{watches, gadgets, clothing, footwear, bags, stationery}

  // console.log(clothing);
  //console.log(watches)
  // console.log(bags)
  // console.log(stationery)
  // console.log(footwear)
  // console.log(gadgets)

  return (
    <div className={styles.homeMain}>
      <Head>
        <title>Nasie Collections</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Navbar />
      <Mainbody
        watches={watches}
        bags={bags}
        stationery={stationery}
        clothing={clothing}
        footwear={footwear}
        gadgets={gadgets}
      />
    </div>
  );
};

export default Home;


//bags_ref = "74181f75-1cf4-40b8-9acb-9960b1bf5eaa"
//gadgets_ref = "1784329b-2774-4d80-8e31-7412239d537c"
//clothing_ref = "237c5a20-9747-4d80-8ce6-9cabd54435a3"
//watches_ref = "38cd2ac9-8cb8-409d-838f-03c50157b2ae"
//stationery_ref = "1fa3fe8f-df4c-4135-9c25-474e7f9c4c2b"
//footwear_ref = "01fb233d-f761-4d2b-a8f4-d42714f2bc92"
//*[_type == 'product' && categories[0]._ref == "01fb233d-f761-4d2b-a8f4-d42714f2bc92"]

export async function getServerSideProps(){

  const footwear = await sanityClient.fetch(
    `*[_type == 'product' && categories[0]._ref == "01fb233d-f761-4d2b-a8f4-d42714f2bc92"]`
  );
  const clothing = await sanityClient.fetch(
    `*[_type == 'product' && categories[0]._ref == "237c5a20-9747-4d80-8ce6-9cabd54435a3"]`
  );
  const gadgets = await sanityClient.fetch(
    `*[_type == 'product' && categories[0]._ref == "1784329b-2774-4d80-8e31-7412239d537c"]`
  );
  const watches = await sanityClient.fetch(
    `*[_type == 'product' && categories[0]._ref == "38cd2ac9-8cb8-409d-838f-03c50157b2ae"]`
  );
  const stationery = await sanityClient.fetch(
    `*[_type == 'product' && categories[0]._ref == "1fa3fe8f-df4c-4135-9c25-474e7f9c4c2b"]`
  );
  const bags = await sanityClient.fetch(
    `*[_type == 'product' && categories[0]._ref == "74181f75-1cf4-40b8-9acb-9960b1bf5eaa"]`
  );

  return{
    props: {
      clothing,
      bags,
      footwear,
      stationery,
      watches,
      gadgets
    }
  }

}