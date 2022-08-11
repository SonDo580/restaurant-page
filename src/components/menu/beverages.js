const beverages = [
    {
        name: 'Lemonade',
        description: 'This is a random description',
        price: '$20',
        image: '../../images/lemonade.jpeg'
    },
    {
        name: 'Honey',
        description: 'This is a random description',
        price: '$30',
        image: '../../images/honey.jpeg'
    }
];

const beveragesDiv = document.createElement('div');
beveragesDiv.classList.add('beverages');

const subHeading = document.createElement('h1');
subHeading.textContent = 'Beverages';
beveragesDiv.appendChild(subHeading);

for (let beverage of beverages) {
    const cardMenu = document.createElement('div');
    cardMenu.classList.add('card-menu');

    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', beverage.image);
    cardMenu.appendChild(cardImage);

    const cardName = document.createElement('h3');
    cardName.textContent = beverage.name;
    cardMenu.appendChild(cardName);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = beverage.description;
    cardMenu.appendChild(cardDescription);

    const cardPrice = document.createElement('span');
    cardPrice.textContent = beverage.price;
    cardMenu.appendChild(cardPrice);

    beveragesDiv.appendChild(cardMenu);
}

export default beveragesDiv;