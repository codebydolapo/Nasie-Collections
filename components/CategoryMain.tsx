import styles from "../styles/categorymain.module.css";
import Image from "next/image";
import CategoryCard from "./CategoryCard";

export default function CategoryMain({ categories }) {
  //console.log(categories);

  return (
    <div className={styles.categoryMain} id="categoryMain">
      <div className={styles.banner}>
        <h1>Categories</h1>
        <div className={styles.searchDiv}>
          <div className={styles.searchBar}>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      {categories.map((category) => (
        <CategoryCard
          key={category.image.asset._ref}
          title={category.title}
          image={category.image.asset._ref}
          //slug = {category.slug.current}
          identifier = {category._id}
        />
      ))}
    </div>
  );
}
