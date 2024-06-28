// Switch Case

/* let n1 = Number(prompt('digite um número qualquer'))

let n2 = Number(prompt('digite um número qualquer'))

let operacao = prompt('insira a operação desejada(soma, sub, mult, div, expo)')

switch(operacao){
    case 'soma':
        soma = n1 + n2
        console.log(soma)
        break;
    case 'sub':
        sub = n1 - n2
        console.log(sub)
        break;
    case 'mult':
        mult = n1 * n2
        console.log(mult)
        break;
    case 'div':
        div = n1 / n2
        console.log(div)
        break;
    case 'expo':
        expo = n1 ** n2
        console.log(expo)
        break;
    default:
        console.log('Insira uma opção válida!')
}

*/

let opcao = prompt('Escolha uma opção \n 1 -> Abastecer com gasolina\n 2 -> Abastecer com álcool\n 3 -> Calibrar pneus')

switch(opcao){
    case '1':
        let valorGas = Number(prompt('insira o valor em reais desejado(somente número)'))
        let litroTotalGas = valorGas / 5
        console.log(`Você abasteceu ${litroTotalGas.toFixed(2)} litros`)
        break;
    case '2':
        let valorAlcool = Number(prompt('insira o valor em reais desejado(somente número)'))
        let litroTotalAlcool = valorAlcool / 3
        console.log(`Você abasteceu ${litroTotalAlcool.toFixed(2)} litros`)
        break;
    case '3':
        console.log('Pneus calbirados com sucesso!')
        break;
    default:
        console.log('Insira uma opção válida!')
}