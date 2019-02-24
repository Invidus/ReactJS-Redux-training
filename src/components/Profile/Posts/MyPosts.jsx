import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const  Posts = () => {
   return(   
    <div>
        my posts
        <div>
            <textarea></textarea>
            <button>Post it! </button>
        </div>
        <div className = {style.post}>          
            <Post message = "Hello, it's me" like = "5"/>   
            <Post message = "Oo, Hi, how are you?" like = "3"/>
        </div>
    </div>
    )
}
export default Posts;