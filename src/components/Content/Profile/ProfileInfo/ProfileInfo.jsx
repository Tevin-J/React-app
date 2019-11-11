import React from 'react';
import style from './ProfileInfo.module.css';
import {NavLink} from "react-router-dom";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src = "https://wallpaperaccess.com/full/900944.jpg"/>
                <div className={style.profileInfo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Kj6cPQDCYYnGSFWl729oSTFLzKA2WWQII5Mzj_eYAwB88T_E&s" alt="profileAvatar"/>
                    Anton Revta
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;