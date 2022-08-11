import banner from '../components/home/banner';

const home = document.createElement('div');
home.classList.add('home');

home.appendChild(banner);

// REVIEW SECTION
const reviewDiv = document.createElement('div');
reviewDiv.classList.add('review');

const heading = document.createElement('h1');
heading.textContent = 'What our customers say';
bannerDiv.appendChild(heading);

const cardReview = document.createElement('div');
cardReview.classList.add('card-review');
description.textContent = 'We make foods and beverages for cats (and human)!';
bannerDiv.appendChild(description);
// END REVIEW SECTION

export default home;