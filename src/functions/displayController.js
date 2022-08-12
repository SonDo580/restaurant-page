import home from '../pages/home';
import menu from '../pages/menu';
import contact from '../pages/contact';

const contentDiv = document.querySelector('#content');
const buttons = document.querySelectorAll('header button');

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

function showActive(tab) {
    for (const button of buttons) {
        if (button.textContent.toLowerCase() !== tab) {
            button.classList.remove('active');
            continue;
        }

        button.classList.add('active');
    }
}

export { showHome, showMenu, showContact };