import View from './view';

class TechnologyView extends View {
  _controller = document.querySelector('.technology__tab');
  _slides = document.querySelectorAll('.slide');
  _name = document.querySelector('.technology__name');
  _description = document.querySelector('.technology__description');

  _goToSlide(slide) {
    this._slides.forEach((s, index) => {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;
      s.style.opacity = 1;
    });

    this._activateTab(slide);
  }

  updateContent(data, tab) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;

    this._goToSlide(tab);
  }
}

export const technologyView = new TechnologyView();
