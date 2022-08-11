import './style.css';
import home from './pages/home';
import menu from './pages/menu';

const contentDiv = document.querySelector('#content');
contentDiv.appendChild(home);
contentDiv.appendChild(menu);
