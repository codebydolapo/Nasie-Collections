import styles from "../styles/subnav.module.css";
import CategoryImage from "./CategoryImage";
import { useDispatch } from "react-redux";
import { switchCategory, switchCategoryName } from "./reducers/actions";
import { useEffect } from "react";

function Subnav({
  watches,
  clothing,
  bags,
  stationery,
  footwear,
  gadgets,
}: any) {
  const dispatch = useDispatch();

  //this array combines all the others to make the bestselling array
  const bestSelling = shuffle(shuffle([
    ...watches,
    ...clothing,
    ...bags,
    ...stationery,
    ...footwear,
    ...gadgets,
  ])
)
  function shuffle(array: any) {
    let currentIndex: number = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    dispatch(switchCategory(bestSelling));
    dispatch(switchCategoryName("bestSelling"));
  }, []);

  return (
    <div className={styles.subNav}>
      <CategoryImage
        image={"/images/bestselling.jpg"}
        title={"Best-Selling"}
        func={() => dispatch(switchCategory(shuffle(bestSelling)))}
        name={() => dispatch(switchCategoryName("bestSelling"))}
      />
      <CategoryImage
        image={"/images/clothing.jpg"}
        title={"Clothing"}
        func={() => dispatch(switchCategory(clothing))}
        name={() => dispatch(switchCategoryName("clothing"))}
      />
      <CategoryImage
        image={"/images/footwear.jpg"}
        title={"Footwear"}
        func={() => dispatch(switchCategory(footwear))}
        name={() => dispatch(switchCategoryName("footwear"))}
      />
      <CategoryImage
        image={"/images/stationery.jpg"}
        title={"Stationery"}
        func={() => dispatch(switchCategory(stationery))}
        name={() => dispatch(switchCategoryName("stationery"))}
      />
      <CategoryImage
        image={"/images/gadgets.jpg"}
        title={"Gadgets"}
        func={() => dispatch(switchCategory(gadgets))}
        name={() => dispatch(switchCategoryName("gadgets"))}
      />
      <CategoryImage
        image={"/images/watches.png"}
        title={"Watches"}
        func={() => dispatch(switchCategory(watches))}
        name={() => dispatch(switchCategoryName("watches"))}
      />
      <CategoryImage
        image={"/images/bags.png"}
        title={"Bags"}
        func={() => dispatch(switchCategory(bags))}
        name={() => dispatch(switchCategoryName("bags"))}
      />
    </div>
  );
}

export default Subnav;
