import React from 'react';
import style from './SidebarFriends.module.css';
import Friend from "./Friend/Friend";
import PropTypes from "prop-types";
import Profile from "../../../Content/Profile/Profile";


const SidebarFriends = (props) => {

    let sidebarFriendsAvatars = props.friends.map(friend => <Friend avatar={friend.avatar}/>);
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

Profile.propTypes = {
    friends: PropTypes.array,
}