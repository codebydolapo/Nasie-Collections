import styles from "../styles/sidebarrow.module.css";

function SidebarRow({ Icon, title, image }: any) {
  return (
    <div className={styles.sidebarRow}>
      {Icon && (
        <div className={styles.iconDiv}>
          <Icon className = {styles.sidebarIcon}/>
        </div>
      )}
      {!Icon && (
        <div className={styles.iconDiv}>
          <img src = {image} alt= '' className = {styles.sidebarProfileImg} />
        </div>
      )}
      <div className={styles.nameDiv}>{title}</div>
    </div>
  );
}

export default SidebarRow;
