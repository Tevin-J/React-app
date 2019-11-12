import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {addPost} from "./components/Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
}; /*получаем state не через импорт, чтоб не было циклической зависимости, а через пропсы.
Сторона, которая будет вызывать эту ф-ю, передаст данные через пропсы сюда*/

