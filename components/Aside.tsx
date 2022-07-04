import styles from '../styles/aside.module.css'
import {urlFor} from '../sanity'

interface Props{
    image: string,
    title: string
}

function Aside({image, title}: Props){
    return(
        <div className = {styles.aside}>
            <img src = {urlFor(image).url()} className = {styles.image} alt = ''/>
            <p>{title}</p>
        </div>
    )
}

export default Aside