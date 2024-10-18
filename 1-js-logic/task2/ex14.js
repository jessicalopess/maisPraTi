/*
    14. Manipulando Objetos Complexos
    Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.
*/

let empresa = {
    departamentos: [
        {
            nome: "Tecnologia",
            funcionarios: ["Lara", "Luísa"]
        },
        {
            nome: "Marketing",
            funcionarios: ["Helena","Camila"]
        }
    ]
};

for (let departamento in empresa.departamentos) {
    let dept = empresa.departamentos[departamento];
    for (let funcionario of dept.funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${dept.nome}`);
    }
}