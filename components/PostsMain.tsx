import styles from "../styles/postsmain.module.css";
//import CategoryCard from "./CategoryCard";

export default function PostsMain() {

  return (
    <div className={styles.categoryMain} id="postsMain">
      <div className={styles.banner}>
        <h1>Categories</h1>
        <div className={styles.searchDiv}>
          <div className={styles.searchBar}>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      {/* {categories.map((category) => (
        <CategoryCard
          key={category.image.asset._ref}
          title={category.title}
          image={category.image.asset._ref}
          slug={category.slug.current}
        />
      ))} */}
    </div>
  );
}
