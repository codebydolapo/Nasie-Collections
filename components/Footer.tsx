import Link from "next/link";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>copyright: bashorun dolapo</div>
      <div className={styles.bottom}>
        <Link href="">
          <img
            className={styles.socialIcons}
            alt=""
            src="/icons/facebook.png"
          />
        </Link>
        <Link href="">
          <img className={styles.socialIcons} alt="" src="/icons/github.jpg" />
        </Link>
        <Link href="">
          <img className={styles.socialIcons} alt="" src="/icons/twitter.png" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
