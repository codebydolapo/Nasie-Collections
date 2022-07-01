import type { NextPage } from "next";
import Head from "next/head";
import Header from "C:/next-js-blog/blogr/components/Header";
import Menu from "C:/next-js-blog/blogr/components/Menu";
import { sanityClient, urlFor } from "C:/next-js-blog/blogr/sanity.js";
import BlogPost from "C:/next-js-blog/blogr/components/BlogPost";
import styles from 'post.module.css'

//const filteredPosts = localStorage.getItem('filteredPosts')

const Post: NextPage = (post) => {
  return (
    <div className={styles.postMain}>
      <Head>
        <title>Blogr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BlogPost post = {post}/>
      <Menu />
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const postQuery = `*[_type == 'post']{
		_id,
		slug{
			current
		}
  }`;

  const post = await sanityClient.fetch(postQuery);

  const path = post.map((post: any) => {
    return {
      params: {
        post: post.slug.current,
      },
    };
  });

  return {
    path,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const postQuery = `*[_type == 'post' && slug.current == $slug]`;

  const post = sanityClient.fetch(postQuery, {
    slug: params?.post.toString(),
  });

  //params?post.toString()
  //975b3af3-14e2-4d74-8e76-ad973b043140

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post: post,
      },
    };
  }
}
