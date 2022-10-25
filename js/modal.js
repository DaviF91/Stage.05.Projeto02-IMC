
export const Modal = {
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

Modal.buttonClose.onclick = () => {
  
  Modal.close()
}

//Fechar modal (popup) pela tecla ESC
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}