import styles from "../styles/blogpost.module.css";
import { urlFor } from "../sanity";
import PortableText from "react-portable-text";
import { useForm, submitHandler } from "react-hook-form";

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
    _id: string
    title: string;
    publishedAt: string;
    description: string;
    body: any;
  };
}

interface Form {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

function Posts({ post }: Post) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

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
              Article By: <b>Lorem Ipsum</b>
            </h1>
          </div>
          <div className={styles.postText}>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
            />
          </div>
          <div className={styles.commentSection}>
            <p>Enjoyed this article?</p>
            <h1>Leave A Comment</h1>
            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />
            <form className={styles.form}>
              <label className={styles.label}>
                <span>Name:</span>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  {...register("name", { required: true })}
                />
              </label>

              <label className={styles.label}>
                <span>Email:</span>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className={styles.input}
                  {...register("email", { required: true })}
                />
              </label>

              <label className={styles.label}>
                <span>Comment:</span>
                <textarea
                  placeholder="Leave A Comment"
                  rows={8}
                  className={styles.textArea}
                  {...register("comment", {required: true})}
                />
              </label>
              {/* THIS WILL RETURN AN ERROR IF THERE IS A PROBLEM WITH THE COMMENT. PROBABLY A MISSING INPUT FIELD OR SOMETHING */}
              {errors.name && <p className = {styles.error}> Name cannot be blank</p>}
              {errors.email && <p className = {styles.error}> Email cannot be blank</p>}
              {errors.comment && <p className = {styles.error}> Name cannot be blank</p>}
            </form>
              <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
