import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {users.map(user => <User user={user} followingInProgress={props.followingInProgress} follow={props.follow}
                                     unfollow={props.unfollow} key={user.id}/>)}
        </div>
    )
}
export default Users