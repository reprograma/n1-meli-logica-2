var r = require("readline-sync");

var produtos = [
    { nome: 'alface', preco: 5.99 },
    { nome: 'cenoura', preco: 7.99 },
    { nome: 'tomate', preco: 11.99 },
];

var posicao = parseInt(r.question("Escolha um produto entre 0 e 2:"));
var porcentagem = parseInt(r.question("Digite uma porcentagem de 0 a 50."));

var produto = produtos[posicao];
var desconto = produto.preco * (porcentagem / 100);
console.log("O desconto do produto " + produto.nome + ' é R$ ' + desconto);