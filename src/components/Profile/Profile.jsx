import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    
    return (
        <div>
            <ProfileInfo />
            <Posts posts = {props.profilePage.posts}
             dispatch = {props.dispatch}
             newPostText = {props.profilePage.newPostText}/>
        </div>
    )
}
export default Profile;