import pizzaSrc from '../../images/pizza.jpg';
import beefSrc from '../../images/beef.jpeg';

const foods = [
    {
        name: 'Pizza',
        description: 'This is a random description',
        price: '$50',
        image: pizzaSrc
    },
    {
        name: 'Beef',
        description: 'This is a random description',
        price: '$100',
        image: beefSrc
    }
];

const foodsDiv = document.createElement('div');
foodsDiv.classList.add('foods');

for (let food of foods) {
    const cardMenu = document.createElement('div');
    cardMenu.classList.add('card-menu');

    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', food.image);
    cardMenu.appendChild(cardImage);

    const cardName = document.createElement('h3');
    cardName.textContent = food.name;
    cardMenu.appendChild(cardName);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = food.description;
    cardMenu.appendChild(cardDescription);

    const cardPrice = document.createElement('span');
    cardPrice.textContent = food.price;
    cardMenu.appendChild(cardPrice);

    foodsDiv.appendChild(cardMenu);
}

export default foodsDiv;