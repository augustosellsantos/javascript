function verificar(){
    const idade = document.querySelector('input#idade');
    const resultado = document.querySelector('div#resultado');
    let anos = (idade.value);
    resultado.innerHTML = `<p>Você tem ${anos} anos.</p>`
    if (anos < 16) {
        resultado.innerHTML += `<p>Não vota.</p>`
    } else if (anos < 18 || anos > 65) {
        resultado.innerHTML += `<p>Voto opcional.</p>`
    } else {
        resultado.innerHTML += `<p>Voto obrigatório.</p>`
    }
}