import React, {useState} from 'react';
import style from './Paginator.module.css'


const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={style.pages}>
            {portionNumber > 1 && <span onClick={() => {setPortionNumber(portionNumber - 1)}}>-</span>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber && <span onClick={() => {setPortionNumber(portionNumber + 1)}}>+</span>}
        </div>
    )
}
export default Paginator