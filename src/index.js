import * as serviceWorker from './serviceWorker';
import store from "./components/Redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Provider store={store}>
        <App/>
        </Provider>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState()); /*для отрисовки дерева при первой загрузке страницы*/

store.subscribe(()=> {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
