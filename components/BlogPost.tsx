import styles from "../styles/blogpost.module.css";
import { useState } from "react";
import { urlFor } from "../sanity";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";

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
    _id: string;
    title: string;
    publishedAt: string;
    description: string;
    body: any;
    comments: {
      approved: boolean;
      comment: string;
      email: string;
      name: string;
      post: any;
      createdAt: string;
      _id: string;
    };
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

  const submitFunction: SubmitHandler<Form> = async (data) => {
    //console.log(data);
    await fetch("/api/postComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setNameState("");
        setEmailState("");
        setCommentState("");
        alert("Submitted! Comment will show up when approved.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [commentState, setCommentState] = useState("");

  function handleNameChange(e: any) {
    setNameState(e.target.value);
  }

  function handleEmailChange(e: any) {
    setEmailState(e.target.value);
  }

  function handleCommentChange(e: any) {
    setCommentState(e.target.value);
  }

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
              content={post.body[0]}
            />
            <br />
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body[1]}
            />
            <br />
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body[2]}
            />
            <br />
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
            <form
              onSubmit={handleSubmit(submitFunction)}
              className={styles.form}
            >
              <label className={styles.label}>
                <span>Name:</span>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  {...register("name", { required: true })}
                  value={nameState}
                  onChange={handleNameChange}
                />
              </label>

              <label className={styles.label}>
                <span>Email:</span>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className={styles.input}
                  {...register("email", { required: true })}
                  value={emailState}
                  onChange={handleEmailChange}
                />
              </label>

              <label className={styles.label}>
                <span>Comment:</span>
                <textarea
                  placeholder="Leave A Comment"
                  rows={8}
                  className={styles.textArea}
                  {...register("comment", { required: true })}
                  value={commentState}
                  onChange={handleCommentChange}
                />
              </label>
              {/* THIS WILL RETURN AN ERROR IF THERE IS A PROBLEM WITH THE COMMENT. PROBABLY A MISSING INPUT FIELD OR SOMETHING */}
              {errors.name && (
                <p
                  style={{ color: "red", fontSize: "12px" }}
                  className={styles.error}
                >
                  {" "}
                  Name cannot be blank
                </p>
              )}
              {errors.email && (
                <p
                  style={{ color: "red", fontSize: "12px" }}
                  className={styles.error}
                >
                  {" "}
                  Email cannot be blank
                </p>
              )}
              {errors.comment && (
                <p
                  style={{ color: "red", fontSize: "12px" }}
                  className={styles.error}
                >
                  {" "}
                  Name cannot be blank
                </p>
              )}
              <button>Submit</button>
            </form>
          </div>
          <hr />
          <div className={styles.commentDiv}>
            <h1>Comments</h1>
            <div className={styles.commentBody}>
              {post.comments.map((comment: any) => {
                return (
                  <div className={styles.comment} key={comment._id}>
                    <h3>
                      <span className={styles.commenterName}>
                        {comment.name}
                      </span>
                      : {comment.comment}
                    </h3>
                    <hr />
                    <div className={styles.emailTimelineDiv}>
                      <h4 className={styles.email}>{comment.email}</h4>
                      <h4 className={styles.timeline}>
                        <span>Created At:</span>{" "}
                        {new Date(comment._createdAt).toLocaleString()}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
