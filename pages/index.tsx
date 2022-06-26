import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Landing from "../components/Landing";
import { useEffect } from "react";
//import Posts from '../components/Posts'
import Top from "../components/Top";
import CategoryMain from "../components/CategoryMain";
import { sanityClient } from "../sanity";
import { Category, Post } from "../types.d";
import { DataBucket } from "../components/StateProvider";

interface Props {
  categories: Category;
  posts: Post;
}

const Home: NextPage = ({ categories, posts }: Props) => {
  //console.log(categories)

  const [, dispatch] = DataBucket();

  useEffect(() => {
    dispatch({
      type: "POSTS",
      posts: posts,
    });

    dispatch({
      type: "CATEGORIES",
      categories: categories,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Menu />
      <Landing />
      <CategoryMain categories={categories} posts={posts} />
      <Top />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const categoryQuery = `*[_type == 'category']{
		title,
		image,
		_id
	}`;

  const postQuery = `*[_type == 'post']{
		_id,
		title,
		body,
		categories,
		author->{
			name,
			image
		},
		description,
		mainimage,
		slug
	}`;

  //THE REF OF A POST AND THE ID OF A CATEGORY ARE THE SAME.
  //REMEMBER THIS WHEN YOU TRY TO PULL REQUESTS

  const categories = await sanityClient.fetch(categoryQuery);
  const posts = await sanityClient.fetch(postQuery);

  return {
    props: {
      categories: categories,
      posts: posts,
    },
  };
}
