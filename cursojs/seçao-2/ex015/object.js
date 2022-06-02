function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa01 = criarPessoa ('Augusto', 'Sell dos Santos', 30);
const pessoa02 = criarPessoa ('Zoe', 'Santos', 24);
const pessoa03 = criarPessoa ('Sofi', 'Santos', 28);
const pessoa04 = criarPessoa ('Zac', 'Sell Santos', 33);
const pessoa05 = criarPessoa ('Jack', 'Silva Santos', 50);
const pessoa06 = criarPessoa ('Julia', 'Sell', 40);

console.log(pessoa01.nome, pessoa01.sobrenome, pessoa01.idade);
console.log(pessoa02.nome, pessoa02.sobrenome, pessoa02.idade);
console.log(pessoa03.nome, pessoa03.sobrenome, pessoa03.idade);
console.log(pessoa04.nome, pessoa04.sobrenome, pessoa04.idade);
console.log(pessoa05.nome, pessoa05.sobrenome, pessoa05.idade);
console.log(pessoa06.nome, pessoa06.sobrenome, pessoa06.idade);

const pessoa001 = {
    nome: 'Augusto',
    sobrenome: 'Sell dos Santos',
    idade: 30,    
    fala () {
        console.log(`${this.nome} ${this.sobrenome} está querendo falar.`)
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    adicionaIdade() {
        this.idade++;
    }
};
pessoa001.fala();
pessoa001.adicionaIdade();
pessoa001.fala();
pessoa001.adicionaIdade();