import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter> {/*необходим чтоб работал тэг route*/}
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content"> {/*создали данный класс, так как он общий для всего контента, и
                вынесли его на более высокий уровень, чтоб не прописывать в css-модуле каждой компоненты контента отдельно*/}
                    <Route path='/dialogs' component={Dialogs}/> {/*работа тэга route: когда встечает заданный путь,
                    отрисовывает заданную компоненту*/}
                    <Route path='/profile' component={Profile}/>
                    <Route path='/feed' component={Feed}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
