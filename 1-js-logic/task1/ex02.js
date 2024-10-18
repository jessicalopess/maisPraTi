// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

let idade = Number(prompt("Informe a sua idade: "));

if (idade >= 0 && idade <= 12) {
    console.log("Você é uma criança.");
} else if (idade >= 13 && idade <= 17) {
    console.log("Você é um(a) adolescente.");
} else if (idade >= 18 && idade <= 59) {
    console.log("Você é um(a) adulto(a).");
} else if (idade >= 60) {
    console.log("Você é um(a) idoso(a).");
} else {
    console.log("Idade inválida!");
}