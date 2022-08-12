import {showHome, showMenu, showContact } from '../functions/displayController'

const header = document.querySelector('header');

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.addEventListener('click', showHome);
header.appendChild(homeButton);

const menuButton = document.createElement('button');
menuButton.textContent = 'menu';
menuButton.addEventListener('click', showMenu);
header.appendChild(menuButton);

const contactButton = document.createElement('button');
contactButton.textContent = 'contact';
contactButton.addEventListener('click', showContact);
header.appendChild(contactButton);

export default header;