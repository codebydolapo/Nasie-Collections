import styles from '../styles/feed.module.css'
import Stories from './Stories'
import InputBox from './InputBox'
import Session from "C://PurpleNetwork/PurpleNetwork/types.d";


function Feed({session}: Session){
    return(
        <div className  = {styles.feed}>
            <Stories/>
            <InputBox session = {session}/>
        </div>
    )
}

export default Feed