import './style.css';
import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';

const contentDiv = document.querySelector('#content');
contentDiv.appendChild(home);
contentDiv.appendChild(menu);
contentDiv.appendChild(contact);