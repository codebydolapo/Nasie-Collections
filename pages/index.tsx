import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Mainbody from '../components/Mainbody'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import { getSession } from 'next-auth/react'
import Session from "C://PurpleNetwork/PurpleNetwork/types.d";

// interface Session{
//   session:{
//     user: {
//       name: string,
//       email: string,
//       image: string
//     },
//     accessToken: string,
//     expires: string
//   }
// }

const Home: any | NextPage = ({ session }: Session) => {

  if (!session){
    return <Login/>
  }

  console.log(session)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Purple Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar session={session} />
      <Mainbody session={session} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
