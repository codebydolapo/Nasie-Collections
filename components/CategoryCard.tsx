import styles from "../styles/categorycard.module.css";
//import Link from "next/link";
import { urlFor } from "../sanity";
import { DataBucket } from "../components/StateProvider";
//import { findPosts } from './reducer';

function CategoryCard({ title, image }) {
	
	const [{ categories }, dispatch] = DataBucket();
	
	//THIS FUNCTION FILTERS THE CATEGORY ARRAY AND PULLS OUT THE ID OF THE CATEGORY CLICKED.
	//I PLAN ON USING THIS PROCURED ARRAY TO FILTER OUT RELEVANT POSTS FROM THE RETURNED ARRAY OF POSTS.
	function handleClick(){
		let filteredCategory = categories.filter((category)=>{
			return category.title == title;
		});
		console.log(filteredCategory)
		let filteredId = filteredCategory._id;
		
		dispatch({
			type: 'FILTERED_ID',
			filteredId: filteredId
		});
		
		//THIS FUNCTION WAS PULLED OUT OF THE REDUCER, AND IS USED TO FIND POSTS THAT FIT THE ID SPECIFIED
			const totals = posts.filter((item) => {
			return (item.categories[0]._ref == filteredId)
		}
		
		//console.log(totals)
		
	}
	
  return (
    //<Link href = '/' >
    <div className={styles.categoryDiv} onClick = {handleClick}>
      <img src={urlFor(image).url()} alt="" className={styles.categoryImage} />
      <h1 className={styles.categoryHeader}>{title}</h1>
    </div>
    //</Link>
  );
}

export default CategoryCard;
