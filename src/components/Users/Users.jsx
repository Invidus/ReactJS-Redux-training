import React from 'react';
import styles from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(resonse =>{
            props.setUsers(resonse.data.items)
        });
        
    }

    return <div>{
        props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null? u.photos.small:userPhoto} className={styles.usersPhoto}>
                        </img>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>

                    </span>
                </span>
            </div>)
    }
    </div>
}

export default Users