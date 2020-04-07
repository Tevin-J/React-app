import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}> {/*необходим чтоб работал тэг route*/}
        <Provider store={store}> {/*с помощью тега provider библиотеки react-redux создаем контекст и делаем store
            доступным для всех компонент которые мы обернули этим тегом? тем самым не нужно передавать весь store через
            пропсы вниз по дереву, а просто взять их из контекста в контейнерных компонентах*/}
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
