import styles from '../styles/navbar.module.css'




function Navbar(){

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
              Checkout: <span>2</span>
            </p>
          </div>
        </div>
      </div>
    );

}

export default Navbar