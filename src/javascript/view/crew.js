import View from './view';

class CrewView extends View {
  _controller = document.querySelector('.crew__tab');
  _slides = document.querySelectorAll('.slide');
  _name = document.querySelector('.crew__name');
  _role = document.querySelector('.crew__role');
  _bio = document.querySelector('.crew__bio');

  _goToSlide(slide) {
    this._slides.forEach((s, index) => {
      s.style.transform = `
        translateX(${100 * (index - slide)}%)
        scale(${+slide === index ? 1 : 0.6})
      `;
      s.style.opacity = +slide === index ? 1 : 0;
    });

    this._activateTab(slide);
  }

  updateContent(data, tab) {
    this._name.textContent = data.name;
    this._bio.textContent = data.bio;
    this._role.textContent = data.role;

    this._goToSlide(tab);
  }
}

export const crewView = new CrewView();
