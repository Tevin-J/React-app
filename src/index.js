import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: '1', name: 'Misha'},
    {id: '2', name: 'Valera'},
    {id: '3', name: 'Egor'}
];
let messageData = [
    {id: '1', message: 'Hello!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'London is the capital of Great Britain'}
];
let postData = [
    {id:'1', message:'Privet!', likesCount: 15},
    {id:'2', message: 'Kak dela?', likesCount: 12}
];


ReactDOM.render(<App dialogsData={dialogsData} messageData={messageData} postData={postData}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
