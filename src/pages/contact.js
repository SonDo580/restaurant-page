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

const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');

for (let person of contactList) {
    const cardContact = document.createElement('div');
    cardContact.classList.add('card-contact');

    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', person.image);
    cardContact.appendChild(cardImage);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('contact-info');

    const name = document.createElement('h3');
    name.textContent = person.name;
    cardInfo.appendChild(name);

    const position = document.createElement('p');
    position.textContent = person.position;
    cardInfo.appendChild(position);

    const phone = document.createElement('p');
    phone.textContent = person.phone;
    cardInfo.appendChild(phone);
    
    const email = document.createElement('p');
    email.textContent = person.email;
    cardInfo.appendChild(email);

    cardContact.appendChild(cardInfo);

    contactContainer.appendChild(cardContact);
}

contact.appendChild(contactContainer);

export default contact;