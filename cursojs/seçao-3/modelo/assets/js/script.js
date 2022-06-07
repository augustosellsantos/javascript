function meuEscopo () {
    const calculo = document.querySelector('.calculo');
    const resultado = document.querySelector('#resultado');

    function eventoImc (evento) {
        evento.preventDefaut();
        const peso = calculo.querySelector('#peso');
        const alturaEmM = calculo.querySelector('#altura');

        let imc = peso / (alturaEmM * alturaEmM);

        const numb = 18.5;

        if (numb < 18.5) {
            console.log('Abaixo do peso');
        } else if (numb >= 18.5 && numb <= 24.9) {
            console.log('Peso normal');
        } else if (numb >= 25 && numb <= 29.9) {
            console.log('Sobrepeso');
        } else if (numb >= 30 && numb <= 34.9) {
            console.log('Obsidade grau 1');
        } else if (numb >= 35 && numb <= 39.9) {
            console.log('Obsidade grau 2')
        } else if (numb >= 40) {
            console.log('Obsidade grau 3')
        } 
    }
    calculo.addEventListener('submit', eventoImc);
}
meuEscopo();