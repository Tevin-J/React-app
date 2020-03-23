import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return (
        <form className={style.sendBlock} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]} name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                      avatar= {<img src={dialog.avatar}/>}/>);
    let messagesElements = state.messagesData.map(message => <Message message={message.message} from={message.from}/>);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
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
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
}

export default Dialogs;

Dialogs.propTypes = {
    dialogsData: PropTypes.array,
    messagesData: PropTypes.array,
    newMessageText: PropTypes.string
}