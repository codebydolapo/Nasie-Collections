import type { NextPage } from "next";
import styles from "C:/next-js-blog/blogr/styles/posts.module.css";
import Head from "next/head";
import Header from "C:/next-js-blog/blogr/components/Header";
import Menu from "C:/next-js-blog/blogr/components/Menu";
import PostsMain from "C:/next-js-blog/blogr/components/PostsMain";
import { sanityClient } from "C:/next-js-blog/blogr/sanity.js";
import { DataBucket } from "C:/next-js-blog/blogr/components/StateProvider.js";

const Posts: NextPage = ({ posts }) => {
  console.log(posts);
  const [{ filteredPosts }] = DataBucket();
  console.log(filteredPosts);

  return (
    <div className={styles.posts}>
      <Head>
        <title>Blogr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <PostsMain posts = {posts}/>
      <Menu />
    </div>
  );
};

export default Posts;

export const getStaticPaths = async () => {
  const categoryQuery = `*[_type == 'category']{
		_id
	}`;

  const category = await sanityClient.fetch(categoryQuery);

  const paths = category.map((categories) => {
    return {
      params: {
        posts_id: categories._id,
      },
    };
  });

  //THIS RETURN VALUE BELOW, TELLS NEXT-JS ALL THE ROUTES ITS SUPPOSED TO EXPECT.
  //WHEN YOU MAKE A REQUEST TO ONE OF THESE ROUTES ITS EXPECTING, IT KNOWS T0 SHOW YOU EXACTLY WHAT YOU NEED.
  //WHEN YOU SPECIFY A ROUTE THAT DOESN'T EXIST, THE FALLBACK: BLOCKING PARAMETER DISPLAYS A 404 PAGE.
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && references($posts_id)]{
		title,
		mainImage,
		slug{
			current
		},
		_id
	}`;

  //975b3af3-14e2-4d74-8e76-ad973b043140
  const posts = await sanityClient.fetch(query, {
    posts_id: params?.posts_id.toString(),
  });

  if (!posts) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        posts: posts,
      },
    };
  }
};
