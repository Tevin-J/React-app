import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({ //combineReducers объединяет reducerы вместе с их ветками стейта
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); /*redux создает store с помощью команды
createStore, добавляем прослойку thunkMiddleware для того, чтоб BLL мог выполнять запросы на сервер*/

export default store;