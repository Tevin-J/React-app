import React from 'react';
import style from "./Navbar.module.css"; /*модули css позволяют использовать в названии классов самые простые названия,
реакт сам преобразует имена классов в уникальные*/
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}> {/*класс с основным атрибутом item по умолчанию сразу попадет в объект*/}
                <NavLink to="/profile" activeClassName={style.activeLink}>My profile</NavLink> {/*А дополнительный
                атрибут activeLink только тогда, когда будет необходимо. Основной атрибут в className, а дополнительный
                в activeClassName, так как className для этого объекта уже существует*/}
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink> {/*NavLink вместо <a>,
                чтоб страница при переходе по ссылкам не перезагружалась, а просто отрисовывала необходимые компоненты.
                Вместо href в NavLink используется атрибут to*/}
            </div>
            <div className={style.item}>
                <NavLink to="/feed" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar; //чтоб в другом файле импортировать компоненту, мы должны ее экспортировать