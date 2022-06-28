import styles from '../styles/postcard.module.css'
import { urlFor } from "../sanity";


function Postcard({image, title}:any){
	return (
    <div className={styles.postCardMain}>
      <img src={urlFor(image).url()} alt="" className={styles.postImage} />
      <h1 className={styles.postHeader}>{title}</h1>
    </div>
  );
}

export default Postcard;