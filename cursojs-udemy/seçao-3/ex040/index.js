// Em uma function no formato abaixo os argumentos que sustenta todos os argumentos enviados.
function funcao(a, b, c) {
    let total = 0;
    for (let argument of arguments) {
        total += argument;
    }
    console.log(total, a, b, c);
}
funcao(17, 19, 20, 22, 23);

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(17, 22, 19, 23);

function funcao3(a, b=3, c=5) {
    console.log(a+b+c);
}
funcao3(2, undefined, 22);

function desestruturacao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
desestruturacao({nome:'Augusto', sobrenome:'Sell dos Santos', idade:31});

function desestruturacao2([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
let object = ['Augusto', 'Sell dos Santos', 31];
desestruturacao2(object);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+')acumulador += numero;
        if (operador === '-')acumulador -= numero;
        if (operador === '*')acumulador *= numero;
        if (operador === '/')acumulador /= numero;
    }
    console.log(acumulador);
}
conta('*', 1, 17, 22, 31, 35);
