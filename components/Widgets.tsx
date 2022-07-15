import styles from "../styles/widgets.module.css";
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Contact from './Contact'

interface Dataset{
    src: string,
    name: string
}

function Widgets() {
  const dataset: Dataset[] = [
    { src: "https://links.papareact.com/r57", name: "qui libero" },
    { src: "https://links.papareact.com/kxk", name: "id debitis" },
    { src: "https://links.papareact.com/6gg", name: "sit amet" },
    { src: "https://links.papareact.com/snf", name: "officia iust" },
    { src: "https://links.papareact.com/kxk", name: "amet consectetur" },
    { src: "https://links.papareact.com/6gg", name: "placeat non" },
    { src: "https://links.papareact.com/r57", name: "Lorem Ipsum" },
    { src: "https://links.papareact.com/kxk", name: "amet consectetur" },
    { src: "https://links.papareact.com/6gg", name: "placeat non" },
    { src: "https://links.papareact.com/r57", name: "Lorem Ipsum" },
  ];

  return (
    <div className={styles.widgets}>
      <div className={styles.contactsTop}>
        <p>Contacts</p>
        <div className={styles.icons}>
          <VideoCameraIcon className={styles.widgetIcon} />
          <SearchIcon className={styles.widgetIcon} />
          <DotsHorizontalIcon className={styles.widgetIcon} />
        </div>
      </div>
      <div className = {styles.contactList}>
          {
              dataset.map<any>((data: {name: string, src: string})=>{
                  return <Contact
                    name = {data.name}
                    image = {data.src}
                  />
              })
          }
      </div>
    </div>
  );
}

export default Widgets;
