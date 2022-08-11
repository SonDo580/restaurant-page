import locationImageSrc from '../../images/location';

const locationDiv = document.createElement('div');
locationDiv.classList.add('location');

const heading = document.createElement('h1');
heading.textContent = 'Location';
locationDiv.appendChild(heading);

const locationBox = document.createElement('div');
const locationImage = new Image();
locationImage.src = locationImageSrc;
locationBox.appendChild(locationImage);

locationDiv.appendChild(locationBox);

export default locationDiv;