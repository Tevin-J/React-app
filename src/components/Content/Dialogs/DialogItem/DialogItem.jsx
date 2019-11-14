import React from 'react';
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';


const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.activeLink}>{props.avatar}{props.name}</NavLink> {/*с помощью
            NavLink переключаемся по вкладкам без перезагрузки страницы*/}
        </div>
    )
}


export default DialogItem;

DialogItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.object,
    name: PropTypes.string
}