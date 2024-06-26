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

let imc = parseInt(peso / (altura * altura))

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu no ano de " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "Kg e tem um IMC de " + imc + " Kg/m²")

