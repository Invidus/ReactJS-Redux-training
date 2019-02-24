import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <Posts />
        </div>
    )
}
export default Profile;