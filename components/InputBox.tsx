import styles from "../styles/inputbox.module.css";
import Session from "C://PurpleNetwork/PurpleNetwork/types.d";
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid'
import {useRef} from 'react'
import {db} from './firebase'
import { doc, setDoc } from "firebase/firestore";


function InputBox({session}: Session) {

    const inputRef: any | null | string = useRef(null)

    async function handleSubmit(e: any){
      e.preventDefault();

      if (inputRef.current.value === null){
        return null;
      }

      // Add a new document in collection "cities"
      await setDoc(doc(db, "posts", `post${Math.floor(Math.random()*1000)}`), {
        name: session.user.name,
        message: inputRef.current.value,
        email: session.user.email,
        image: session.user.image,
      });

      inputRef.current.value = ''
    }

  return (
    <div className={styles.inputBox}>
      <div className={styles.input}>
        <img src={session.user.image} className={styles.inputImage} alt="" />
        <form onSubmit = {handleSubmit}>
          <input
            type="text"
            ref = {inputRef}
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button>Submit</button>
        </form>
      </div>
      <div className={styles.inputOptions}>
        <div>
          <VideoCameraIcon className={styles.icon} color={"rgb(202, 63, 63)"} />
          <p className={styles.navDescription}>Live Video</p>
        </div>
        <div>
          <CameraIcon className={styles.icon} color={"tomato"} />
          <p className={styles.navDescription}>Photo/Video</p>
        </div>
        <div>
          <EmojiHappyIcon className={styles.icon} color={"teal"} />
          <p className={styles.navDescription}>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
