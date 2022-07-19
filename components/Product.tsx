import styles from "../styles/product.module.css";
import {useDispatch} from 'react-redux'
import {incrementProductCount, incrementProductAmount} from './reducers/actions'



function Product() {

  const dispatch = useDispatch()

  function combinedDispatches(){
    dispatch(incrementProductCount())
    dispatch(incrementProductAmount(200))
  }

  return (
    <div className={styles.productMain} onClick = {combinedDispatches}>
      <img
        src={'/images/imageError.png'}
        alt=""
        className={styles.productImage}
      />
      <div className={styles.productDesc}>
        <div className={styles.productName}>
          <p className={styles.mainName}>Lorem ipsum dolor</p>
          <p className={styles.auxName}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            rerum!
          </p>
        </div>
        <div className={styles.colorsAndAvailability}>
          <p className={styles.availability}>available</p>
        </div>
        <div className={styles.priceWishlistBasket}>
          <p className={styles.price}>#0000</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
