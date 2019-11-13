import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./components/Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from "./components/Redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>, document.getElementById('root'));
};

rerenderEntireTree(state); /*для отрисовки дерева при первой загрузке страницы*/

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
