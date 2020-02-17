const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            let text = stateCopy.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messagesData.push({id: 4, message: text, from: 0})
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy
        }
        default:
            return state;
    }

    return state;
};
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text});
export default dialogsReducer;