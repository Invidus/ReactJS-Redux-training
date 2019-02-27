import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
   
    let postsElements = props.posts // Обработка сообщений с сервера
    .map(p =>  <Post message={p.message} like={p.likes} />) 
    
    let newPostElement = React.createRef();// Create link(textarea)

    let addPost = () => {
        let text = newPostElement.current.value; // current - native html element, 
        
    }


    return (
        <div className={style.postBlock}>
            <h4> my posts</h4>
            <div>
                <div>
                    <textarea ref = {newPostElement}></textarea>
                </div>
                <div>
                    <button onClick = { addPost }>Post it! </button>
                </div>
            </div>
            <div className={style.post}>
                {postsElements}
            </div>
        </div>
    )
}
export default Posts;