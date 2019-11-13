import React from'react';

let rerenderEntireTree = () => { /*заглушка, которая потом попадает в другие ф-и state.js. необходимо было ее здесь
создать, потому что ее нельзя импортировать из index.js, чтоб не было циклической зависимости*/
    console.log('state was changed');
}
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
        ],
        newMessageText: ''
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

export const addPost = () => { /*описание работы функций addPost и updateNewPost --- в MyPosts присваиваем значение в
textarea newPostText из state, на каждое изменение текста при помощи onPostChange мы вызываем функцию updateNewPostText,
в которую в качестве параметра входит newPostElement.current.value, эти данные записываются в newPostText.
Так побуквенно данные из UI попадают в state. Когда мы нажимаем кнопку Add Post вызывается локальная функция addPost,
которая в свою очередь вызывает глобальную функцию addPost из state.js, которая вносит новый объект с newPostText
значением ключа message в state.ProfilePage.PostData, и затем затирает newPostText, который также следом затирается в UI*/
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
        from: 0
    };
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => { /*нам в state.js нужна rerenderEntireTree для того чтоб перерисовывать дерево
каждый раз, когда произойдут какие-то изменения в state. Однако rerenderEntireTree у нас задана в index.js, а
импортировать ее сюда мы не можем, так как будет циклическая зависимость. Тогда мы передаем rerenderEntireTree сюда
через пропсы. Мы создаем свою фальш-rerenderEntireTree, просто чтоб потом на нее сослаться. создаем ф-ю subscribe с
параметром observer, и нашей фальш-rerenderEntireTree присваиваем пропс ф-ю observer. в index.js мы вызываем ф-ю
subscribe и в качестве аргумента observer вписываем нужную нам ф-ю rerenderEntireTree.*/
    rerenderEntireTree = observer;
}
export default state;