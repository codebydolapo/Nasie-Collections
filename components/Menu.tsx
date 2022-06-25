import { DataBucket } from "../components/StateProvider";
import styles from "../styles/menu.module.css";
import Link from "next/link";

function Menu() {
  const [{ menuActive }, dispatch] = DataBucket();

  return (
    <div style={menuActive}>
      <div className={styles.navs}>
        <Link href="#landing">
          <h1>Home</h1>
        </Link>
        <Link href="#categoryMain">
          <h1>Categories</h1>
        </Link>
        <Link href="">
          <h1>Tags</h1>
        </Link>
      </div>
      <div className={styles.loginDiv}>
        <h1 className={styles.getStarted}>Get Started</h1>
        <h1>Sign Up</h1>
      </div>
    </div>
  );
}

export default Menu;
