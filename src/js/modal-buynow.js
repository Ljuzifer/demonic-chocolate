(() => {
  const refs = {
    openModalBtnSellers: document.querySelector('[data-modal-open-sellers]'),
    openModalBtn: document.querySelector('[data-modal-open-buynow]'),
    closeModalBtn: document.querySelector('[data-modal-close-buynow]'),
    modal: document.querySelector('[data-modal-buynow]'),
  };

  refs.openModalBtnSellers.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
