import React from 'react';
import style from './Users.module.css'
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {followUnfollowAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={style.usersPages}>
                {props.currentPage > 1 && <span onClick={props.onReducePagesList}>-</span>}
                {pages.map(p=>{
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={(e)=> {props.onPageChanged(p)}}>{p}</span>
                })}
                {props.currentPage < 5 && <span onClick={props.onIncreasePagesList}>+</span>}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={style.userPhoto}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} className={style.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, user.id)
                                    followUnfollowAPI.unfollowUser(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                            props.toggleFollowingInProgress(false, user.id)
                                        })
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, user.id)
                                    followUnfollowAPI.followUser(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleFollowingInProgress(false, user.id)
                                        })
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
        </div>
    )
}
export default Users