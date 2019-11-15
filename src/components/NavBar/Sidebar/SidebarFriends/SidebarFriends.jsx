import React from 'react';
import style from './SidebarFriends.module.css';
import Friend from "./Friend/Friend";
import PropTypes from "prop-types";



const SidebarFriends = (props) => {

    let sidebarFriendsAvatars = props.friends.map(friend => <Friend avatar={<img src={friend.avatar}/>}/>);
    let sidebarFriendsNames =props.friends.map(friend => <Friend name={friend.name}/>)

    return (

        <div className={style.item}>
            <div className={style.sidebar}>
                <div className={style.sidebarFriends}>
                    <div className={style.title}>
                        My friends
                    </div>
                    {sidebarFriendsAvatars}
                    {sidebarFriendsNames}
                </div>
            </div>
        </div>
    )
};

export default SidebarFriends;

SidebarFriends.propTypes = {
    friends: PropTypes.array,
    avatar: PropTypes.string,
    name: PropTypes.string
}