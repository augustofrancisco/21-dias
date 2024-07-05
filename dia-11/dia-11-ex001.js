
let nome = [];

let nota = [];

let condição = true;

i = -1;

let somaNotas = 0;

while(condição){
    i++
    nome[i] = prompt('Insira o nome do aluno')
    nota[i] = Number(prompt('Insira a nota do aluno'))
    condição = parseInt(prompt('Deseja cadastrar um novo aluno?\n[1] Sim\n[2] Não')) == 1;
    somaNotas += nota[i];

}

for (i = 0; i < nota.length; i++){
    console.log(`Aluno: ${nome[i]} | Nota: ${nota[i]}`)
}

console.log(`Média geral: ${somaNotas.toFixed(2) / nota.length.toFixed(2)}`)

