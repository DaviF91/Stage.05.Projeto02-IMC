//Validando dados, função para validar se está digitando número
export function notANumber(value) {
  return isNaN(value) || value == ""
  
}

//calculo IMC
export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
