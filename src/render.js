import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./components/Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
}; /*получаем state не через импорт из state.js, чтоб не было циклической зависимости, а через пропсы.
Сторона, которая будет вызывать эту ф-ю, передаст state данные через пропсы сюда*/

