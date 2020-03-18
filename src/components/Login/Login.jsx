import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/> {/*вместо инпутов пишем тег из
                    redux-form Field, в котором указываем в атрибуте component то, что хотим отрисовать. атрибут name
                    обязательный*/}
                </div>
                <div>
                    <Field placeholder='Password' name='password' component='input'/>
                </div>
                <div>
                    <Field component='input' name='rememberMe' type='checkbox'/> remember me
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
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/> {/*необходимо для сабмита прокинуть в HOC onSubmit. в него придут
            данные из формы, которую мы заполнили*/}
        </div>

    )
}
export default Login