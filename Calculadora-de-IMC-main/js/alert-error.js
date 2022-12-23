export const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open')
    },
    close() {
        AlertError.element.classList.remove('open')
    }
}

window.addEventListener("input", handleCloseAlertError)

export function handleCloseAlertError(event) {
  if(event.data != '') {
    AlertError.close()
  }
}