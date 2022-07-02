import styles from "../styles/postsmain.module.css";
import PostCard from "./Postcard";
//import { urlFor } from 'C:/next-js-blog/blogr/sanity.js';
//import CategoryCard from "./CategoryCard";

// interface Props {
//   posts: {
//     title: string,
//     image: string,
//     identifier: string,
// }
// }

export default function PostsMain({ posts }: any) {
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
          {posts.map((post: any) => (
            <PostCard
              key={post._id}
              title={post.title}
              image={post.mainImage.asset._ref}
              slug={post.slug.current}
              identifier = {post.categories[0]._ref}
            />
          ))}
        </div>
        <div className={styles.right}>
          {posts.map((post: any) => {
            return (
              <div>
                <h1 key = {post.title}>{post.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
