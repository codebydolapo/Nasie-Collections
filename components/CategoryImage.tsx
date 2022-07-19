import styles from "../styles/categoryimage.module.css";

interface Props {
  title: string;
  image: string
  func: () => any
  name: () => any
  //onClick: any 
}

function CategoryImage({ image, title, func, name }: Props) {

  function combinedFunctions(){
    func()
    name()
  }

  return (
    <div className={styles.categoryImage} onClick = {combinedFunctions}>
      <img src={image} className={styles.image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default CategoryImage;
