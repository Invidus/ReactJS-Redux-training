import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import Posts from './MyPosts';



const MyPostsContainer = (props) => {
   let state = props.store.getState()

    let addPost = () => {
        // props.addPost()
        // let text = newPostElement.current.value; // current - native html element, 
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {//syncronizing with bll 
        let action = updateNewPostTextActionCreator(text)
        // props.updateNewPostText(text)
        props.store.dispatch(action)
    }

    return (
        <Posts updateNewPostText = {onPostChange} addPost = {addPost}
        posts = {state.profilePage.posts} newPostText = {state.profilePage.newPostText}/>
    )
}
export default MyPostsContainer;