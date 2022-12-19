const buttonMenu = document.querySelector('.menu-js');

const resetButtonState = function () {
  if (window.screen.width >= 768) {
    buttonMenu.dataset.active = 'false';
    window.removeEventListener('resize', resetButtonState);
  }
};

const closeOnPressEscape = function (keyPressed) {
  if (keyPressed.key === 'Escape') {
    buttonMenu.dataset.active = 'false';
    window.removeEventListener('keydown', closeOnPressEscape);
  }
};

buttonMenu.addEventListener('click', () => {
  buttonMenu.dataset.active = buttonMenu.dataset.active === 'true' ? 'false' : 'true';

  if (buttonMenu.dataset.active === 'true') {
    window.addEventListener('resize', resetButtonState);
    window.addEventListener('keydown', closeOnPressEscape);
  }
});
