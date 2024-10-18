/*
    7. Modificando Objetos em um Array
    Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.
*/

let produtos = [
    { nome: "Celular", preco: 1500, desconto: 0.10 },
    { nome: "Notebook", preco: 3500, desconto: 0.10 },
    { nome: "Fone de Ouvido", preco: 200, desconto: 0.10 }
];

produtos.forEach(produto => {
    produto.preco = produto.preco * (1 - produto.desconto);
    console.log(`Produto: ${produto.nome}, Novo Preço: R$${produto.preco.toFixed(2)}`);
});