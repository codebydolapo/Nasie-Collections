import { DataBucket } from "./StateProvider";
import { useState } from "react";
import styles from "../styles/menu.module.css";
import Link from "next/link";

function Menu() {
  const [{ menuActive }, dispatch] = DataBucket();

  function closeMenu() {
    dispatch({
      type: "MENU_HAMBURGER",
      menuHamburgerFlag: false,
    });
  }

  return (
    <div style={menuActive}>
      <div className={styles.navs}>
        <Link href="#landing">
          <h1 onClick={closeMenu}>Home</h1>
        </Link>
        <Link href="#categoryMain">
          <h1 onClick={closeMenu}>Categories</h1>
        </Link>
        <Link href="">
          <h1 onClick={closeMenu}>Posts</h1>
        </Link>
        <Link href="">
          <h1 onClick={closeMenu}>Featured</h1>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
