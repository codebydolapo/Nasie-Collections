import styles from '../styles/contact.module.css'

function Contact({image, name}){
    return(
        <div className = {styles.contact}>
            <img className = {styles.contactImage} src = {image}/>
            <p>{name}</p>
        </div>
    )
}

export default Contact