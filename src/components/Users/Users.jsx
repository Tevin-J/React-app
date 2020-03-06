import React from 'react';
import style from './Users.module.css'
import userPhoto from "../../assets/images/user.png";

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
                            <img src={user.photos.small ? user.photos.small : userPhoto} className={style.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
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