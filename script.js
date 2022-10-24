//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.close')

// Estruturando dado do Modal
const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close: function () {
    Modal.wrapper.classList.remove('open')
  }
}

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

Modal.buttonClose.onclick = () => {
  // modalWrapper.classList.remove('open')
  Modal.close()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
