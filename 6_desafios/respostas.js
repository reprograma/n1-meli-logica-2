const r = require("readline-sync");
/*
Para praticar:
1 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa para printar todos os números pares de 1 a 100.
- Números pares são todos os números que dividos por 2 tem resto 0
- Qual operador que retorna o resto da divisão? Vamos usar ele!
*/

// for(let i=1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// let i = 1;
// while(i <= 100){
//     if(i % 2 == 0){
//         console.log(i);
//     }
//     i++;
// }

/*
2 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou +=
*/
// let numeroDigitado = parseInt(r.question("Informe a quantidad de estrelas que você deseja gerar"));
// let estrelas = "";

// for(let i=0; i<= numeroDigitado;i++){
//     estrelas += "*";
//     console.log(estrelas);
// }

// let numeroDigitado = parseInt(r.question("Informe a quantidad de estrelas que você deseja gerar"));
// let estrelas = "";
// let i = 0;

// do{
//     estrelas += "*";
//     console.log(estrelas);
//     i++;

// }while(i <= numeroDigitado);

/*
3- Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
*/

//  let nome = r.question("Digite seu nome: ");
//  console.log("Olá "+ nome);

//  let texto = "";

//  do{
//      texto = r.question("Digite algum comando ou 'Tchau' para sair");
//      console.log("Você digitou: " + texto);
//  }while(texto != "Tchau");

//  console.log("Tchau " + nome);

// let nome = r.question("Digite seu nome: ");
// console.log("Olá "+ nome);

// let texto = "";

// for(;texto != "Tchau";){
//     texto = r.question("Digite algum comando ou 'Tchau' para sair");
//     console.log("Você digitou: " + texto);
// }
// console.log("Tchau " + nome);

/*
4 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um  programa contador de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
A meta a ser atingida é de 500 passos.
*/
// let passos = 0;
// const meta = 500;

// while(passos < meta){
//     passos += parseInt(r.question("Informe a quantidade de passos: "));
// }

// console.log("Parabéns! Você atingiu a meta: " + passos);

// let passos = 0;
// const meta = 500;
// for(;passos < meta;){
//     passos += parseInt(r.question("Informe a quantidade de passos: "));
// }

// console.log("Parabéns! Você atingiu a meta: " + passos);

/*
5 - Crie um programa que conte de 10 até 1 de 1 em 1.
*/

// for(let numero = 10;numero>=1;numero--){
//     console.log(numero);
// }

/*
6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
    - Printe o maior;
    - Printe o menor.
*/

let array = [5, 37, 18, 59, 12, -5];
let maior = 0;
let menor = 0;

for(let i=0; i < array.length; i++){
    if(array[i]>maior){
        maior = array[i];
    }

    if(array[i]<menor){
        menor = array[i];
    }
}

console.log("Maior: " + maior + ". Menor: " + menor);