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
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <h1>PN</h1>
        <div className={styles.inputDiv}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Search Purple"
          />
        </div>
      </div>
      <div className={styles.navBarCenter}>
        <div>
          <HomeIcon className={styles.navBarCenterIcons} />
        </div>
        <div>
          <FlagIcon className={styles.navBarCenterIcons} />
        </div>

        <div>
          <PlayIcon className={styles.navBarCenterIcons} />
        </div>

        <div>
          <ShoppingCartIcon className={styles.navBarCenterIcons} />
        </div>

        <div>
          <UserGroupIcon className={styles.navBarCenterIcons} />
        </div>
      </div>
      <div className={styles.navBarRight}></div>
    </div>
  );
}

export default Navbar;
