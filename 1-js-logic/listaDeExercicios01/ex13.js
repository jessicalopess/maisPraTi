// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

let num = Number(prompt("Insira o primeiro número: "));

let total = 0;
let soma = 0;

while (num !== 0) {
    soma += num;
    total++;
    num = Number(prompt("Insira outro número: "));
}

if (total > 0) {
    console.log("A média aritmética é:", soma / total);
} else {
    console.log("Nenhum número foi inserido.");
}