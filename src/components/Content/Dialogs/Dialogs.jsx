import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsData = [
        {id: '1', name: 'Misha'},
        {id: '2', name: 'Valera'},
        {id: '3', name: 'Egor'}
    ];
    let messageData = [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'London is the capital of Great Britain'}
    ];

    let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = messageData.map(message => <Message message={message.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messagesItem}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;