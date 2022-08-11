const beverages = [
    {
        name: 'Lemonade',
        description: 'This is a random description',
        price: '$20',
        image: '../../images/lemonade'
    },
    {
        name: 'Honey',
        description: 'This is a random description',
        price: '$30',
        image: '../../images/honey'
    }
];

const beveragesDiv = document.createElement('div');
beveragesDiv.classList.add('beverages');

const subHeading = document.createElement('h1');
subHeading.textContent = 'Beverages';
beveragesDiv.appendChild(subHeading);



export default beveragesDiv;