// return - Retorna um valor e termina a função
function soma(a, b) {
    return(a + b);
}

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}
const pessoa = criaPessoa('Augusto', 'Sell');
console.log(typeof pessoa);

function falaFrase(comeco) {
    function falaFinal(final) {
        return comeco + ' ' + final;
    }
    return falaFinal;
}
const fala = falaFrase('Olá');
const final = fala('mundo!');
console.log(final);

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(3));
console.log(triplica(5));
console.log(quadriplica(10));

// escopo léxico

const nome = 'Agusto';
function falaNome(){
    console.log(nome);
}
function usaFalaNome(){
    const nome = 'Sell';
    falaNome();
}
usaFalaNome();