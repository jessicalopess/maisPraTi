/*
    10. Criando Relatórios com Objetos e Arrays
    Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.
*/

let vendas = [
    { produto: "Celular", quantidade: 2, valor: 1500 },
    { produto: "Notebook", quantidade: 1, valor: 3500 },
    { produto: "Fone de Ouvido", quantidade: 3, valor: 200 }
];

let valorTotal = 0;

vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
});

console.log(`Valor total das vendas: R$${valorTotal.toFixed(2)}`);