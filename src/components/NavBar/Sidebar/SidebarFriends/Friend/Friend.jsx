import React from 'react';
import style from './Friend.module.css';
import PropTypes from "prop-types";


const Friend = (props) => {

    return (
        <div className={style.sidebarFriend}>
            <div className={style.ava}>
                {props.avatar}
            </div>
            <div className={style.name}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;

Friend.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.object
}