import styles from '../styles/sidebar.module.css';
import SidebarRow from './SidebarRow';
import {ChevronDownIcon, ShoppingBagIcon, UserGroupIcon} from '@heroicons/react/outline'
import {CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon} from '@heroicons/react/solid'
import Session from "C://PurpleNetwork/PurpleNetwork/types.d";



function Sidebar({session}: Session){
    return(
        <div className = {styles.sideBar}>
            <SidebarRow image = {session.user.image} title = {session.user.name}/>
            <SidebarRow Icon = {UsersIcon} title = {'Friends'}/>
            <SidebarRow Icon = {UserGroupIcon} title = {'Groups'}/>
            <SidebarRow Icon = {ShoppingBagIcon} title = {'MarketPlace'}/>
            <SidebarRow Icon = {DesktopComputerIcon} title = {'Watch'}/>
            <SidebarRow Icon = {CalendarIcon} title = {'Events'}/>
            <SidebarRow Icon = {ClockIcon} title = {'Memories'}/>
            <SidebarRow Icon = {ChevronDownIcon} title = {'See More'}/>
        </div>
    )
}

export default Sidebar;