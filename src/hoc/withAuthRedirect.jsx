import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

/*вынесли HOC по редиректу и необходимые для него данные в отдельную компоненту. isAuth будет по дефолту в реализации
редиректа и отдельно эти данные в компоненты, которые нужно редиректить, прокидывать не надо*/
let mapStateToPropsForRedirect = (state) => {
    return (
        {
            isAuth: state.auth.isAuth
        }
    )
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/login'/>
            }
            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}