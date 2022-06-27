import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { sanityClient } from "../sanity";
import { DataBucket } from "../components/StateProvider";

//const filteredPosts = localStorage.getItem('filteredPosts')

const Posts: NextPage = () => {
  const [{ filteredPosts }] = DataBucket();
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

export const getStaticPaths = async () => {
  const categoryQuery = `*[_type == 'category']{
		title,
		image,
		slug{
			current
		},
		_id
	}`;

  const category = await sanityClient.fetch(categoryQuery);

  const paths = category.map((category) => {{
    params:{
      slug: category.slug.current
	  id: category._id
    }
  }});

  return{
    paths,
    fallback: 'blocking'
  }
};

export const getStaticProps = async ({params})=>{
	//NEPA JUST TOOK LIGHT, SO I MUST GO NOW. BUT TRY FETCHING A LIST OF POSTS AND REPLACING THOSE WITH WHAT YOU HAVE BELOW
	const query = `*[_type == 'post' && post.categories[0]._ref == "1389e195-4288-42af-b6c1-5f32f6fc95ff"]{
		title,
		image,
		slug{
			current
		},
		_id
	}`;
	
	
	const posts = await sanityClient.fetch(query, {
		id: params?._id
	});
}
















