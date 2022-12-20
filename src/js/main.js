import { fillDestination } from './destinations.js';
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
tabs.forEach((tab) => tab.addEventListener('click', fillDestination));
