import styles from '../styles/feed.module.css'
import Stories from './Stories'
import InputBox from './InputBox'
import Session from "C://PurpleNetwork/PurpleNetwork/types.d";
import React from 'react';
import Posts from './Posts';


function Feed({session, posts}: Session){
    return(
        <div className  = {styles.feed}>
            <Stories/>
            <InputBox session = {session}/>
            <Posts posts = {posts} session = {session}/>
        </div>
    )
}

export default Feed