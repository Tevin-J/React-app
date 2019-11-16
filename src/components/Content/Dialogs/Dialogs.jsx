import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                            avatar= {<img src={dialog.avatar}/>}/>);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}
                                                                            from={message.from}/>);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={style.messagesItem}>
                    {messagesElements}
                </div>
            </div>
            <div className={style.sendBlock}>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

Dialogs.propTypes = {
    dialogsData: PropTypes.array,
    messagesData: PropTypes.array,
    newMessageText: PropTypes.string
}