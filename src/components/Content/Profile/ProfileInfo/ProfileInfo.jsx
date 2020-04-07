import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import defaultUserPhoto from '../../../../assets/images/defaultUserPhoto.svg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src = "https://wallpaperaccess.com/full/900944.jpg"/>*/}
                <div className={style.profileInfo}>
                    {profile.photos.large
                        ? <img src={profile.photos.large}/>
                        : <img src={defaultUserPhoto}/>
                    }

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    {profile.fullName}
                    <div className={style.profileInfoBlock}>
                        {profile.aboutMe}
                    </div>
                    <div>
                        {profile.contacts.vk}
                    </div>
                    <div className={style.profileInfoBlock}>
                        В поисках работы:
                        <input type="checkbox" checked={profile.lookingForAJob}/>
                        <div>
                            {profile.lookingForAJobDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;