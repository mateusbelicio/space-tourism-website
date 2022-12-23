import { getData } from './getData.js';

const imagePortrait = document.querySelector('.technology__img-container source');
const imageLandscape = document.querySelector('.technology__img-container img');
const name = document.querySelector('.technology__name');
const description = document.querySelector('.technology__description');

export const fillTechnology = async function () {
  const data = await getData();
  const techSelected = Number(this.id.slice(-1));

  const [content] = data.technology.splice(techSelected - 1, 1);

  imagePortrait.srcset = content.images.portrait;
  imageLandscape.src = content.images.landscape;
  name.textContent = content.name;
  description.textContent = content.description;
};
