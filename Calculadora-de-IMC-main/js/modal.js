export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-wrapper .title span"),
  buttonClose: document.querySelector(".modal-wrapper .title .close"),
  open() {
    this.wrapper.classList.add("open");
  },
  close() {
    this.wrapper.classList.remove("open");
  },
};

Modal.buttonClose.onclick = () => Modal.close();

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
