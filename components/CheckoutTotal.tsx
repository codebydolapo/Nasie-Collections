import styles from "../styles/checkouttotal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { revealContainer, removeCheckout } from "./reducers/actions";
import { link } from "fs";
import { useState } from "react";

interface CartItem {
  image: string;
  price: number;
  title: string;
  availability: boolean;
  description: string;
  id: number;
}

function CheckoutTotal() {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const amount = useSelector((state: any | unknown) => state.productAmount);
  const cart = useSelector((state: any | unknown) => state.checkoutItems);
  const dispatch = useDispatch();

  function combineDispatches() {
    dispatch(revealContainer());
    dispatch(removeCheckout());
  }

  function comingSoon() {
    alert("So sorry, I haven't had the time to add this feature yet");
  }

  //FUNCTION THAT COMPILES THE MESSAGE TO SEND ON WHATSAPP
  function whatsappOrder(e: any) {
    e.preventDefault();
    const arrayOfNames: string[] = [];

    let combinedArrayOfNames = cart.map((item: CartItem) => {
      return [...arrayOfNames, item.title];
    });
    let _combinedArrayOfNames = combinedArrayOfNames.join(", and a ");
    let _sendMessage = `Hello Nasie! I would like to order a ${_combinedArrayOfNames}. My name is `;

    let sendMessage: string = _sendMessage.replace(/ /g, "%20");
    setMessage(sendMessage);
    console.log(message);
    setLink(`https://wa.me/2348180593602?text=${message}`);
    window.open(link, "_blank");
  }

  return (
    <div className={styles.checkoutTotal}>
      <h1 className={styles.amount}>Total: #{amount}</h1>
      <div className={styles.buttonDiv}>
        <button className={styles.button1} onClick={comingSoon}>
          Pay Online
        </button>
        <button className={styles.button2} onClick={whatsappOrder}>
          Order On Whatsapp
        </button>
        <button className={styles.button3} onClick={combineDispatches}>
          Back To Marketplace
        </button>
      </div>
    </div>
  );
}

export default CheckoutTotal;
