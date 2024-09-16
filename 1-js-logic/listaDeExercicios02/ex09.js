/*
    9. Contabilizando Elementos com uma Condição
    Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.
*/

let clientes = [
    { nome: "Lara", idade: 29, cidade: "Rio de Janeiro" },
    { nome: "Camila", idade: 32, cidade: "Belo Horizonte" },
    { nome: "Helena", idade: 34, cidade: "São Paulo" }
];

let clientesMaisDe30 = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        clientesMaisDe30++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${clientesMaisDe30}`);