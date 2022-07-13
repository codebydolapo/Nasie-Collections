import styles from "../styles/login.module.css";
// import Image from 'next/image'
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className={styles.login}>
      <img src="/icons/facebook.png" className={styles.facebookLogo} alt="" />
      <h1
        onClick={() => {
          signIn();
        }}
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
