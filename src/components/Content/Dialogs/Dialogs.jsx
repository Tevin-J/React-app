import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem  id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>);
    let messagesElements = props.state.messagesData.map(message => <Message  message={message.message} from={message.from}/>);

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