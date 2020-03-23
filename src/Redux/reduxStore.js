import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({ //combineReducers объединяет reducerы вместе с их ветками стейта
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer //обязательно ключ должен быть назван form, потому что библиотека redux-form будет в стейте искать именно form
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); /*redux создает store с помощью команды
createStore, добавляем прослойку thunkMiddleware для того, чтоб BLL мог выполнять запросы на сервер*/

export default store;