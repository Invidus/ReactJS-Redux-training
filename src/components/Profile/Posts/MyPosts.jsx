import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';



const Posts = (props) => {
   
    let postsElements = props.posts // Обработка сообщений с сервера
    .map(p =>  <Post message={p.message} like={p.likes} />) 
    
    let newPostElement = React.createRef();// Create link(textarea)

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {//syncronizing with bll 
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postBlock}>
            <h4> my posts</h4>
            <div>
                <div>
                    <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick = { onAddPost }>Post it! </button>
                </div>
            </div>
            <div className={style.post}>
                {postsElements}
            </div>
        </div>
    )
}
export default Posts;