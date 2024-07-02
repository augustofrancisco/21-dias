// funções

/* function converterParaNumero (valor) {
    return Number(valor)
}

function obterNumero () {
    return converterParaNumero(prompt('digite um numero'))
}

function calculadora(n1, n2, operador) {
    let resultado = 0;
    switch(operador){
        
        case 1 :
            resultado = n1 + n2
            break;
    }
    
    return resultado
}

let n1 = obterNumero()
let n2 = obterNumero()
console.log(calculadora(n1,n2, 1))
*/



n1 = Number(prompt('Digite um número'))
n2 = Number(prompt('Digite um número'))
operação = Number(prompt('Escolha uma operação:\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Exponencial'))

console.log(calculadora(n1, n2, operação))

 function calculadora (n1, n2, operador){

    let resultado = 0;
    
    switch(operador){
        case 1 :
            resultado = n1 + n2;
            break;
        case 2 :
            resultado = n1 - n2;
            break;
        case 3: 
            resultado = n1 * n2;
            break;
        case 4 :
            resultado = n1 / n2;
            break;
        case 5 :
            contador = 1;
            resultado = 1;
            while (contador <= n2) {
                resultado = resultado * n1
                contador++
            }
    }

    if (resultado > 1000000 || resultado == undefined){
        console.log('ERRO!')
    } else {
        return resultado
    }

}



