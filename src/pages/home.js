const home = document.createElement('div');
home.classList.add('home');

// BANNER SECTION
const bannerDiv = document.createElement('div');
bannerDiv.classList.add('banner');

const heading = document.createElement('h1');
heading.textContent = 'Super Cat\'s Restaurant';
bannerDiv.appendChild(heading);

const description = document.createElement('p');
description.textContent = 'We make foods and beverages for cats (and human)!';
bannerDiv.appendChild(description);

home.appendChild(bannerDiv);
// END BANNER SECTION

export default home;