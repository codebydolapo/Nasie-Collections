import styles from "../styles/postcard.module.css";
import { urlFor } from "../sanity";
import Link from "next/link";

interface Props{
  image: string,
  title: string,
  identifier: any,
  slug: any
}

function Postcard({ image, title, identifier, slug }: Props) {
  return (
    <Link href={`/posts/post/${slug}`}>
      <div className={styles.postCardMain}>
        <img src={urlFor(image).url()} alt="" className={styles.postImage} />
        <h1 className={styles.postHeader}>{title}</h1>
      </div>
    </Link>
  );
}

export default Postcard;
