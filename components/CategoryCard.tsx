import styles from "../styles/categorycard.module.css";
import Link from "next/link";
import { urlFor } from "../sanity";


function CategoryCard({ title, image, identifier }:any) {

  return (
  <Link href = {`/posts/${identifier}`}>
    <div className={styles.categoryDiv}>
      <img src={urlFor(image).url()} alt="" className={styles.categoryImage} />
      <h1 className={styles.categoryHeader}>{title}</h1>
    </div>
   </Link>
  );
}

export default CategoryCard;
