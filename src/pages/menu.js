import beverages from "../components/menu/beverages";

const menu = document.createElement('div');
menu.classList.add('menu');

const mainHeading = document.createElement('h1');
mainHeading.textContent = 'Menu';
menu.appendChild(mainHeading);

menu.appendChild(beverages);

export default menu;