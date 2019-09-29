import React from 'react';
import s from './Post.module.css';

/*Компонента всегда вызывается с параметрами. Главный параметр - props. атрибуты в props 
записываются при вызове компоненты (в данном случае в файле MyPosts.jsx) */
const Post = (props) => {
  return <div>

    <div className={s.item}>
      <img src='https://siamroads.com/wp-content/uploads/2016/12/male2.png' />
      <span> {props.message} </span>
      <div>
        <span>  like   {props.likesCount}</span>
      </div>
    </div>
  </div>

}
/*Обозначаем {s.item} а не просто item, так как 1)мы помещаем js код в  jsx, 
тогда его надо брать в {}, 2) привязываем item к конкретному стилю из необходимого 
модуля css, чтоб его свойство не влияло на другие item из других блоков. Такая привязка
создает для данного item уникальное имя, его можно посмотреть в консоли разработчика*/
export default Post;