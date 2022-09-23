const nome = 'Augusto Sell';
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
const nome2 = 'Jennifer Sell';
for (let inde in nome2) {
    console.log(nome2[inde]);
}
const nomes = ['Augusto', 'Jennifer', 'Oscar'];
for(let valor of nomes) {
    console.log(valor);
}
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)