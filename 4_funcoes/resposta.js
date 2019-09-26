
const r = require("readline-sync");

let operacao = r.question("Digite a operação (+ - * /): ");
let valorA = parseInt(r.question("Digite o valor A: "));
let valorB = parseInt(r.question("Digite o valor B: "));

function soma(v1, v2){
    let resultado  = v1 + v2;
    return resultado;
}

function subtrair(v1, v2){
    return v1 - v2;
}

function multiplicar(v1, v2){
    let resultado  = v1 * v2;
    return resultado;
}

function dividir(v1, v2){
    let resultado  = v1 / v2;
    return resultado;
}

let resultadoDaFuncao;
switch(operacao){
    case "+":
        resultadoDaFuncao = soma(valorA, valorB);
        console.log(resultadoDaFuncao);
    break;
    case "-":
        resultadoDaFuncao = subtrair(valorA, valorB);
        console.log(resultadoDaFuncao);
    break;
    case "*":
        resultadoDaFuncao = multiplicar(valorA, valorB);
        console.log(resultadoDaFuncao);
    break;
    case "/":
        resultadoDaFuncao = dividir(valorA, valorB);
        console.log(resultadoDaFuncao);
    break;
    default:
        return console.log("Operação inválida");
}