import {Modal} from './modal.js'

//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault() //evite o padrão (enviar o formulário e carregar a pagina)

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  // modalWrapper.classList.add('open')
  Modal.open()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
