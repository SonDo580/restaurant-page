import beverages from "../components/menu/beverages";
import foods from "../components/menu/foods";

const menu = document.createElement('div');
menu.classList.add('menu');

const mainHeading = document.createElement('h1');
mainHeading.textContent = 'Menu';
menu.appendChild(mainHeading);

const subHeading1 = document.createElement('h2');
subHeading1.textContent = 'Beverages';
menu.appendChild(subHeading1);
menu.appendChild(beverages);

const subHeading2 = document.createElement('h2');
subHeading2.textContent = 'Main Foods';
menu.appendChild(subHeading2);
menu.appendChild(foods);

export default menu;