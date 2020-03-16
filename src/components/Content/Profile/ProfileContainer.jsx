import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../Redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId; /*получаем userId с сервера при клике на юзера, для отрисовки
        своего профиля делаем проверку с помощью if*/
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) { /*если мы не авторизованы, то происходит редирект на страницу логинизации*/
            return (
                <Redirect to={'/login'}/>
            )
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let WithUrlDataProfileContainerComponent = withRouter(ProfileContainer) /*создаем дополнительную контейнерную компоненту
с помощью withRouter, которая будет брать данные из URL*/
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainerComponent);

