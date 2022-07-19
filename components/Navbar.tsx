import styles from '../styles/navbar.module.css'
import { useSelector } from "react-redux";





function Navbar(){

    const counter = useSelector((state: any | unknown) => state.productCounter)
    const amount = useSelector((state: any | unknown) => state.productAmount)

    return (
      <div className={styles.navbarMain}>
        <div className={styles.navbarNameLogo}>
          <img src={'/icons/logo.jpg'} className={styles.navbarLogo} alt="" />
          <p>
            <strong>Nasie</strong>Collections
          </p>
        </div>
        <div className={styles.navbarNavigation}>
          <div className={styles.navbarCart} onChange = {e => e.preventDefault()}>
            <p>
              Checkout: <span>{counter}</span>
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