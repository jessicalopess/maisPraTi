/*
    2. Verificando Propriedades
    Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: "É assim que se perde a guerra do tempo",
    autor: "Amal El-Mohtar, Max Gladstone",
    anoPublicacao: 2021,
    genero: "Ficção científica, Romance"
};

let propriedadeExiste = false;

for (let key in livro) {
    if (key === "editora") {
        propriedadeExiste = true;
        break;
    }
}

if (!propriedadeExiste) {
    livro.editora = "Suma";
}

console.log(livro);