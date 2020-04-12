import style from "./ProfileInfo.module.css";
import s from '../../../Common/FormsControls/FormsControls.module.css'
import React from "react";
import {createField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.profileInfoBlock}>
                <div><button>сохранить</button></div>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                <div><b>Имя</b></div> {createField('Мое имя', 'fullName', Input, [])}
                <div>
                    <b>В поисках работы: </b>
                    {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
                </div>
                <div>
                    <b>Мои навыки: </b> {createField('Мои профессиональные навыки', 'lookingForAJobDescription', Textarea, [])}
                </div>
                <div>
                    <b>Обо мне: </b> {createField('информация обо мне', 'aboutMe', Textarea, [])}
                </div>
                <div>
                <b>Мои контакты: </b> {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key} className={style.contact}>
                        <b>{key}: </b> {createField(key, 'contacts.' + key.toLocaleLowerCase(), Input, [])}
                    </div>
                )
                })}
            </div>
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm