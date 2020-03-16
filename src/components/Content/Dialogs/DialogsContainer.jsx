import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//контейнерная компонента является родительской для своей презентационной и освобождает ее от знания store и его методов
let mapStateToProps = (state) => { //mapStateToProps - ф-я которая создает объект, которые возвращают state.
    // Этот state это аналог state=store.getState()
    return (
        {
            dialogsPage: state.dialogsPage, //св-во dialogsPage попадает в пропсы в компоненту Dialogs
            isAuth: state.auth.isAuth
        }
    )
}

let mapDispatchToProps = (dispatch) => { //mapDispatchToProps - ф-я которая создает объект, из которого в пропсы
    // попадут коллбеки. эти коллбеки диспатчат что-то в store dispatch приходит как store.dispatch().bind(store)
    return (
        {
            sendMessage: () => {
                dispatch(sendMessageActionCreator())
            },
            updateNewMessageText: (text) => {
                dispatch(updateNewMessageTextActionCreator(text))
            }
        }
    )
}
//эти методы mapDispatchToProps mapStateToProps настраивают connect и объясняют по каким правилам мы законнектим Dialogs в store

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) //с помощью метода connect библиотеки
// react-redux создается контейнерная компонента, в которую через пропсы приходят mapStateToProps и mapDispatchToProps,
// и она отрисует презентационную компоненту

export default DialogsContainer;

