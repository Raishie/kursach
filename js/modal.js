const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelectorAll(".modal-btn-close");

const openModal = () => {
  modal.classList.remove("is-hidden");
  document.body.classList.add("no-scroll"); // Додайте клас для заборони прокрутки
};

const closeModal = () => {
  modal.classList.add("is-hidden");
  document.body.classList.remove("no-scroll"); // Видаліть клас для відновлення прокрутки
};

modalBtnOpen.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

modalBtnClose.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});
