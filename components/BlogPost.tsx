import styles from "../styles/blogpost.module.css";
import { urlFor } from "../sanity";
import PortableText from "react-portable-text";

interface Post {
  post: {
    mainImage: {
      asset: {
        _ref: string;
      };
    };
    author: {
      image: string;
    };
    title: string;
    publishedAt: string;
    description: string;
    body: any;
  };
}

function Posts({ post }: Post) {
  return (
    <div className={styles.blogpost}>
      <div className={styles.banner}>
        <img
          src={urlFor(post.mainImage.asset._ref).url()}
          alt=""
          className={styles.bannerImage}
        />
        {/* <h1>Moon</h1> */}
      </div>
      <div className={styles.postBody}>
        <div className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.createdAt}>
            Created At: {new Date(post.publishedAt).toLocaleString()}
          </p>
          <p className={styles.description}>Description: {post.description}</p>
          <div className={styles.authorBlock}>
            <img
              src={urlFor(post.mainImage.asset._ref).url()}
              alt=""
              className={styles.authorImage}
            />
            <h1>
              Article By: <b>Bashorun Dolapo</b>
            </h1>
          </div>
          <div className={styles.postText}>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
            />
          </div>
          <form className={styles.form}>
            <label className={styles.label}>
              <span>Name:</span>
              <input type="text" placeholder="Name" className = {styles.input}/>
            </label>

            <label className={styles.label}>
              <span>Email:</span>
              <input type="text" placeholder="example@mail.com" className = {styles.input}/>
            </label>

            <label className={styles.label}>
              <span>Comment:</span>
              <textarea placeholder="Leave A Comment" rows={8} className = {styles.textArea}/>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Posts;
