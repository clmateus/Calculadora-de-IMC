import { Modal } from "./modal.js";
import { AlertError } from './alert-error.js'
import { calculateImc, notANumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weightInput");
const inputHeight = document.querySelector("#heightInput");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateImc(weight, height);
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}