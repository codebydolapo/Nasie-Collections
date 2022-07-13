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
import { signOut } from "next-auth/react";


function Navbar({session}) {
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
      <div className={styles.navBarRight}>
        <p className={styles.username}>{session.user.name}</p>
        {/* <div className={styles.rightNav}>
          <div>
            <ViewGridIcon className={styles.navBarRightIcons} />
          </div>
          <div>
            <ChatIcon className={styles.navBarRightIcons} />
          </div>
          <div>
            <BellIcon className={styles.navBarRightIcons} />
          </div>
          <div>
            <ChevronDownIcon className={styles.navBarRightIcons} />
          </div>
        </div> */}
        <img src = {session.user.image} alt  = '' className = {styles.profileImg} onClick= {()=>{signOut()}}/>
      </div>
    </div>
  );
}

export default Navbar;
