import React from 'react';
import s from "./Dialogs.module.css"
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}>
                    John
                </div>
                <div className={s.dialog}>
                    Sam
                </div>
            </div>    
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    Goodbye
                </div>
            </div>
        </div>
        
    )
}

export default Dialogs;