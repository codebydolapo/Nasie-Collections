import styles from '../styles/welcome.module.css'
import UniversalLogo from './UniversalLogo'
import Password from './Password'
import Hello from './Hello'
import {useSelector} from 'react-redux'


function Welcome(){

    const passwordPanelFlag = useSelector((state:any) => state.passwordState)
    const dashboardPanelFlag = useSelector((state: any) => state.dashboardState)

    return(
        <div className = {styles.welcome}>
            <UniversalLogo/>
            {passwordPanelFlag && <Password/>}
            {dashboardPanelFlag && <Hello/>}
        </div>
    )
}

export default Welcome;