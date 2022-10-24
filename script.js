//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault() //evite o padrão (enviar o formulário e carregar a pagina)

  const weight = inputWeight.value
  const height = inputHeight.value

  
}

