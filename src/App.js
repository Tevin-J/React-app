import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

/*Вызываем необходимые компоненты. При помощи компонент все красиво и лаконично, иначе здесь
было бы много неструктурированной информации, а сейчас она разбита на смысловые блоки и в 
итоговый файл app.js приходят уже главные компоненты, которые образуют блоки на сайте*/
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header /> 
      <NavBar />
      <Profile />
      </div>
  );
}

export default App;
