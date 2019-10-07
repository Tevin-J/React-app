import React from 'react';
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"


let newMessageElement = React.createRef ();
let addMessage = () => {
    let text = newMessageElement.current.value
    alert(text);
};

const Dialogs = (props) => {
    
    
    let dialogsElements = props.state.dialogs 
        .map ( d => <DialogItem name={d.name} id={d.id}/> );    /*Вместо того, чтоб создавать массив, в котором нужно перечислять 
        отдельно каждый элемент который отобразит, что нужно сделать конкретно с каждым элементом, используем метод массива map.
        Этот метод автоматически переберет каждый элемент массива и сделает то, что нам необходимо с исходным массивом данных.
        В данном случае, метод map помогает автоматически перебрать все элементы массива dialogs и по очереди каждый элемент 
        отрисует там, где мы захотим этот массив отобразить*/
    
    let messagesElements = props.state.messages
        .map ( m =>  <Message textMessage={m.message}/>);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div>   
                <div className={s.messages}>
                    {messagesElements}               
                </div>
                <div className={s.textarea}>
                    <textarea ref={newMessageElement}> </textarea>
                </div>
                <div className={s.button}>
                    <button  onClick={addMessage}>add message</button>
                </div>    
            </div>    
        </div>
        
    )
}

export default Dialogs;