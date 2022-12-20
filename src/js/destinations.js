import { getData } from './getData.js';

const tabs = document.querySelectorAll('.tab-js > input[name="planets"]');

const description = document.querySelector('.tab__description');
const distance = document.querySelector('.tab__info-data--distance');
const image = document.querySelector('.tab__image');
const title = document.querySelector('.tab__title');
const travel = document.querySelector('.tab__info-data--travel');

const checkTab = function () {
  tabs.forEach((tab) => tab.removeAttribute('checked'));
  this.setAttribute('checked', true);
};

export const fillDestination = async function () {
  const data = await getData();
  const [content] = data.destinations.filter((obj) => obj.name.toLowerCase() === this.id);

  image.classList.remove('fade-in-orbit');
  image.classList.add('fade-out-orbit');

  checkTab.bind(this)();

  description.textContent = content.description;
  distance.textContent = content.distance;
  title.textContent = content.name;
  travel.textContent = content.travel;

  image.addEventListener('animationend', () => {
    image.src = content.images.webp;

    image.addEventListener('load', () => {
      image.classList.add('fade-in-orbit');
      image.classList.remove('fade-out-orbit');
    });
  });
};
