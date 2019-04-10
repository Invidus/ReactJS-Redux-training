import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import Posts from './MyPosts';
import StoreContext from '../../../StoreContext';



const MyPostsContainer = (props) => {



    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()

                let addPost = () => {
                    // props.addPost()
                    // let text = newPostElement.current.value; // current - native html element, 
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {//syncronizing with bll 
                    let action = updateNewPostTextActionCreator(text)
                    // props.updateNewPostText(text)
                    store.dispatch(action)
                }
                return (
                    <Posts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />)
            }
        }
        </StoreContext.Consumer>

    )
}
export default MyPostsContainer;