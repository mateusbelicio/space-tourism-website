import { fillDestination } from './destinations.js';
import { fillCrew } from './crew.js';
import { resetButtonState, closeOnPressEscape } from './menu.js';

/////////////////////////////////////////////////
// Functionality of menu button on mobile screens

const buttonMenu = document.querySelector('.menu-js');

buttonMenu.addEventListener('click', () => {
  buttonMenu.dataset.active = buttonMenu.dataset.active === 'true' ? 'false' : 'true';

  if (buttonMenu.dataset.active === 'true') {
    window.addEventListener('resize', resetButtonState);
    window.addEventListener('keydown', closeOnPressEscape);
  }
});

/////////////////////////////////////////////////
// Destination page: tabs

const tabs = document.querySelectorAll('.tab-js > input[name="planets"]');
tabs?.forEach((tab) => tab.addEventListener('click', fillDestination));

/////////////////////////////////////////////////
// Crew page: carousel

const carouselController = document.querySelector('.carousel__controller');
let currentSlider = document.querySelector('.carousel__controller > input:checked');

carouselController?.addEventListener('click', function (e) {
  if (e.target.tagName !== 'INPUT' || e.target === currentSlider) return;

  currentSlider = e.target;
  fillCrew.bind(currentSlider)();
});
