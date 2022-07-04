import styles from "../styles/categorymain.module.css";
import Link from "next/link";
import CategoryCard from "./CategoryCard";
import Aside from "./Aside";

interface Category {
  title: string;
  _id: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
  identifier: string;
}

export default function CategoryMain({ categories, posts }: any) {
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
          {categories.map((category: Category) => (
            <CategoryCard
              key={category.image.asset._ref}
              title={category.title}
              image={category.image.asset._ref}
              slug={category.slug.current}
              identifier={category._id}
            />
          ))}
        </div>
        <div className={styles.right}>
          <h1>Featured</h1>
          <div className={styles.posts}>
            <Aside image={posts[9].mainImage} title={posts[9].title} />
            <Aside image={posts[15].mainImage} title={posts[15].title} />
            <Aside image={posts[2].mainImage} title={posts[2].title} />
            <Aside image={posts[12].mainImage} title={posts[12].title} />
            <Aside image={posts[5].mainImage} title={posts[5].title} />
            <Aside image={posts[6].mainImage} title={posts[6].title} />
            <Aside image={posts[7].mainImage} title={posts[7].title} />
            <Aside image={posts[9].mainImage} title={posts[9].title} />
            <Aside image={posts[8].mainImage} title={posts[8].title} />
          </div>
        </div>
      </div>
    </div>
  );
}
