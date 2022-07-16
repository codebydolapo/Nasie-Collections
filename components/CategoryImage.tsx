import styles from "../styles/categoryimage.module.css";

interface Props {
  image: string;
  title: string;
}

function CategoryImage({ image, title }: Props) {
  return (
    <div className={styles.categoryImage}>
      <img src={image} className={styles.image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default CategoryImage;
