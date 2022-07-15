import { Session } from "C://PurpleNetwork/PurpleNetwork/types.d";
import React from 'react'
import styles from '../styles/posts.module.css'
import PostCard from './PostCard'



function Posts({posts, session}: Session){

    return(
        <div className = {styles.posts}>
            {posts?.map((post: any)=>{
                return <PostCard
                    key = {post?.url}
                    posterImage = {session?.user.image}
                    message = {post.message}
                    postImage= {post?.url}
                    name = {post.name}
                />
            })}
        </div>
    )
}

export default Posts