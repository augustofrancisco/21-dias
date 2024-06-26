/* let nome = "Augusto"
console.log(nome)
nome = "Pedro"
console.log(nome)

const nome2 = "Firmino"
console.log(nome2)
nome2 = "Leonardo" */

let nome = prompt("digite seu nome")

let idade = parseInt(prompt("digite sua idade"))

let altura = Number(prompt("digite a sua altura"))

let peso = Number(prompt("digite o seu peso"))

let anoNasc = Number(2024 - idade) 

let imc = peso / (altura * altura)

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNasc}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é de ${imc.toFixed(2)}kg/m²`) 

/* let n1 = 3.14159

console.log(n1.toFixed(3)) */

