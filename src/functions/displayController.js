import home from '../pages/home';
import menu from '../pages/menu';
import contact from '../pages/contact';

const contentDiv = document.querySelector('#content');

function showHome(event) {
    removeActive();
    event.target.classList.add('active');
    contentDiv.textContent = '';
    contentDiv.appendChild(home);
}

function showMenu(event) {
    removeActive();
    event.target.classList.add('active');
    contentDiv.textContent = '';
    contentDiv.appendChild(menu);
}

function showContact(event) {
    removeActive();
    event.target.classList.add('active');
    contentDiv.textContent = '';
    contentDiv.appendChild(contact);
}

function removeActive() {
    const buttons = document.querySelectorAll('header button');
    for (const button of buttons) {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        }
    }
}

export { showHome, showMenu, showContact };