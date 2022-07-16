import styles from '../styles/universallogo.module.css'

function UniversalLogo(){

    return(
        <div className = {styles.universalLogoMain}>
          <img src={'/icons/logo.jpg'} className={styles.universalLogo} alt="" />
          <p>
            <strong>Nasie</strong>Collections
          </p>
        </div>
    )

}

export default UniversalLogo