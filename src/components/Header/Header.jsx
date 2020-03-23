import React from 'react';
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
    <header className = {style.header}>
        <NavLink to='/feed'>
            <img src = "https://png.pngtree.com/element_our/sm/20180524/sm_5b072f1c21cb2.png"/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login } - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </NavLink>
    </header>
    );
}

export default Header;