import styles from '../styles/navbar.module.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {revealCheckout, removeContainer} from './reducers/actions'



function Navbar(){

    const counter = useSelector((state: any | unknown) => state.productCounter)
    const amount = useSelector((state: any | unknown) => state.productAmount)

    const dispatch = useDispatch()

    function combineDispatches(){
      dispatch(revealCheckout())
      dispatch(removeContainer())
    }

    return (
      <div className={styles.navbarMain}>
        <div className={styles.navbarNameLogo}>
          <img src={"/icons/logo.jpg"} className={styles.navbarLogo} alt="" />
          <p>
            <strong>Nasie</strong>Collections
          </p>
        </div>
        <div className={styles.navbarNavigation}>
          <div
            className={styles.navbarCart}
            onChange={(e) => e.preventDefault()}
            onClick={combineDispatches}
          >
            <p>
              Cart: <span>{counter}</span>
            </p>
            <p>
              Total: <span>#{amount}</span>
            </p>
          </div>
        </div>
      </div>
    );

}

export default Navbar