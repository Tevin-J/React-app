import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import style from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit} className={style.form}>
                {createField('Email', 'email', Input, [required])}
                {createField('Password', 'password', Input, [required], {type: 'password'})}
                {createField(null, 'rememberMe', Input, null, {type: 'checkbox'}, 'remember me')}
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField('symbols', 'captcha', Input, [required])}
                {error && <div className={style.formSummaryError} > {error} </div>}
                <div>
                    <button>Sign in</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({ /*связываем LoginForm c redux-form*/
    form: 'login' /*уникальное имя для формы, которую мы оборачиваем HOCom reduxForm*/
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => { /*в эту ф-ю приходят все данные из формы*/
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/> {/*необходимо для сабмита прокинуть в HOC onSubmit. в него придут
            данные из формы, которую мы заполнили*/}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)