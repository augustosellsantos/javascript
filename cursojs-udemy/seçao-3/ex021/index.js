// https://developer.mozilla.org
const data = new Date(1654813604759);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);// Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());// 0 = Domingo, ..., 6 = Sábado
console.log(data.toString());
//console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
function formatoData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data1 = new Date();
const dataBrasil = formatoData(data1);
console.log(dataBrasil);