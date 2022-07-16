import styles from "../styles/mainbody.module.css";
import Subnav from "./Subnav";
import ProductContainer from "./ProductContainer";

function Mainbody() {
  return (
    <div className={styles.mainBody}>
      <Subnav />
      <ProductContainer/>
    </div>
  );
}

export default Mainbody;
