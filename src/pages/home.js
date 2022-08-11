import banner from '../components/home/banner';
import review from '../components/home/review'

const home = document.createElement('div');
home.classList.add('home');

home.appendChild(banner);
home.appendChild(review);

export default home;