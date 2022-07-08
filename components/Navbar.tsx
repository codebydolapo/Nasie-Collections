import styles from "../styles/navbar.module.css";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  lagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <Image
          src="https://links.papareact.com/5me"
          width={30}
          height={30}
          layout="fixed"
        />
        <div className={styles.inputDiv}>
          <SearchIcon />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Search Purple"
          />
        </div>
      </div>
      <div className={styles.navBarCenter}></div>
      <div className={styles.navBarRight}></div>
    </div>
  );
}

export default Navbar;
