import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/MyPosts';

const Profile = () => {

    return (
    <div>
        <div >
            <div>
                <img src='http://agarwalsoft.com/dev3/assets/image-resources/poly-bg/poly-bg-1.jpg' width='1200px' alt='bg'></img>
            </div>
            <div>
                avatar + description
            </div>
        </div>
        <Posts/>
    </div>
    )
}
export default Profile;