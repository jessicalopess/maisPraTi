/*
    12. Atualizando um Array de Objetos
    Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

let estoque = [
    { produto: "Celular", quantidade: 3, minimo: 2 },
    { produto: "Notebook", quantidade: 1, minimo: 1 },
    { produto: "Fone de Ouvido", quantidade: 2, minimo: 4 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);