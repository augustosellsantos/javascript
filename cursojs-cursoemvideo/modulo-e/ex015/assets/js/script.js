function escopo(){
    const contar = document.querySelector('.contar');

    function eventoContar (event) {
        event.preventDefault();
        const inputInicio = contar.querySelector('#inicio');
        const inputFinal = contar.querySelector('#final');
        const inputPasso = contar.querySelector('#passo');
        const inicio = Number(inputInicio.value);
        const final = Number(inputFinal.value);
        const passo = Number(inputPasso.value);

        if (inputInicio.value.length === 0 || inputFinal.value.length === 0 || inputPasso.value.length) {
            //alert('ERRO! Faltam dados.');
            resultado.innerHTML = `Impossível contar!`
        } else {
            resultado.innerHTML = `Contando: <br>`;
            // Contagem crescente!
            if (inicio < final) {
                for(let contador = inicio; contador <= final; contador += passo) {
                    resultado.innerHTML += ` ${contador}`
                }
            // Contagem regressiva!    
            } else {
                for(let contador = inicio; contador >= final; contador -= passo) {
                    resultado.innerHTML += ` ${contador}`
                }
            }
            resultado.innerHTML += `Fim!`
        }
    }
    contar.addEventListener('submit', eventoContar);
    function resultado () {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = ``;
    }
}
escopo();