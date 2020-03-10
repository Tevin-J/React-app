const SEND_MESSAGE = 'SEND-MESSAGE'; //для удобства присвоили тип actiona переменной, чтоб обращаться уже с ней и не
// допускать ошибок при написании типа как строки
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

const dialogsReducer = (state = initialState, action) => {  //reducer получает свою ветку state (для первого отображения
    // страницы нужно отобразить initial state) и action. если тип actionа есть в данном reducere, то он изменит state
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return ({
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 4, message: text, from: 0}]
            })
        case UPDATE_NEW_MESSAGE_TEXT:
            return ({
                ...state,
                newMessageText: action.newMessageText //переписываем в стейте это свойство значением newMessageText
                // экшена. у данного типа экшена это свойство приходит значением text из DialogsContainer,
                // где и вызывается данный actionCreator
            })
        default:
            return state;
    }
};
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE}); //actionCreatorы создают actionы. action это
// объект у которого обязательно есть свойство type, а также другие св-ва по необходимости
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text});
export default dialogsReducer;