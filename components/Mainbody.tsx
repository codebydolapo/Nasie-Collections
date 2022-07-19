import styles from "../styles/mainbody.module.css";
import Subnav from "./Subnav";
import ProductContainer from "./ProductContainer";

function Mainbody({watches, clothing, bags, stationery, footwear, gadgets}: any) {
  return (
    <div className={styles.mainBody}>
      <Subnav
      watches = {watches}
      bags = {bags}
      stationery = {stationery}
      clothing = {clothing}
      footwear = {footwear}
      gadgets = {gadgets}
      />
      <ProductContainer/>
    </div>
  );
}

export default Mainbody;
