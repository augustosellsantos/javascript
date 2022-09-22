const numb = document.querySelector('input#numb');
const valores = document.querySelector('select#valores');
const resultado = document.querySelector('div#resultado');
let listaValores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 200) {
        return true
    } else {
        return false
    }
}
function inValores(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function acrescentar() {
    if(isNumero(numb.value) && !inValores(numb.value, listaValores)) {
        listaValores.push(Number(numb.value))
        let item = document.createElement('option');
        item.text = `Valor ${numb.value} adicionado.`
        valores.appendChild(item);
        resultado.innerHTML = '';
    } else {
        alert('Valor inválido ou já encrontrado na lista.');
    }
    numb.value = ``;
    numb.focus();
}
function finalizar() {
    if (listaValores.length === 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let total = listaValores.length;
        let maior = listaValores[0];
        let menor = listaValores[0];
        let soma = 0;
        let media = 0;
        for(let posicao in listaValores) {
            soma += listaValores[posicao]
            if (listaValores[posicao] > maior)
                maior = listaValores[posicao]
            if (listaValores[posicao] < menor)
                menor = listaValores[posicao]
        }
        media = soma/total;
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor é ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor é ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}