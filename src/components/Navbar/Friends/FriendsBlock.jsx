import React from 'react';
import style from './FriendsBlock.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    // let friendsName = props.state.friends.map( f => <> )
    
    
    return (
        <div className={style.item}>
            <figure>
                <img className={style.avatarImg} src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-12-512.png" alt="Avatar1" />
                <figcaption>{props.id}</figcaption>
                
            </figure>
            <img className={style.avatarImg} src="https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-11-512.png" alt="Avatar1" />
            <img className={style.avatarImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0WwPFEz81LGNDLQ7WD-HpJp2eRrtA0OlHT_F22aW9uxdGYbK" alt="Avatar1" />
        </div>
    )
}
export default Friends;