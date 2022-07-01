import styles from "../styles/categorymain.module.css";
import Link from "next/link";
import CategoryCard from "./CategoryCard";

export default function CategoryMain({ categories }: any) {
  //console.log(categories);

  return (
    <div className={styles.categoryMain} id="categoryMain">
      <div className={styles.banner}>
        <h1>Categories</h1>
        <div className={styles.searchDiv}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search for posts from any category"
            />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <div className={styles.left}>
          {categories.map((category: any) => (
            <CategoryCard
              key={category.image.asset._ref}
              title={category.title}
              image={category.image.asset._ref}
              slug = {category.slug.current}
              identifier={category._id}
            />
          ))}
        </div>
        <div className={styles.right}>
          {categories.map((category: any) => {
            return (
              <Link href = {`/posts/${category.identifier_id}`}>
                <div>
                  <h1>{category.title}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
