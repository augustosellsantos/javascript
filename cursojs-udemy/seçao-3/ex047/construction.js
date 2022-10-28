// Função consturtora -> objetos
// Função fabrica -> objetos
// Cosntrutora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 210131;
    const metodoInterno = function() {

    };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': sou um programador!');
    };
}
const pessoa1 = new Pessoa('Augusto', 'Sell dos Santos');
const pessoa2 = new Pessoa('Zoe', 'Sell');
pessoa1.metodo();
