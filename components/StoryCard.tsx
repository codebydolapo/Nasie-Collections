import styles from '../styles/storycard.module.css'

function StoryCard({image, name}: {image: string, name: string}){
    return(
        <div className = {styles.storyCard}>
            <img src = {image} alt = '' className = {styles.storyImage}/>
            <p>{name}</p>
        </div>
    )
}

export default StoryCard