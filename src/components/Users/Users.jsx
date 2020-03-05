import React from 'react';
import style from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) { /*если изначально длина массива юзеров равна нулю, то делаем get-запрос на сервер,
             и затем вызываем коллбек который засетает юзеров, полученных с сервера*/
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div className={style.usersPages}>
                    {pages.map(p=>{
                        return <span className={this.props.currentPage === p && style.selectedPage}
                            onClick={(e)=> {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={style.userPhoto}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} className={style.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
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

}

export default Users