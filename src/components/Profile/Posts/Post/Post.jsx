import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        
        <div className={style.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/214107/93be3618-3439-4c3c-8f89-98753b95b7ed/s1200" />
            { props.message }
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>

    )
}
export default Post;