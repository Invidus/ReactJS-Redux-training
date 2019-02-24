import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return (
    <div>
        <div >
            <div>
                <img src='http://agarwalsoft.com/dev3/assets/image-resources/poly-bg/poly-bg-1.jpg' width='1200px' alt='bg'></img>
            </div>
            <div className = {style.descriprionBlock}>
                avatar + description
            </div>
        </div>
    </div>
    )
}
export default ProfileInfo;