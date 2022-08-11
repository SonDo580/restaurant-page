import beverages from "../components/menu/beverages";

const menu = document.createElement('div');
menu.classList.add('menu');

const mainHeading = document.createElement('h1');
mainHeading.textContent = 'Menu';
menu.appendChild(mainHeading);

const subHeading1 = document.createElement('h2');
subHeading1.textContent = 'Beverages';
menu.appendChild(subHeading1);
menu.appendChild(beverages);

export default menu;