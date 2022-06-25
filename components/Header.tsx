import Link from "next/link";
import styles from "../styles/header.module.css";
import { useState } from "react";
import { DataBucket } from "./StateProvider";
import {
  line1,
  line2,
  line3,
  linePassive,
  menuActiveStyle,
  menuInactiveStyle,
} from "./hamburger";
//THE IMPORT ABOVE CONTAINS ALL THE STATES FOR THE HAMBURGER ICON COLLAPSIBLE ANIMATION

function Header() {
  const [, dispatch] = DataBucket();
  const [burger, setBurger] = useState(false);

  const [lineStyle1, setLineStyle1] = useState(linePassive);
  const [lineStyle2, setLineStyle2] = useState(linePassive);
  const [lineStyle3, setLineStyle3] = useState(linePassive);

  function menu() {
    if (!burger) {
      setLineStyle1(line1);
      setLineStyle2(line2);
      setLineStyle3(line3);
      setBurger(true);
      dispatch({
        type: "MENU_ACTIVE",
        menuActive: menuActiveStyle,
      });
    } else {
      setLineStyle1(linePassive);
      setLineStyle2(linePassive);
      setLineStyle3(linePassive);
      setBurger(false);
      dispatch({
        type: "MENU_INACTIVE",
        menuActive: menuInactiveStyle,
      });
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <img src="/images/globe.png" alt="" className={styles.logo} />
        </Link>
        <h1 className={styles.title}>blogr</h1>
      </div>
      <div className={styles.hamburger} onClick={menu}>
        <div style={lineStyle1}></div>
        <div style={lineStyle2}></div>
        <div style={lineStyle3}></div>
      </div>
    </div>
  );
}

export default Header;
