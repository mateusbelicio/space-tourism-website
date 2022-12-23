import { fillDestination } from './destinations.js';
import { fillCrew } from './crew.js';
import { resetButtonState, closeOnPressEscape } from './menu.js';
import { fillTechnology } from './tech.js';

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

carouselController?.addEventListener('click', function (event) {
  if (event.target.tagName !== 'INPUT' || event.target === currentSlider) return;

  currentSlider = event.target;
  fillCrew.bind(currentSlider)();
});

/////////////////////////////////////////////////
// Technology page: slider

const techController = document.querySelector('.technology__controller');

techController?.addEventListener('click', function (event) {
  if (event.target.tagName !== 'INPUT') return;

  fillTechnology.bind(event.target)();
});
