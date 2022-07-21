import styles from '../styles/checkoutcard.module.css'
import {useDispatch} from 'react-redux'
import {removeCheckoutItem, decrementProductAmount, decrementProductCount} from './reducers/actions'


interface Props {
  image: string;
  price: number;
  title: string;
  availability: boolean;
  description: string;
  id: number;
}

function CheckoutCard({image, title, availability, description, price, id}: Props){
  //makes sure the text doesn't overflow and cause problems
  function truncateString(text: string, n: number) {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  }

  const dispatch = useDispatch()

  function combinedDispatches(){
    dispatch(removeCheckoutItem({id}))
    dispatch(decrementProductCount())
    dispatch(decrementProductAmount(price))
  }

  return (
    <div className={styles.productMain} onClick = {combinedDispatches}>
      <img
        src={image ? image : "/images/imageError.webp"}
        alt=""
        className={styles.productImage}
      />
      <div className={styles.productDesc}>
        <div className={styles.productName}>
          <p className={styles.mainName}>
            {title ? truncateString(title, 20) : "No-Name"}
          </p>
          <p className={styles.auxName}>{truncateString(description, 35)}</p>
        </div>
        {availability && (
          <div className={styles.colorsAndAvailability}>
            <p className={styles.availability}>available</p>
          </div>
        )}
        {!availability && (
          <div className={styles.colorsAndUnavailability}>
            <p className={styles.unavailability}>unavailable</p>
          </div>
        )}
        <div className={styles.priceWishlistBasket}>
          <p className={styles.price}>#{price ? price : "0000"}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard