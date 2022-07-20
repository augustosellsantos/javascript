function saudação(nome) {    
    return `Boa tarde ${nome}!`
}
const variavel = saudação('Augusto');
console.log(variavel);

function soma(x = 4, y = 3) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(7, 7));
console.log(soma(10, 7));
console.log(soma());

const raiz = function (n) {
    return n ** (1/2);
};
console.log(raiz(7));
console.log(raiz(17));

const quadrada = n => n ** 0.5;
console.log(quadrada(19));
console.log(quadrada(35));
