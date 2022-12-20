const buttonMenu = document.querySelector('.menu-js');

export const resetButtonState = function () {
  if (window.screen.width >= 768) {
    buttonMenu.dataset.active = 'false';
    window.removeEventListener('resize', resetButtonState);
  }
};

export const closeOnPressEscape = function (keyPressed) {
  if (keyPressed.key === 'Escape') {
    buttonMenu.dataset.active = 'false';
    window.removeEventListener('keydown', closeOnPressEscape);
  }
};
