function escopo () {
    const calculo = document.querySelector('.calculo');
    const pessoaImc = [];

    function eventoImc (event) {
        event.preventDefault();
        const inputPeso = calculo.querySelector('#peso');
        const inputAltura = calculo.querySelector('#altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const imc = peso / (altura * altura);

        if (imc < 18.5) {
            resultado(`Seu IMC é ${imc} (Abaixo do peso)`);
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log(`Seu IMC é ${imc} (Peso normal)`);
        } else if (imc >= 25 && imc <= 29.9) {
            console.log(`Seu IMC é ${imc} (Sobrepeso)`);
        } else if (imc >= 30 && imc <= 34.9) {
            console.log(`Seu IMC é ${imc} (Obsidade grau 1)`);
        } else if (imc >= 35 && imc <= 39.9) {
            console.log(`Seu IMC é ${imc} (Obsidade grau 2)`);
        } else if (imc >= 40) {
            console.log(`Seu IMC é ${imc} (Obsidade grau 3)`);
        }
        if (!peso) {
            resultado(`Peso inválido`);
            return;
        }
        if (!altura) {
            resultado(`Altura inválida`);
            return;
        }
    }
    calculo.addEventListener('submit', eventoImc);
    
    function resultado (resposta) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = ``;
        resultado.innerHTML += resposta;
    }
}
escopo();