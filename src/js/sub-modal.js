(() => {
  const refs = {
    openModalBtn: document.querySelector("[sub-modal-open]"),
    closeModalBtn: document.querySelector("[sub-modal-close]"),
    modal: document.querySelector("[sub-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();