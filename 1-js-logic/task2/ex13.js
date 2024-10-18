/*
    13. Implementando um Carrinho de Compras
    Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.
*/

let carrinho = {
    itens: [
        { nome: "Celular", quantidade: 2, precoUnitario: 1500 },
        { nome: "Notebook", quantidade: 1, precoUnitario: 3500 },
        { nome: "Fone de Ouvido", quantidade: 3, precoUnitario: 200 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$${valorTotal}`);