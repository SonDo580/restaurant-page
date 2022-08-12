import home from '../pages/home';
import menu from '../pages/menu';
import contact from '../pages/contact';

const contentDiv = document.querySelector('#content');

function showHome() {
    showActive('home');
    contentDiv.textContent = '';
    contentDiv.appendChild(home);
}

function showMenu() {
    showActive('menu');
    contentDiv.textContent = '';
    contentDiv.appendChild(menu);
}

function showContact() {
    showActive('contact');
    contentDiv.textContent = '';
    contentDiv.appendChild(contact);
}

export { showHome, showMenu, showContact };