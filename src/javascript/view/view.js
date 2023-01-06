export default class View {
  _activateTab(tabSelected) {
    this._controller.querySelectorAll('.button').forEach((tab, i) => {
      tab.setAttribute('aria-selected', tabSelected === i ? true : false);
    });
  }

  addHandleController(handler) {
    this._controller?.addEventListener('click', function (event) {
      const tabSelected = event.target.closest('.button');
      if (!tabSelected) return;

      const { tab } = tabSelected.dataset;
      handler(+tab);
    });
  }
}
