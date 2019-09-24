// A loja Lumelância convidou você para desenvolver um script simples para seus clientes.

// Você criará um cartão fidelidade na loja Lumelância e deverá seguir os passos abaixo:

// - Crie variaveis para o guardar o nome, idade, se é a primeira vez e uma lista produtos favoritos do cliente
// - Atribua valores a essas variaveis
// - Crie um objeto que irá receber os valores dessa variaveis e o imprima o objeto no console

// let clientName = ['Dani', 'Carla', 'Sofia', 'Vanessa'];
// let clientAge = ['30', '29', '42', '19'];
// let clientFirstTime = ['S', 'N', 'N', 'S'];
// let clientFavoriteItem = ['Sabonete/Xampu', 'Hidratante/Esfoliante', 'Xampu/Condicionador', 'Esfoliante/Protetor Solar'];

// console.log(clientName[1], clientAge[1]);

let name = 'Dani';
let age = 40;
let firstTime = true; // melhor quando você precisa dessa info em vários idiomas, mais fácil de comparar
let favoriteItens =  ['Music', 'Films', 'Comics'];
let client = {
    quem: name,
    idade: age,
    primeira_vez: firstTime,
    favoritos: favoriteItens,
};

console.log(client);