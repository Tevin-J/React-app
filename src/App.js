import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Feed from "./components/Content/Feed/Feed";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import PropTypes from 'prop-types';
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
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
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/> {/*работа тэга route: когда встечает заданный путь,
                    отрисовывает заданную компоненту. вместо метода component используем render, чтоб передать в компоненты пропсы*/}
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/> {/*с помощью :userId
                    показываем, что в урле profile должен быть параметр userId, а с помощью ? - что этот параметр -
                    опциональный и его может не быть(например для отрисовки своей страницы профиля)*/}
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
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
export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

App.propTypes = {
    state: PropTypes.object
}