import { getData } from './getData.js';

const image = document.querySelector('.carousel__image');
const role = document.querySelector('.crew__role');
const name = document.querySelector('.crew__name');
const bio = document.querySelector('.crew__bio');

export const fillCrew = async function () {
  const sliderChecked = Number(this.id.slice(-1));
  const data = await getData();

  const [content] = data.crew.splice(sliderChecked, 1);

  image.src = content.images.webp;
  role.textContent = content.role;
  name.textContent = content.name;
  bio.textContent = content.bio;
};
