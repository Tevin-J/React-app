import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink> {/*NavLink - специальная компонента вместо тега <a></a> для того, 
                                                чтоб страница переходила на новый url не перезагружаясь. 
                                                При первой загрузке страницы все необходимое загрузилось, а при перемещении
                                                по странице, ничего заново не загружается. В этом принцип SPA*/}
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs'activeClassName={s.activeLink}>Messages</NavLink> {/*Для активной ссылки ввели особый класс. */}
    </div>
    <div className={s.item}>
      <NavLink to='/news'activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music'activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings'activeClassName={s.activeLink}>Settings</NavLink>
    </div>
  </nav>
}

export default NavBar;