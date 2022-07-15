import styles from "../styles/postcard.module.css";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { Session } from "C://PurpleNetwork/PurpleNetwork/types.d";

function PostCard({ posterImage, message, postImage, name }: Session) {
  return (
    <div className={styles.postCard}>
      <div className={styles.imageName}>
        <img alt="" src={posterImage} className={styles.posterImage} />
        <div>
          <p>{name}</p>
          {/* <p className = {styles.atName}>@{session.user.name}</p> */}
        </div>
      </div>
      <div className={styles.messageDiv}>
        <p>{message}</p>
      </div>
      {postImage && (
        <div className={styles.imageDiv}>
          <img src={postImage} className={styles.postImage} alt="" />
        </div>
      )}
      <div className={styles.likeButtons}>
        <div>
          <ThumbUpIcon className={styles.postIcon} />
          <p>Like</p>
        </div>
        <div>
          <ChatAltIcon className={styles.postIcon} />
          <p>Comment</p>
        </div>
        <div>
          <ShareIcon className={styles.postIcon} />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
