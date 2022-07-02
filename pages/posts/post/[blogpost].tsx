import type { NextPage } from "next";
import Head from "next/head";
import Header from "C:/next-js-blog/blogr/components/Header";
import Menu from "C:/next-js-blog/blogr/components/Menu";
import { sanityClient, urlFor } from "C:/next-js-blog/blogr/sanity.js";
import BlogPost from "C:/next-js-blog/blogr/components/BlogPost";
import styles from "C:/next-js-blog/blogr/styles/post.module.css";
import { POINT_CONVERSION_COMPRESSED } from "constants";

//const filteredPosts = localStorage.getItem('filteredPosts')

const Post: NextPage = (props) => {
  console.log(props);
  return (
    <div className={styles.postMain}>
      <Head>
        <title>Blogr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <BlogPost post={props.post} /> */}
      <Menu />
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const postQuery = `*[_type == 'post']{
		slug{
			current
		}
  }`;

  const posts = await sanityClient.fetch(postQuery);

  const paths = posts.map((post: { slug: { current: string; }; })=>{
    return {
      params: {
        blogpost: post.slug.current,
      },
    };
  })
  
  

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const postQuery = `*[_type == 'post' && slug.current == $post]`;

  const post = sanityClient.fetch(postQuery, {
    post: params?.blogpost
  });

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
