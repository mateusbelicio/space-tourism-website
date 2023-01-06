import * as model from './model.js';
import { destinationView } from './view/destination.js';
import { crewView } from './view/crew.js';
import { technologyView } from './view/technology.js';

const { crew, destinations, technology } = model.getData();

const controlDestination = function (tab) {
  destinationView.updateContent(destinations[tab], tab);
};

const controlCrew = function (tab) {
  crewView.updateContent(crew[tab], tab);
};

const controlTechnology = function (tab) {
  technologyView.updateContent(technology[tab], tab);
};

const init = function () {
  destinationView.addHandleController(controlDestination);
  crewView.addHandleController(controlCrew);
  technologyView.addHandleController(controlTechnology);
};

init();
