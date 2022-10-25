import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'

//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault() //evite o padrão (enviar o formulário e carregar a pagina)

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)
  if (showAlertError) {
    AlertError.open()
    return;
  }
  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  // modalWrapper.classList.add('open')
  Modal.open()
}

//Validando dados, função para validar se está digitando número
function notANumber(value) {
  return isNaN(value) || value == ""
  
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
