// Variables
const form = document.querySelector('form')
const btnSubmit = document.querySelector('#submitButton')
const weigthInput = document.querySelector('#weightInput')
const heigthInput = document.querySelector('#heightInput')

// Events

btnSubmit.addEventListener('click', calculateImc)
form.onsubmit = (e) => { e.preventDefault() }

// Functions

function calculateImc() {  
  return console.log((Number(weigthInput.value) / ((Number(heigthInput.value) / 100) ** 2)).toFixed(2))
}
