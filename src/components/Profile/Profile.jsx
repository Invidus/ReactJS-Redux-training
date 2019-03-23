import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Posts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store = {props.store} />        
        </div>
    )
}
export default Profile;