
let espaco = document.getElementById('espaco')
espaco.addEventListener('click', clicar)
espaco.addEventListener('mouseenter', entrar)
espaco.addEventListener('mouseout', sair)

function clicar() {
    espaco.innerText = 'Cliquei!'
    espaco.style.backgroundColor = 'orange'
}
function entrar() {
    espaco.innerText = 'Entrei!'
}
function sair() {
    espaco.innerText = 'Sai!'
    espaco.style.backgroundColor = 'green'
}