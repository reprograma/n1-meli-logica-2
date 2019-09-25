var r = require("readline-sync");

var produtos = [
    {
        nome: 'Alface',
        tempoDeValidade: 20,
        congelado : false
    },
    {
        nome: 'Nuggets',
        tempoDeValidade: 300,
        congelado : true
    }
];

var posicao = parseInt(r.question("Escolha um produto entre 0 e 1: "));
var diasParaOVencimentoDoProduto = parseInt(r.question("Digite quantos dias faltam para vencer: "));

var produto = produtos[posicao];
var porcentagem = (diasParaOVencimentoDoProduto * 100) / produto.tempoDeValidade;

console.log(porcentagem);

if (porcentagem <= 2) {
    console.log("Descartar produto, muito proximo de vencer")
} else if (!produto.congelado && porcentagem <= 10) {
    console.log("Desconto! Produto não congelado e próximo da validade.")
} else if (produto.congelado && porcentagem <= 5) {
    console.log("Desconto!  Produto congelado e próximo da validade.")
} else {
    console.log("Produto longe do vencimento.");
}