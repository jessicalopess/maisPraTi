// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Insira o ${i}º número: `));
    soma += num;
}

console.log(`A soma total dos números é: ${soma}`);