import styles from "../styles/categorycard.module.css";
//import Link from "next/link";
import { urlFor } from "../sanity";
import { DataBucket } from "../components/StateProvider";
//import { findPosts } from './reducer';

function CategoryCard({ title, image }) {
  const [{ categories, posts }, dispatch] = DataBucket();

  //THIS FUNCTION FILTERS THE CATEGORY ARRAY AND PULLS OUT THE ID OF THE CATEGORY CLICKED.
  //I PLAN ON USING THIS PROCURED ARRAY TO FILTER OUT RELEVANT POSTS FROM THE RETURNED ARRAY OF POSTS.
  function handleClick() {
    let filteredCategory = categories.filter((category) => {
      return category.title === title;
    });
    let filteredId = filteredCategory[0]._id;
    let filteredPosts = posts.filter((post) => {
      return post.categories[0]._ref === filteredId;
    });
    //console.log(filteredPosts)

    dispatch({
      type: "FILTERED_ID",
      filteredId: filteredId,
    });

    dispatch({
      type: "FILTERED-POSTS",
      filteredPosts: filteredPosts,
    });
  }

  return (
    //<Link href = '/' >
    <div className={styles.categoryDiv} onClick={handleClick}>
      <img src={urlFor(image).url()} alt="" className={styles.categoryImage} />
      <h1 className={styles.categoryHeader}>{title}</h1>
    </div>
    //</Link>
  );
}

export default CategoryCard;
