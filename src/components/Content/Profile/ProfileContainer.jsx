import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId; /*получаем userId с сервера при клике на юзера, для отрисовки
        своего профиля делаем проверку с помощью if*/
        if (!userId) {
            userId = 2
        }
        profileAPI.setUser(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrlDataProfileContainerComponent = withRouter(ProfileContainer) /*создаем дополнительную контейнерную компоненту
с помощью withRouter, которая будет брать данные из URL*/
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainerComponent);

