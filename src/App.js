import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {HashRouter, Route} from "react-router-dom";
import Feed from "./components/Content/Feed/Feed";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";



const App = (props) => {

    return (
        <HashRouter basename={process.env.PUBLIC_URL}> {/*необходим чтоб работал тэг route*/}
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content"> {/*создали данный класс, так как он общий для всего контента, и
                вынесли его на более высокий уровень, чтоб не прописывать в css-модуле каждой компоненты контента отдельно*/}
                    <Route path='/dialogs' render = { () => <Dialogs state={props.state.dialogsPage}/> }/> {/*работа тэга route: когда встечает заданный путь,
                    отрисовывает заданную компоненту. вместо метода component используем render, чтоб передать в компоненты пропсы*/}
                    <Route path='/profile' render = { () => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/feed' render = { () => <Feed/>}/>
                    <Route path='/music' render = { () => <Music/>}/>
                    <Route path='/settings' render = { () => <Settings/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
