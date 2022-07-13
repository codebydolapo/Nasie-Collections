import styles from '../styles/stories.module.css'
import StoryCard from './StoryCard'

const stories = [
  {
    name: "Lorem Ipsum",
    src: "/images/a.jpg",
    profile: "",
  },
  {
    name: "Dolor Sit",
    src: "/images/b.jpg",
    profile: "",
  },
  {
    name: "Amet Adilipsing",
    src: "/images/c.jpg",
    profile: "",
  },
  {
    name: "Eum Enim",
    src: "/images/d.jpg",
    profile: "",
  },
  {
    name: "Animi Deserunt",
    src: "/images/e.jpg",
    profile: "",
  },
  {
    name: "Fugit Labore",
    src: "/images/f.jpg",
    profile: "",
  },
  {
    name: "Lorem Labore",
    src: "/images/g.jpg",
    profile: "",
  },
  {
    name: "Quia Pariatur",
    src: "/images/h.jpg",
    profile: "",
  },
  {
    name: "John Veritatis",
    src: "/images/i.jpg",
    profile: "",
  },
  {
    name: "Sally Placeat",
    src: "/images/j.jpg",
    profile: "",
  },
];

function Stories(){
    
    return(
        <div className = {styles.stories}>
            {stories.map((story)=>{
                return <StoryCard
                name = {story.name}
                image = {story.src}
                />
            })}
        </div>
    )
}

export default Stories