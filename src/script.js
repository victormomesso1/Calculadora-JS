///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
function Calculadora(numero1, numero2, operador) {
  let resultado;
  let n1 = parseInt(numero1);
  let n2 = parseInt(numero2);

  switch (operador) {
    case "+":
      resultado = n1 + n2;
      break;
    case "-":
      resultado = n1 - n2;
      break;
    case "*":
      resultado = n1 * n2;
      break;
    case "/":
      resultado = n1 / n2;
      break;
    case "e":
      let contador = 1;
      resultado = n1 * n1;
      while (contador < n2) {
        resultado = resultado * n1;
        contador++;
      }
      break;
    default:
      resultado = "Operador inválido";
  }

  if (resultado == undefined || resultado > 100000000) {
    resultado = "ERROR: ";
  }

  return resultado;
}

 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}