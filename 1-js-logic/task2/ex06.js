/*
    6. Filtrando Arrays de Objetos
    Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.
*/

let funcionarios = [
    { nome: "Lara", cargo: "Desenvolvedora", salario: 5000 },
    { nome: "Helena", cargo: "Gerente", salario: 7000 },
    { nome: "Luísa", cargo: "Estagiária", salario: 1500 }
];

for (let funcionario of funcionarios) {
    if (funcionario.salario > 2000) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
}