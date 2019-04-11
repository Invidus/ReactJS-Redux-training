import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import Posts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            // props.updateNewPostText(text)
            dispatch(action);
        },
        addPost: () =>{
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);
export default MyPostsContainer;