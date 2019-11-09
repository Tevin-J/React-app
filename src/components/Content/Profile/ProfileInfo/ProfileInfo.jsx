import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src = "https://destinationreporterindia.com/wp-content/uploads/2019/09/International-Chiang-Mai-Colorful-hot-air-balloons-flying-over-mountain-at-Dot-Inthanon-in-Chiang-Mai.jpg"/>
                <div className={style.profileInfo}>
                ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;