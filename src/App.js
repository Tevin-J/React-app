import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Feed from "./components/Content/Feed/Feed";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import PropTypes from 'prop-types';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";
/*с помощью React.lazy загружаем некоторые компоненты не сразу, а только когда они будут необходимы*/
const ProfileContainer = React.lazy(() => import('./components/Content/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Content/Dialogs/DialogsContainer'));

class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('some error occured')
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content"> {/*создали данный класс, так как он общий для всего контента, и
                вынесли его на более высокий уровень, чтоб не прописывать в css-модуле каждой компоненты контента отдельно*/}
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect from="/" to="/profile" />}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/> {/*работа тэга route: когда встечает заданный путь,
                        отрисовывает заданную компоненту. вместо метода component используем render, чтоб передать в компоненты пропсы*/}
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/> {/*с помощью :userId
                        показываем, что в урле profile должен быть параметр userId, а с помощью ? - что этот параметр -
                        опциональный и его может не быть(например для отрисовки своей страницы профиля)*/}
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/feed' render={() => <Feed/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
let AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);
const SamuraiJSApp = (props) => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}> {/*необходим чтоб работал тэг route*/}
            <Provider store={store}> {/*с помощью тега provider библиотеки react-redux создаем контекст и делаем store
            доступным для всех компонент которые мы обернули этим тегом? тем самым не нужно передавать весь store через
            пропсы вниз по дереву, а просто взять их из контекста в контейнерных компонентах*/}
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}
export default SamuraiJSApp
App.propTypes = {
    state: PropTypes.object
}