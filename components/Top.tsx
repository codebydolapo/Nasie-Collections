import styles from "../styles/top.module.css";
import Link from "next/link";

function Top() {
  return (
    <Link href="#landing">
      <div className={styles.topMain}>
        <img src="/arrow.png" className={styles.arrow} alt="" />
        <p>TOP</p>
      </div>
    </Link>
  );
}

export default Top;
