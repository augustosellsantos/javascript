// Escopo Global
function returnFunction(nome) {
    return function() {
        return nome;
    };
}
const funcao = returnFunction('Augusto');
const funcao2 = returnFunction('Guto');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());