(() => {
  const refs = {
    openModalBtn: document.querySelector('.sub-data-modal-open'),
    closeModalBtn: document.querySelector('.sub-data-modal-close'),
    modal: document.querySelector('.sub-data-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('scroll-hidden');
  }
})();
