import React from 'react';
import {rerenderEntireTree} from "../../render";
let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Терперье и труд все перетрут.', likesCount: 15},
            {id: 2, message: 'Продам гараж. Пишите в лс.', likesCount: 12}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {
                id: '1',
                name: 'Misha',
                avatar: <img
                    src="https://thumbs.dreamstime.com/b/desenhos-animados-bonitos-da-cara-do-menino-110656357.jpg"
                    alt="avatar_id_1"/>
            },
            {
                id: '2',
                name: 'Valera',
                avatar: <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnXsITUj-e_i32TpFr0CQNW0YM9n4dbUHo7r00ynUKW15hBtF&s"
                    alt="avatar_id_2"/>
            },
            {
                id: '3',
                name: 'Egor',
                avatar: <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF8Z879_maOZBlmNXL_guXrL8Muk8JAGj6ugglvkN70ppycF5&s"
                    alt="avatar_id_3"/>
            }
        ],
        messagesData: [
            {id: '1', message: 'Hello!', from: 1},
            {id: '2', message: 'How are you?', from: 1},
            {id: '3', message: 'London is the capital of Great Britain', from: 0}
        ]
    },
    sidebar: {
        friends: [
            {
                id: '1',
                name: 'Misha',
                avatar: <img
                    src="https://thumbs.dreamstime.com/b/desenhos-animados-bonitos-da-cara-do-menino-110656357.jpg"
                    alt="avatar_id_1"/>
            },
            {
                id: '2',
                name: 'Valera',
                avatar: <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnXsITUj-e_i32TpFr0CQNW0YM9n4dbUHo7r00ynUKW15hBtF&s"
                    alt="avatar_id_2"/>
            },
            {
                id: '3',
                name: 'Egor',
                avatar: <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF8Z879_maOZBlmNXL_guXrL8Muk8JAGj6ugglvkN70ppycF5&s"
                    alt="avatar_id_3"/>
            }
        ]
    }
};

export let addPost = () => { /*эта ф-я addPost записывает данные в объект
postData, она не та addPost, которая в MyPosts. передаем ее через props в MyPosts.
и тот addPost который локальный, выполняет этот addPost глобальный*/
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText, /*сюда приходит значение, которое попало при вызове
        ф-и addPost в MyPosts.jsx. оно записалось в stata.profilePage.newPostText, его мы и взяли*/
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state); /*передаем state через пропсы в render.js.
    если бы мы ее здесь не вызвали и не передали в renderjs то изменения в
    state не фиксировались и страница не перерисовывалась*/
}

export let updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export default state;