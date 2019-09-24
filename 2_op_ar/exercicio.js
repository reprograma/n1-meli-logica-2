// A loja Lumelância precisa de uma nova função no seu sistema para calcular um desconto nos seus produtos.

// Você deverá seguir os seguintes passos:

// - Crie uma variável que irá guardar o array com nome e valor dos produtos
// - Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
// - Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
// - Procure no array qual produto foi escolhido pelo usuário
// - Calcule o desconto do produto
// - Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"

// Dica: você pode usar a função .toFixed(digits) para limitar o numero de casas decimais do desconto.

// let r = require('readline-sync');

// let product = ['xampu', 'condicionador', 'hidratante'];
// let productPrice = [59.90, 65.00, 74.90];
// let clientChoice = product&&productPrice.indexOf.parseInt(r.question('Digite o número do produto, por favor'));
// let promo = parseInt.tofixed(2) = (r.question('Digite o valor do desconto, por favor'));

// let discont = productPrice*(promo/100);

// console.log = (`Produto ${clientChoice} com desconto de R$ ${discont}`);

let product = '';
let price = '';
let productList = [{product: 'xampu', price: 59.90}, 
                   {product: 'condicionador', price: 65.00}, 
                   {product: 'hidratante', price: 74.90}];

let clientChoice = productList[parseInt(r.question('Digite o número do produto, por favor'))];
let promo = parseInt(r.question('Digite o valor do desconto, por favor'));

let discont = productPrice*(promo/100);

console.log = (`Produto ${clientChoice} com desconto de R$ ${discont}`);

