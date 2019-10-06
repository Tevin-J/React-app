import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/NavBar/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/NavBar/News/News';
import Music from './components/NavBar/Music/Music';
import Settings from './components/NavBar/Settings/Settings';

 {/*Загружено дополнение react-router-dom*/}


/*Вызываем необходимые компоненты. При помощи компонент все красиво и лаконично, иначе здесь
было бы много неструктурированной информации, а сейчас она разбита на смысловые блоки и в 
итоговый файл app.js приходят уже главные компоненты, которые образуют блоки на сайте*/ 
const App = (props) => {
  

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header /> 
      <NavBar />
          <div className='app-wrapper_content'> {/*Добавили класс оформления контента в корневом
        файле, так как оно будет одинаковое для всех вкладок контента*/}
            <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>}/> 
            {/*Использовано, чтоб переключаться по вкладкам
            следит за url, если там /dialogs, переходит во вкладку Dialogs*/}
            <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> }/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
           
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
