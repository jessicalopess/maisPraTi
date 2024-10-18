/*
    3. Filtrando Propriedades de Objetos
    Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.
*/

let produto = {
    preco: 50,
    desconto: 10,
    quantidade: 5
};

let novoObjeto = {};

for (let propriedade in produto) {
    if (produto[propriedade] > 15) {
        novoObjeto[propriedade] = produto[propriedade];
    }
}

console.log(novoObjeto);