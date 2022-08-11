import locationImageSrc from '../../images/location.jpeg';

const locationDiv = document.createElement('div');
locationDiv.classList.add('location');

const heading = document.createElement('h1');
heading.textContent = 'Location';
locationDiv.appendChild(heading);

const locationBox = document.createElement('div');

const locationImage = document.createElement('img');
locationImage.setAttribute('src', locationImageSrc);
locationBox.appendChild(locationImage);

const locationText = document.createElement('p');
locationText.textContent = '123 No Street, Sahara, Africa';
locationBox.appendChild(locationText);

locationDiv.appendChild(locationBox);

export default locationDiv;