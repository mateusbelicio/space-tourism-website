import * as model from './model.js';
import { destinationView } from './view/destination.js';
import { crewView } from './view/crew.js';
import { technologyView } from './view/technology.js';

const { crew, destinations, technology } = model.getData();
const buttonMenu = document.querySelector('.button--menu');
const navigation = document.querySelector('.navigation--primary');

const controlDestination = function (tab) {
  destinationView.updateContent(destinations[tab], tab);
};

const controlCrew = function (tab) {
  crewView.updateContent(crew[tab], tab);
};

const controlTechnology = function (tab) {
  technologyView.updateContent(technology[tab], tab);
};

const resetButtonState = function () {
  if (window.screen.width >= 640) {
    buttonMenu.dataset.active = 'false';
    navigation.setAttribute('aria-expanded', buttonMenu.dataset.active);
    window.removeEventListener('resize', resetButtonState);
  }
};

const closeOnPressEscape = function (keyPressed) {
  if (keyPressed.key === 'Escape') {
    buttonMenu.dataset.active = 'false';
    navigation.setAttribute('aria-expanded', buttonMenu.dataset.active);
    window.removeEventListener('keydown', closeOnPressEscape);
  }
};

const addHandlerMenu = function () {
  buttonMenu.addEventListener('click', () => {
    buttonMenu.dataset.active = buttonMenu.dataset.active === 'true' ? 'false' : 'true';
    navigation.setAttribute('aria-expanded', buttonMenu.dataset.active);

    if (buttonMenu.dataset.active === 'true') {
      window.addEventListener('resize', resetButtonState);
      window.addEventListener('keydown', closeOnPressEscape);
    }
  });
};

const init = function () {
  destinationView.addHandleController(controlDestination);
  crewView.addHandleController(controlCrew);
  technologyView.addHandleController(controlTechnology);
  addHandlerMenu();
};

init();
