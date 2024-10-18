/*
    11. Agrupando Elementos com forEach
    Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    { cliente: "Camila", produto: "Celular", quantidade: 2 },
    { cliente: "Helena", produto: "Notebook", quantidade: 1 },
    { cliente: "Luisa", produto: "Fone de Ouvido", quantidade: 3 }
];

let quantidadeTotal = {};

pedidos.forEach(pedido => {
    if (quantidadeTotal[pedido.cliente]) {
        quantidadeTotal[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadeTotal[pedido.cliente] = pedido.quantidade;
    }
});

console.log(quantidadeTotal);