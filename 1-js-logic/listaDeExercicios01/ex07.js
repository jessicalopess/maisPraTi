// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let qtd = Number(prompt("Insira a quantidade de maçãs compradas: "));
let total;

if (qtd < 12) {
    total = qtd * 0.30;
} else {
    total = qtd * 0.25;
}

console.log(`O valor total da compra é: R$ ${total.toFixed(2)}`);