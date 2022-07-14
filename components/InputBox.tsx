import styles from "../styles/inputbox.module.css";
import Session from "C://PurpleNetwork/PurpleNetwork/types.d";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function InputBox({ session }: Session) {
  const inputRef: any  = useRef(null);

  const filePickerRef: any = useRef(null);

  const [imageUpload, setImageUpload]: any = useState(null);

  const [imageDisplay, setImageDisplay]: any = useState(null);

  const [imageUrl, setImageUrl] = useState("");

  function pushImage(e: any) {
    setImageDisplay(null)
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent: any) => {
      setImageDisplay(readerEvent.target.result);
    };

    setImageUpload(e.target.files[0]);
  }

  function removeImage() {
    setImageUpload(null);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (inputRef.current.value === null) {
      return null;
    }

    const storageRef = ref(
      storage,
      `posts/image${Math.floor(Math.random() * 100000)}`
    );

    const uploadTask = uploadBytesResumable(storageRef, imageUpload);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          console.log("File available at", downloadURL);
          alert("Post Uploaded Successfully");
          console.log(inputRef)
          setDoc(
            doc(db, "posts", `post${Math.floor(Math.random() * 100000)}`),
            {
              name: session.user.name,
              message: inputRef.current.value,
              email: session.user.email,
              image: session.user.image,
              url: downloadURL,
            }
          );
        });
      }
    );

    inputRef.current.value = "";
    filePickerRef.current.files = null;
    setImageUrl("");
    setImageDisplay(null)
  }

  return (
    <div className={styles.inputBox}>
      <div className={styles.input}>
        <img src={session.user.image} className={styles.inputImage} alt="" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button>Submit</button>
        </form>
        {imageDisplay && (
          <div className={styles.uploadImageDiv} onClick={removeImage}>
            <img src={imageDisplay} className={styles.uploadImage} alt="" />
          </div>
        )}
      </div>
      <div className={styles.inputOptions}>
        <div>
          <VideoCameraIcon className={styles.icon} color={"rgb(202, 63, 63)"} />
          <p className={styles.navDescription}>Live Video</p>
        </div>
        <div
          onClick={() => {
            filePickerRef.current.click();
          }}
        >
          <CameraIcon className={styles.icon} color={"tomato"} />
          <p className={styles.navDescription}>Photo/Video</p>
          <input type="file" hidden onChange={pushImage} ref={filePickerRef} />
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
