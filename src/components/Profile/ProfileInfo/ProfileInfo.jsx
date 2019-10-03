import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.atlasandboots.com/wp-content/uploads/2019/05/feat-image-1-most-beautiful-mountains-in-the-world.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;