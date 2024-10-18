/*
    8. Criando Novos Arrays a Partir de Objetos
    Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.
*/

let filmes = [
    { titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014 },
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", diretor: "Peter Jackson", anoLancamento: 2002 },
    { titulo: "Star Wars: Episódio IV – Uma Nova Esperança", diretor: "George Lucas", anoLancamento: 1977 }
];

let titulos = [];

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);