import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.activeLink}>{props.name}</NavLink> {/*с помощью
            NavLink переключаемся по вкладкам без перезагрузки страницы*/}
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: '1', name: 'Misha'},
        {id: '2', name: 'Valera'},
        {id: '3', name: 'Egor'}
    ]
    let messageData = [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'London is the capital of Great Britain'}
    ];
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
            </div>
            <div className={style.messagesItem}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs;