import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state from "./components/Redux/state";

/*импортирует state из state.js, вызывает ф-ю render в render.js и передает ей state*/

rerenderEntireTree(state); /*вызов ф-и отсюда загружает страницу в первый раз и в последующие
перебрасывает в ф-ю в render.js данные из state.js*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
