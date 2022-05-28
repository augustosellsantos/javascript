/*Augusto Sell dos Santos tem 30 anos, pesa 80 kg e tem 1.87 de altura e seu IMC e de 22.9, com data de nascimento em 17/06/1991.*/

const nome = 'Augusto';
const sobrenome = 'Sell dos Santos';
const idade = 31;
const peso = 80;
const alturaEmM = 1.87;
/* Poderia ter alterado essas duas próximas variaveis para let como aprendido na aula em video, mas como desse jeito também funcinou deixei assim */
const aoQuadrado = alturaEmM * alturaEmM; 
const imc = peso / aoQuadrado;
let anoNasc;
anoNasc = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg'); /* Funciona, mas não é confortavel para trabalhar */
console.log(`e tem ${alturaEmM} de altura e seu IMC é de ${imc} nascido em ${anoNasc}.`); /* Mais legivel, confortavel para trabalhar */