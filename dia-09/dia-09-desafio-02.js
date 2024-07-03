/*
condição = true;
let dadosCorretos = 0;
let salario = 0;
let contador = 0;
let anos = 0;

while(condição){
    let nome = prompt('digite seu nome')
    let idade = Number(prompt('Digite a sua idade'))
    salario = Number(prompt('Digite o seu salário atual'))
    dadosCorretos = Number(prompt('As informações inseridas estão corretas?\n[1] Sim\n[2] Não'))

    condição = dadosCorretos == 2;
} 

if (dadosCorretos === 1){
    while()

} */

    let salario = Number(prompt('Digite o seu salário atual'));
    let ano = parseInt(prompt('Informe o ano em que você deseja iniciar a projeção salarial'))

    let contador = 0;

    let porcentagem = 1.5;

    let aumento = 0;

    let salarioAtual = salario;
    
    while(contador < 10){
        contador++;
        ano++;
        aumento = (salarioAtual * porcentagem) / 100;
        porcentagem = porcentagem * 2;
        salarioAtual += aumento;
        console.log(`Em ${ano} o seu aumento salarial será de R$${aumento.toFixed(2)}, totalizando um salário de R$${salarioAtual.toFixed(2)}`);
        
    }



    