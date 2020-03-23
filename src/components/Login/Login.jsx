import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/> {/*вместо инпутов пишем тег из
                    redux-form Field, в котором указываем в атрибуте component то, что хотим отрисовать. атрибут name
                    обязательный*/}
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} type={'password'}/>
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({ /*связываем LoginForm c redux-form*/
    form: 'loginForm' /*уникальное имя для формы, которую мы оборачиваем HOCom reduxForm*/
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => { /*в эту ф-ю приходят все данные из формы*/
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/> {/*необходимо для сабмита прокинуть в HOC onSubmit. в него придут
            данные из формы, которую мы заполнили*/}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)