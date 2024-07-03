
let continuar = true;

do {
let nome = prompt('Digite o seu nome');
let idade = parseInt(prompt('Digite a sua idade'));
let peso =  Number(prompt('Digite o seu peso'));
let altura = Number(prompt('Digite a sua altura'));
let profissao = prompt('Digite a sua profissão');

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}kg.`)

//Validação maior de idade

if (idade > 18) {
    console.log('Você está liberado para tomar uma gelada');
} else {
    console.log('Você é menor de idade, sem gelada pra você');
}

// Conversor de idade para meses semnas e dias

let meses = idade * 12;
let semanas = meses * 4;
let dias = semanas * 7;

console.log(`Sua idade em meses é de: ${meses} meses.`)
console.log(`Sua idade em semanas é de: ${semanas} semanas.`)
console.log(`Sua idade em dias é de: ${dias} dias.`)

// Cálculo de IMC

let imc = peso / (altura**2);


if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}kg/m² e você está na faixa da magreza (IMC < 18,5kg/m²).`);
} 

else if (imc >= 18.5 && imc <= 24.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}kg/m² e você está na faixa normal (IMC entre 18,5kg/m² e 24,9kg/m²).`);
}

else if (imc >= 25 && imc <= 29.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}kg/m² e você está na faixa de sobrepeso (IMC entre 25kg/m² e 29,9kg/m²).`);
}

else if (imc >= 25 && imc <= 29.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}kg/m² e você está na faixa de sobrepeso (IMC entre 25kg/m² e 29,9kg/m²).`);

} else {
    console.log(`Seu IMC é ${imc.toFixed(2)}kg/m² e você está na faixa de obesidade (IMC maior que 29,9kg/m²).`);
}

// Ano de Nascimento

let anoNascimento = 2024 - idade;

console.log(`${nome}, você nasceu no ano de ${anoNascimento}`)

// Contador de idade

let contadorAnos = (2024 - idade) + 1;
let idadeAnos = 0;
let anos = 0;

while (2024 >= contadorAnos) {
    anos = contadorAnos++;
    idadeAnos++;
    console.log(`${anos}: ${idadeAnos}`);
}

// Loop

let condição = Number(prompt('Escolha uma das opções:\n[1] Inserir novos dados\n[2] Encerrar programa'))

continuar = condição == 1;

} while(continuar)