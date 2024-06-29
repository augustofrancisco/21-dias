/* Laço de repetição FOR 

let num = Number(prompt('Insira o número que você deseja para gerar uma tabuada'))

for(let tabuada = 1; tabuada <= 10; tabuada++){
    let tab = tabuada * num
    console.log(`${num} x ${tabuada} = ${tab}`)
}



let num = parseInt(prompt('Digite um número para que a contagem inicie'))

for(let contador = 0; contador <= num; contador++){
    console.log(contador)
}


for(let contador = 0; contador <= 50; contador += 5){
    console.log(contador)
}
console.log('Fim!')

for(let contador = 50; contador >= 0; contador -=5){
    console.log(contador)
}
console.log('Fim!')

*/

let num = parseInt(prompt('Digite um número inteiro'))

for(i = num; i <= num + 2; i++){
    console.log(i)
    for(contador = 1; contador <= 10; contador++){
        console.log(`${i} x ${contador} = ${contador * i}`)
    }
}
