let store = {
    _state: {
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
                    id: 1,
                    name: 'Misha',
                    avatar: "https://thumbs.dreamstime.com/b/desenhos-animados-bonitos-da-cara-do-menino-110656357.jpg"
                },
                {
                    id: 2,
                    name: 'Valera',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnXsITUj-e_i32TpFr0CQNW0YM9n4dbUHo7r00ynUKW15hBtF&s"
                },
                {
                    id: 3,
                    name: 'Egor',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF8Z879_maOZBlmNXL_guXrL8Muk8JAGj6ugglvkN70ppycF5&s"
                }
            ],
            messagesData: [
                {id: 1, message: 'Hello!', from: 1},
                {id: 2, message: 'How are you?', from: 1},
                {id: 3, message: 'London is the capital of Great Britain', from: 0}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Misha',
                    avatar: "https://thumbs.dreamstime.com/b/desenhos-animados-bonitos-da-cara-do-menino-110656357.jpg"
                },
                {
                    id: 2,
                    name: 'Valera',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnXsITUj-e_i32TpFr0CQNW0YM9n4dbUHo7r00ynUKW15hBtF&s"
                },
                {
                    id: 3,
                    name: 'Egor',
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF8Z879_maOZBlmNXL_guXrL8Muk8JAGj6ugglvkN70ppycF5&s"
                }
            ]
        }
    },
    _callSubscriber () { /*заглушка, которая потом попадает в другие ф-и state.js. необходимо было ее здесь
создать, потому что ее нельзя импортировать из index.js, чтоб не было циклической зависимости*/
        console.log('state was changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) { /*нам в state.js нужна subscribe для того чтоб перерисовывать дерево
каждый раз, когда произойдут какие-то изменения в state. Однако rerenderEntireTree у нас задана в index.js, а
импортировать ее сюда мы не можем, так как будет циклическая зависимость. Тогда мы передаем rerenderEntireTree сюда
через пропсы. Мы создаем свою subscribe, просто чтоб потом на нее сослаться. создаем ф-ю subscribe с
параметром observer, и нашей subscribe присваиваем пропс ф-ю observer. в index.js мы вызываем ф-ю
subscribe и в качестве аргумента observer вписываем нужную нам ф-ю rerenderEntireTree.*/
        this._callSubscriber = observer;
    },

    dispatch(action) { //{type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
                from: 0
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }
}



export default store;