const pessoa = {
    nome: 'Augusto',
    sobrenome: 'Sell dos Santos',
    idade: 31,
    endereco: {
        rua: 'Rua Goiânia',
        numero: 370
    }
};
// Atribuição via desestruturação
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);
const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco);
// Se usarmos o operador rest = resto, teremos os valores restantes das variaveis.