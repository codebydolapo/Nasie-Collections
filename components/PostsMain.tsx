import styles from "../styles/postsmain.module.css";
import PostCard from './PostCard'
//import CategoryCard from "./CategoryCard";

export default function PostsMain({posts}) {

  return (
    <div className={styles.postsMain}>
      <div className={styles.banner}>
        <h1>Posts</h1>
        <div className={styles.searchDiv}>
          <div className={styles.searchBar}>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          title={post.title}
          image={post.mainImage.asset._ref}
        />
      ))}
    </div>
  );
}
