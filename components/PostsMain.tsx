import styles from "../styles/postsmain.module.css";
import PostCard from "./Postcard";
import Aside from "./Aside";
//import { urlFor } from 'C:/next-js-blog/blogr/sanity.js';

interface Post {
  posts: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    mainImage: {
      asset: {
        _ref: string;
      };
    };
    categories: any,
  };
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  categories: any;
}

export default function PostsMain({ posts }: Post) {
  return (
    <div className={styles.postsMain}>
      <div className={styles.banner}>
        <h1>Posts</h1>
        <div className={styles.searchDiv}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for posts and references" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className={styles.postContainer}>
        <div className={styles.left}>
          {posts.map((post: Post) => (
            <PostCard
              key={post._id}
              title={post.title}
              image={post.mainImage.asset._ref}
              slug={post.slug.current}
              identifier={post.categories[0]._ref}
            />
          ))}
        </div>
        {/* <div className={styles.right}>
          <h1>Featured</h1>
          <div className={styles.posts}>
            {posts.map((post: { mainImage: string; title: string }) => {
              return <Aside image={post.mainImage} title={post.title} />;
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}
