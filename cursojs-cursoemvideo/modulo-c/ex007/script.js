function somar() {
    let numb1 = document.querySelector('input#numb1');
    let numb2 = document.querySelector('input#numb2');
    let resultado = document.getElementById('res');
    let num1 = Number(numb1.value);
    let num2 = Number(numb2.value);
    let soma = num1 + num2;
    resultado.innerHTML = `A soma dos dois valores é: <strong>${soma}</strong>`
}