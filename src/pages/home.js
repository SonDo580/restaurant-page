import banner from '../components/home/banner';
import review from '../components/home/review';
import openTime from '../components/home/time';

const home = document.createElement('div');
home.classList.add('home');

home.appendChild(banner);
home.appendChild(review);
home.appendChild(openTime);

export default home;