function verificar(){
    let velocidade = document.querySelector('input#velocidade');
    let resultado = document.querySelector('div#resultado');
    let marcador = Number(velocidade.value);
    resultado.innerHTML = `<p>Sua velocidade é de <strong>${marcador} Km/h</strong>.</p>`
    resultado.innerHTML += `<p>Dirija com cuidade!</p>`
    resultado.innerHTML += `<p>Sempre use o sinto de segurança!</p>`
    if (marcador > 100){
        resultado.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
}