import View from './view';

class DestinationView extends View {
  _controller = document.querySelector('.destination__tab');
  _name = document.querySelector('.destination__name');
  _description = document.querySelector('.destination__description');
  _distance = document.querySelector('.destination__info-data--distance');
  _travel = document.querySelector('.destination__info-data--travel');
  _image = document.querySelector('.destination__image');

  updateContent(data, tab) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
    this._distance.textContent = data.distance;
    this._travel.textContent = data.travel;
    this._image.src = data.images.webp;
    this._image.alt = `${data.name[0].toUpperCase() + data.name.slice(1)} picture`;

    this._activateTab(tab);
  }
}

export const destinationView = new DestinationView();
