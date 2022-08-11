import banner from '../components/home/banner';
import review from '../components/home/review';
import openTime from '../components/home/time';
import location from '../components/home/location';

const home = document.createElement('div');
home.classList.add('home');

home.appendChild(banner);
home.appendChild(review);
home.appendChild(openTime);
home.appendChild(location);

export default home;