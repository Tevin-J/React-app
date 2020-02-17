import React from 'react';
import style from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: false, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                fullname: 'Vasily', location: {city: 'Minsk', country: 'Belarus'}, status: 'I am Vasily'},
            {id: 2, followed: true, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                fullname: 'Stepan', location: {city: 'Moscow', country: 'Russia'}, status: 'I am Stepan'},
            {id: 3, followed: false, photoUrl: 'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                fullname: 'Timofey', location: {city: 'Kiev', country: 'Ukraine'}, status: 'I am Timofey'}
        ])
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={style.userPhoto}>
                            <img src={user.photoUrl}/>
                        </div>
                        <div>
                            {user.followed
                            ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(user.id)}}>Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{user.fullname}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users