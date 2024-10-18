// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let a = 0;
let b = 1;
let proximo;

for (let i = 0; i < 10; i++) {
    console.log(a);

    proximo = a + b;

    a = b;
    b = proximo;
}