let nome = prompt('Qual é seu nome?');
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.`);
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}.`);
let numb1 = 1300.8
console.log(numb1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(numb1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}));
console.log(numb1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}));