/*
    5. Calculando Valores em Arrays de Objetos
    Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [
    { nome: "Julia", nota1: 10.0, nota2: 8.0 },
    { nome: "Alicia", nota1: 8.0, nota2: 6.0 },
    { nome: "Pedro", nota1: 7.0, nota2: 5.0 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`);
}