// Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        }, altura: altura, peso: peso, 
        // Getter
        get imc() {
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        }
    };
}
const pessoa1 = criaPessoa('Augusto', 'Sell', 1.88, 75);
console.log(pessoa1.imc);
console.log(pessoa1.fala('falando sobre amor'));
pessoa1.nomeCompleto = 'Zoe Sell dos Santos';
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
const pessoa2 = criaPessoa('Jeniffer', 'Santos', 1.70, 58);
console.log(pessoa2.imc);
console.log(pessoa2.fala('falando sobre Família'));