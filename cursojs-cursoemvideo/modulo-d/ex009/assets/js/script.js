function verificar(){
    let pais = document.querySelector('input#pais');
    let resultado = document.querySelector('div#resultado');
    let nacionalidade = (pais.value);
    resultado.innerHTML = `<p>Vivendo em ${nacionalidade}.</p>`
    if (nacionalidade === 'Brasil'){
        resultado.innerHTML += `<p>Você é Brasileiro!</p>`
    } else {
        resultado.innerHTML += `<p>Você é Estrangeiro!</p>`
    }
}