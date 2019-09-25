//resposta aqui

var r = require('readline-sync');

var produtos = [
    {
        nome = 'Banana'
        tempoDeValidade = 3,
        congelado = true
    }
    {
        nome = 'salsicha'
        tempoDeValidade = 10,
        congelado = true
    }
    {
        nome = 'azeitona'
        tempoDeValidade = 30,
        congelado = true
    }
]

var produtos = parseInt(r.question('Escolha um produto entre 0 e 3: '));
var tempoDeValidadeDoProduto = parseInt(r.question('Digite quantos dias faltam para vencer: '));
var produtos = produtos[posicao];
var tempoDeValidade = (dias * 100) /produtos.tempoDeValidadeDoProduto;

console.log(porcentagem);

if 
    (tempoDeValidade <= 2)
    {
        console.log('Descartar produto, muito proximo de vencer');
    }
else if
    (empoDeValidade <= 10 && ! produtos.congelado )
    {
        console.log ('Desconto!  Produto não congelado e próximo da validade.');
    }
else if 
    (tempoDeValidade <= 5 && produtos.congelado)
    {
        console.log ('Desconto! Produto congelado e próximo da validade.');
    }
else
    console.log('Produto longe do vencimento.');