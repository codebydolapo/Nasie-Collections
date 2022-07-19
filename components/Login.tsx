import styles from "../styles/login.module.css";
import UniversalLogo from "./UniversalLogo";
import Link from 'next/link'


function Login() {

  return (
    <div className={styles.loginMain}>
      <UniversalLogo />
      <div className = {styles.banner}>
        <h1>NASiE</h1>
        <div className = {styles.collections}>
          <div></div>
          <h1>COLLECTIONS</h1> 
        </div>
      </div>
      <Link href = '/home'>
        <button>Proceed To Shop</button>
      </Link>
        <p>
          By signing-in you agree to NASIE COLLECTIONS' Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
    </div>
  );
}

//By signing-in you agree to NASIE COLLECTIONS' Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

export default Login;
