import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import defaultUserPhoto from '../../../../assets/images/defaultUserPhoto.svg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div>
            <div>
                {/*<img src = "https://wallpaperaccess.com/full/900944.jpg"/>*/}
                <div className={style.profileInfo}>
                    {props.profile.photos.large
                        ? <img src={props.profile.photos.large}/>
                        : <img src={defaultUserPhoto}/>
                    }

                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    {props.profile.fullName}
                    <div className={style.profileInfoBlock}>
                        {props.profile.aboutMe}
                    </div>
                    <div>
                        {props.profile.contacts.vk}
                    </div>
                    <div className={style.profileInfoBlock}>
                        В поисках работы:
                        <input type="checkbox" checked={props.profile.lookingForAJob}/>
                        <div>
                            {props.profile.lookingForAJobDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;