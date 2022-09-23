// For in -> lê os índeces ou chaves do objeto
const frutas = ['Banana', 'Maçã', 'Uva'];
for (let inde in frutas) {
    console.log(frutas[inde]);
}
const pessoa = {
    nome: 'Augusto', sobrenome: 'Sell', idade: 31
};
//console.log(pessoa.nome);
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
/* const chave = 'nome';
console.log(pessoa[chave]);*/