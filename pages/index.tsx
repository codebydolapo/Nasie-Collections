import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Mainbody from "../components/Mainbody";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { getSession } from "next-auth/react";
import {Session} from "C://PurpleNetwork/PurpleNetwork/types.d";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../components/firebase";


const Home: any | NextPage = ({ session, posts }: Session) => {
  if (!session) {
    return <Login />;
  }

  console.log(session);
  console.log(posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>Purple Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar session={session} />
      <Mainbody session={session} posts={posts} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  //const postsRef = doc(db, "posts");
  let posts: Session[] | Session = [];
    await getDocs(collection(db, "posts"))
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((error) => {
      console.log(error);
    });
  

  return {
    props: {
      session,
      posts
    },
  };
}
