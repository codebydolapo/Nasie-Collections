import styles from "../styles/productcontainer.module.css";
import Product from "./Product";

function ProductContainer() {
  return (
    <div className={styles.productContainerMain}>
      <h1 className={styles.productMainHeader}>Some Category</h1>
      <div className={styles.productCardContainer}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />  
        <Product />  
        <Product />  
        <Product />  
        <Product />  
      </div>
    </div>
  );
}

export default ProductContainer;
