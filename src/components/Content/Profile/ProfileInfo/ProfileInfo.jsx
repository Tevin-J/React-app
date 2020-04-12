import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import defaultUserPhoto from '../../../../assets/images/defaultUserPhoto.svg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
        () =>  setEditMode(false)
        )
    }
    return (
        <div>
            <div>
                <div className={style.profileInfo}>
                    {profile.photos.large
                        ? <img src={profile.photos.large}/>
                        : <img src={defaultUserPhoto}/>
                    }
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    {editMode
                        ? <ProfileDataFormReduxForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
                        : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => setEditMode(true)}/>
                    }
                </div>
            </div>
        </div>
    )
}
const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return (
        <div className={style.profileInfoBlock}>
            {isOwner && <div><button onClick={activateEditMode}>Редактировать</button></div>}
            <div><b>{profile.fullName}</b></div>
            <div>
                <b>В поисках работы: </b> {profile.lookingForAJob ? 'Да' : 'Нет'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>Мои навыки: </b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Обо мне :</b> {profile.aboutMe}
            </div>
            <div>
                <b>Мои контакты :</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

export default ProfileInfo;