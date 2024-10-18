// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Insira o primeiro valor: "));
let num2 = Number(prompt("Insira o segundo valor: "));

if (num1 !== num2) {
    if (num1 < num2) {
        console.log(num1, num2);
    } else {
        console.log(num2, num1);
    }
} else {
    console.log("Os valores não podem ser iguais.");
}