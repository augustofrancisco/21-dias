
let numeroInserido = Number(prompt('Digite um número para iniciar a sequencia de Fibonacci'))

let primeiroElemento = numeroInserido - 1;

let array = []

array[0] = primeiroElemento;
array[1] = numeroInserido;



for (contador = 2; contador < 10; contador++) {

    array[contador] = array[contador - 1] + array[contador - 2]

}

console.log(array)

