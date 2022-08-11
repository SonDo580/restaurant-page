import tigerImgSrc from '../images/tiger.jpg';
import lionImgSrc from '../images/lion.jpg';
import leopardImgSrc from '../images/leopard.jpg';


const contactList = [
    {
        name: 'Big Tiger',
        position: 'Chef',
        phone: '999-999-999',
        email: "bigtiger@fake.com",
        image: tigerImgSrc
    },
    {
        name: 'Furious Lion',
        position: 'Manager',
        phone: '999-999-888',
        email: "furiouslion@fake.com",
        image: lionImgSrc
    },
    {
        name: 'Fearless Warrior',
        position: 'Waiter',
        phone: '999-999-777',
        email: "fearlesswarrior@fake.com",
        image: leopardImgSrc
    },
];

const contact = document.createElement('div');
contact.classList.add('contact');

const mainHeading = document.createElement('h1');
mainHeading.textContent = 'Contact Us';
contact.appendChild(mainHeading);

export default contact;