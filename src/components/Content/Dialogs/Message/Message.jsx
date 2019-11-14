import React from 'react';
import style from './../Dialogs.module.css';
import PropTypes from 'prop-types';
import DialogItem from "../DialogItem/DialogItem";

const Message = (props) => {

    let classNameMessageFrom =  props.from === 0 ?  style.messageFrom0 : style.messageFrom1;

        return (
        <div className={style.message}>
            <div className={classNameMessageFrom}>

                <img src="https://joidesresolution.org/wp-content/uploads/mappress/icons/blue-dot.png"/>
                {props.message}

            </div>
        </div>
    )
};

export default Message;

Message.propTypes = {
    from: PropTypes.number,
    message: PropTypes.string
}