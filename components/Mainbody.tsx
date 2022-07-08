import styles from '../styles/mainbody.module.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'

function Mainbody(){
    return(
        <div className = {styles.mainBody}>
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}

export default Mainbody