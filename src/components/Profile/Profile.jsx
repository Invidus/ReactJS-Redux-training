import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    
    return (
        <div>
            <ProfileInfo />
            <Posts posts = {props.state.posts} addPost = {props.addPost}/>
        </div>
    )
}
export default Profile;