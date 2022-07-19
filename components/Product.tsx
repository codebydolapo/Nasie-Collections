import styles from "../styles/product.module.css";
import {useDispatch} from 'react-redux'
import {incrementProductCount, incrementProductAmount} from './reducers/actions'

interface Props{
  image: string,
  price: number,
  title: string,
  availability: boolean
}

function Product({image, price, title, availability}: Props) {

  const dispatch = useDispatch()

  function combinedDispatches(){
    dispatch(incrementProductCount())
    dispatch(incrementProductAmount(200))
  }

  return (
    <div className={styles.productMain} onClick = {combinedDispatches}>
      <img
        src={image ? image : '/images/imageError.webp'}
        alt=""
        className={styles.productImage}
      />
      <div className={styles.productDesc}>
        <div className={styles.productName}>
          <p className={styles.mainName}>{title ? title : 'No-Name'}</p>
          <p className={styles.auxName}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            rerum!
          </p>
        </div>
        <div className={styles.colorsAndAvailability}>
          <p className={styles.availability}>{availability ? 'available' : 'unavailable'}</p>
        </div>
        <div className={styles.priceWishlistBasket}>
          <p className={styles.price}>#{price ? price : '0000'}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
