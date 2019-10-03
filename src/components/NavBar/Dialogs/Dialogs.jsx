import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className={s.message}>
       {props.textMessage}
    </div>
    )
} 

let dialogsData = [
    {id:1, name: "Sam"},
    {id:2, name: "Hren"}
];

let messagesData = [
    {id:1, message: "А не пойти ли ка тебе?!"},
    {id:2, message: "пРиФфЕт кАк ДеЛиФфКи"},
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>    
            <div className={s.messages}>
                <Message textMessage={messagesData[0].message}/>
                <Message textMessage={messagesData[1].message}/>
                
            </div>
        </div>
        
    )
}

export default Dialogs;