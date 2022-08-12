import home from '../pages/home';
import menu from '../pages/menu';
import contact from '../pages/contact';

const contentDiv = document.querySelector('#content');

function showHome() {
    contentDiv.textContent = '';
    contentDiv.appendChild(home);
}

function showMenu() {
    contentDiv.textContent = '';
    contentDiv.appendChild(menu);
}

function showContact() {
    contentDiv.textContent = '';
    contentDiv.appendChild(contact);
}

export { showHome, showMenu, showContact };