const home = document.createElement('div');

const bannerDiv = document.createElement('div');
bannerDiv.classList.add('banner');
bannerDiv.textContent = 'test'

home.appendChild(bannerDiv);

export default home;