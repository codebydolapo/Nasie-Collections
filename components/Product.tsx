import styles from "../styles/product.module.css";
//import imageError from "/images/imageError.png";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";


function Product() {

  //ADDS AN ITEM TO THE CART
  // function addToCart() {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     item: {
  //       id: id,
  //       name: name,
  //       imgUrl: imgUrl,
  //       price: price,
  //       desc: desc,
  //       availability: availability
  //     },
  //   });

  //   console.log(cart);
  //   calculateTotal()
  // }

  //ALLOWS THE ADMIN TO DELETE ANY ITEM IN THE SHOP.
  //THE BUTTON THAT CONTROLS THIS IS ONLY VISIBLE TO ADMINISTRATORS.
  // async function deletePrompt() {
  //   const toDelete = window.confirm("Delete Item From Database?");
  //   if (toDelete) {
  //     const db = getFirestore();
  //     const ref = query(
  //       collection(db, "clothing"),
  //       where("name", '==', name)
  //     );
  //     //const docRef = doc(ref);
  //     const docSnap = await getDocs(ref);
  //     //console.log(docSnap)
  //     if (docSnap) {
  //       docSnap.forEach(async (document) => {
  //         console.log(document.id, " => ", document.data());
  //         await deleteDoc(doc(db, selectedCategory, document.id));
  //         alert("Deleted! Changes Will Take Effect Shortly");
  //       });
  //     } else {
  //       console.log("No such document!");
  //     }
      
  //   }
  // }

  // //COMBINES THE ADD TO CART AND THE CALCULATE TOTAL FUNCTIONS INTO A SINGLE FUNCTION THAT CAN BE CALLED AT THE SAME TIME.
  // // function combineFunctions() {
  // //     addToCart();
  //     calculateTotal(price);
  //   }

  // useEffect(()=>{
  //   combineFunctions()
  // }, [cartTotal])

  return (
    <div className={styles.productMain}>
      <img
        src={'/images/imageError.png'}
        alt=""
        className={styles.productImage}
      />
      <div className={styles.productImage}>
        <div className={styles.productName}>
          <p className={styles.mainName}>Lorem ipsum dolor</p>
          <p className="aux-name">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            rerum!
          </p>
        </div>
        <div className={styles.colorsAndAvailability}>
          <p className={styles.availability}>available</p>
        </div>
        <div className={styles.priceWishlistBasket}>
          <p className={styles.price}>#0000</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
