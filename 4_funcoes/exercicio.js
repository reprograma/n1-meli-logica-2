//resposta aqui

const r = require('readline-sync');


var operacao = (r.question('Qual operacao deseja fazer? adicao, subtracao, divisao ou multiplicacao '));
var numero1 = parseInt(r.question('Digite o primeiro valor: '));
var numero2 = parseInt(r.question('digite o segundo numero: '));

function adicao(valor1,valor2) {
    var resultado1 = valor1 + valor2;
    return resultado1;
}
function subtracao(valor1,valor2) {
    var resultado2 = valor1 - valor2;
    return resultado2;
}

function divisao (valor1,valor2) {
    var resultado3 = valor1 / valor2;
    return resultado3;
}
function multiplicacao (valor1,valor2) {
    var resultado4 = valor1 * valor2;
    return resultado4;
}

switch (operacao) {
    case 'adicao':
        var resultado = adicao(numero1,numero2)
        console.log(resultado);
        break;
    case 'subtracao':
        var resultado = subtracao(numero1,numero2)
        console.log(resultado);
        break;
    case 'divisao':
        var resultado = divisao(numero1,numero2);
        console.log(resultado);
        break;
    case 'multiplicacao':
        var resultado = multiplicacao(numero1,numero2);
        console.log(resultado);
        break;
    default:
        console.log('Operacao Invalida');
}