import styles from '../styles/subnav.module.css'
import CategoryImage from './CategoryImage'

function Subnav(){
    return (
      <div className={styles.subNav}>
        <CategoryImage image={"/images/bestselling.jpg"} title = {'Best-Selling'}/>
        <CategoryImage image={"/images/clothing.jpg"} title = {'Clothing'}/>
        <CategoryImage image={"/images/footwear.jpg"} title = {'Footwear'}/>
        <CategoryImage image={"/images/stationery.jpg"} title = {'Stationery'}/>
        <CategoryImage image={"/images/gadgets.jpg"} title = {'Gadgets'}/>
        <CategoryImage image={"/images/watches.png"} title = {'Watches'}/>
        <CategoryImage image={"/images/bags.png"} title = {'Bags'}/>
      </div>
    );
}

export default Subnav