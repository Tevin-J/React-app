import React from 'react';
import {sendMessageActionCreator} from "../../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => { //mapStateToProps - ф-я которая создает объект, которые возвращают state.
    // Этот state это аналог state=store.getState()
    return (
        {
            dialogsPage: state.dialogsPage //св-во dialogsPage попадает в пропсы в компоненту Dialogs
        }
    )
}

let mapDispatchToProps = (dispatch) => { //mapDispatchToProps - ф-я которая создает объект, из которого в пропсы
    // попадут коллбеки. эти коллбеки диспатчат что-то в store dispatch приходит как store.dispatch().bind(store)
    return (
        {
            sendMessage: (newMessageText) => {
                dispatch(sendMessageActionCreator(newMessageText))
            }
        }
    )
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

