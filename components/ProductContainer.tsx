import styles from "../styles/productcontainer.module.css";
import Product from "./Product";
import { useSelector } from "react-redux";
import {urlFor} from '../sanity'

interface Category {
  images: [{ 
    asset: { 
      _ref: string 
    } 
  }];
  price: number;
  title: string;
  availability: boolean,
  description: {
    children: {
      text: string
    }[]
  }[],
  _id: string
}

function ProductContainer() {

    const category = useSelector((state: any | unknown) => state.category);
    const name = useSelector((state: any | unknown) => state.categoryName);

    // category != [] ? console.log(category): null
    // name != '' ? console.log(name): null

  return (
    <div className={styles.productContainerMain}>
      <h1 className={styles.productMainHeader}>{name}</h1>
      <div className={styles.productCardContainer}>

        {category && category.map((category: Category)=>{
        return (
          <Product
            image={urlFor(category.images[0].asset._ref).url()}
            price={category.price}
            title = {category.title}
            availability = {category.availability}
            description = {category.description[0].children[0].text}
            key = {category._id}
            id = {Math.floor(Math.random() * 10000000)}
          />
        );
        })}
      </div>
    </div>
  );
}

export default ProductContainer;
