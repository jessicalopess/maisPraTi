/*
    4. Iterando Sobre Arrays de Objetos
    Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.
*/

let pessoas = [
    { nome: "Luísa", idade: 21, cidade: "Florianópolis" },
    { nome: "Lara", idade: 27, cidade: "Rio de Janeiro" },
    { nome: "Camila", idade: 30, cidade: "Belo Horizonte" },
    { nome: "Helena", idade: 32, cidade: "São Paulo" }
];

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}