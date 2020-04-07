import React from 'react';
import style from './Paginator.module.css'


const Paginator = ({currentPage, onReducePagesList, onIncreasePagesList, onPageChanged,
                       totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.pages}>
            {currentPage > 1 && <span onClick={onReducePagesList}>-</span>}
            {pages.map(p => {
                return <span className={currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
            {currentPage < 5 && <span onClick={onIncreasePagesList}>+</span>}
        </div>
    )
}
export default Paginator