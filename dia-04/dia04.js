/* 
Operadores Relacionais:
> -> maior
< -> menor
>= -> maior ou igual
<= -> menor ou igual
== -> igual (compara somente o valor)
=== -> igual (compara valor e tipo)
!= -> diferente (compara somente valor)
!== -> diferente (compara valor e tipo)
*/

/*
Operadores Condicionais

If -> "se";

else -> "se não";

utilizamos o if/else da seguinte forma:

if(condição){
    linha de comando que será executada caso a condição estabelecida aconteça (true)
}else{
    linha de comando que será executada caso a condição estabelecida não aconteça (false)
}

obs: não precisamos utilizar o else sempre que usamos o if

*/

/* let idade = Number(prompt('Digite a sua idade'))

if(idade >= 18){
    console.log('Você é maior de idade e tem ' + idade + ' anos')
    let nome = prompt('digite seu nome')
    console.log(nome)
}else {
    console.log('Você é menor de idade e tem ' + idade + ' anos')
}

console.log(nome) */


/* Escopo 

Para fins de organização e manutenção de código temos o conceito de escopo,
onde as variáveis funcionam apenas caso sejam declaradas no escopo previamente.

Sempre que começamos a digitar um código, estamos dentro de um escopo global, 
portanto conseguimos utilizar as variáveis declaradas anteriormente dentro de um
operador condicional if, por exemplo. No entanto, se criarmos uma variável dentro
do escopo do operador if, não conseguimos utilizá-la em nenhum outro lugar a não ser
dentro do próprio escopo do if.

no código acima, percebemos que a variável idade é usada dentro do escopo do operador if
delimitado pelos colchetes {} 

no entanto, se criarmos uma variável dentro do escopo do if, não conseguiremos utilizá-la 
fora dele

isso acontece pois a variável nome não existe fora do escopo do operador if.

*/

/* let fome = prompt('Você está com fome?')

let dinheiro = prompt('Você tem dinheiro?')

let restaurante = prompt('O restaurante está aberto?')

if(fome == 'não' || dinheiro == 'não'){
    console.log('Hoje a janta será em casa')
}if(fome == 'sim' && dinheiro == 'sim' && restaurante == 'sim'){
    console.log('Hoje a janta será no meu restaurante preferido!')
}if(fome == 'sim' && dinheiro == 'sim' && restaurante == 'não'){
    console.log('Peça um delivery!')
}

*/

let nome = prompt('Qual o seu nome?')

let idade = prompt('Qual a sua idade?')

let cnh = prompt('Você tem CNH?(sim/não)')

let carro = prompt('Você tem carro?(sim/não)')

if(idade < 18 || cnh == 'não'){
    console.log(nome + ', você não pode dirigir')
}else if(idade >= 18 && carro == 'não'){
    console.log(nome + ', você pode dirigir mas não tem carro')
}else
    console.log(nome + ', você será o motorista')
