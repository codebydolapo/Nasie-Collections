import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { DataBucket } from "../components/StateProvider";

const Posts: NextPage = ({ posts }) => {
  console.log(posts);
  return (
    <div className={""}>
      <Head>
        <title>Blogr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Menu />
    </div>
  );
};

export default Posts;

export async function getServerSideProps() {
  const [{ posts }] = DataBucket();
  return {
    props: {
      posts: posts,
    },
  };
}
