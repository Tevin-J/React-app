import React from 'react';
import style from './Users.module.css'
import defaultUserPhoto from '../../assets/images/defaultUserPhoto.svg'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <span>
                <div className={style.userPhoto}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : defaultUserPhoto}
                             className={style.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                {/*<span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>*/}
            </span>
        </div>
    )
}
export default User