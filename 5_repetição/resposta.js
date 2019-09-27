const r = require("readline-sync");
/*
1) Crie um programa para printar todos os números pares de 1 a 100.
- Números pares são todos os números que dividos por 2 tem resto 0
- Qual operador que retorna o resto da divisão? Vamos usar ele!
*/

// for(let i=1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

/*
2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
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

/*
3) Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
- Aqui você pode usar while ou do/while para resolver
 */

//  let nome = r.question("Digite seu nome: ");
//  console.log("Olá "+ nome);

//  let texto = "";

//  do{
//      texto = r.question("Digite algum comando ou 'Tchau' para sair");
//      console.log("Você digitou: " + texto);
//  }while(texto != "Tchau");

//  console.log("Tchau " + nome);

/*
4) Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
A meta a ser atingida é de 500 passos.
- Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou no exercicio 3.
*/

// let passos = 0;
// const meta = 500;

// while(passos < meta){
//     passos += parseInt(r.question("Informe a quantidade de passos: "));
// }

// console.log("Parabéns! Você atingiu a meta: " + passos);