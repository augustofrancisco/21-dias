// WHILE / DOWHILE

/*

let condição = true;
let qtdM = 0;
let qtdMaiorQueSeteF = 0;
let maiorNotaM = 0;
let qtdTotal = 0; 
let notaTotal = 0;


while(condição){
    let nota = Number(prompt('Digite a sua nota'));
    let sexo = prompt('Digite o seu sexo(M/F)');
    let valor = prompt('Deseja inserir mais informações?');
    condição = valor === 'sim';
    qtdTotal += 1;
    notaTotal += nota 

    if (nota > maiorNotaM && sexo == 'M') {
        maiorNotaM = nota;
    }
    if (sexo == 'F' && nota > 7) {
        qtdMaiorQueSeteF += 1;
    }

    if (sexo == 'M') {
        qtdM += 1;
    }

} 

console.log(`A média geral dos alunos foi: ${notaTotal / qtdTotal}`)
console.log(`A quantidade de mulheres que tiveram uma nota acima de 7 foi de: ${qtdMaiorQueSeteF}`)
console.log(`A Maior nota entre os homens foi de: ${maiorNotaM}`)
console.log(`A quantidade de homens que enviaram suas notas foi de: ${qtdM}`)

*/

let saldo = 1000;
let valor = 0;
let condição = true;
let nome = prompt('Digite o seu nome');
let cpf = Number(prompt('Digite o seu CPF'));
let maiorValor = 0;
let qntValorInserido = 0;
let valorTotal = 0;


do {

    valor = Number(prompt('Digite um valor'));
    let operação = Number(prompt('Escolha a operação que deseja realizar:\n[1] Saque\n[2] Depósito'));
    continuar = Number(prompt('Deseja continuar?\n[1] Continuar\n[2] Parar'));
    condição = continuar === 1;

    if (valor < 0){
        console.log('Não é possível depositar ou sacar um valor negativo, insira um valor válido.')
    }

    else if (operação === 1 && valor > saldo){
        console.log('Saldo insuficiente para realizar a operação de saque!')
    }

    else if (operação === 1){
        saldo -= valor;
        valorTotal += valor;
        qntValorInserido++;
        if (valor > maiorValor){
            maiorValor = valor;
        }

    } 
    
    else if (operação === 2){
        saldo += valor;
        valorTotal += valor;
        qntValorInserido++;
        if (valor > maiorValor){
            maiorValor = valor;
        }
    }

} while(condição)

console.log(`${nome}(CPF:${cpf}), o seu saldo atual é de: R$${saldo}`)
console.log(`O maior valor inserido no sistema foi de: R$${maiorValor}`)
console.log(`A média dos valores inseridos foi de: R$${valorTotal / qntValorInserido}`)


