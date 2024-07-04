

let numeroElementosArray = parseInt(prompt('Digite o número de elementos que deseja inserir na array:'))

let array = [];

for (contador = 0; contador < numeroElementosArray; contador++){
    
    array[contador] = Number(prompt('Digite um número'));
    
}

console.log(array)


let arrayInversa = []

i = 0

for (contador = numeroElementosArray - 1; contador >= 0; contador--){

    arrayInversa[contador] = array[i]
    
    i++
}

console.log(arrayInversa)