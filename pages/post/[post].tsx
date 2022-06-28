import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { DataBucket } from "../components/StateProvider";
import {sanityClient, urlFor} from '.../sanityClient'

//const filteredPosts = localStorage.getItem('filteredPosts')

const Posts: NextPage = () => {
  const [{ filteredPosts }, ] = DataBucket();
  console.log(filteredPosts);
  
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


export async function getStaticPaths(){
	const query = `*[_type == 'post']{
		_id,
		slug->{
			current
		}
	}`
}

