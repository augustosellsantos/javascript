function tabuada() {
    const numero = document.querySelector('#numero');
    const tabuada = document.querySelector('#tabuada');
    if (numero.value.length === 0) {
        alert('Por favor, digite um número');
    } else {
        const numb = Number(numero.value);
        let contador = 1;
        tabuada.innerHTML = ``;
        while (contador <= 10) {
            const item = document.createElement('option');
            item.text = `${numb} x ${contador} = ${numb*contador}`
            tabuada.appendChild(item);
            contador++
        }
        /**for(let contador = 1; contador <= 10; contador++) {
            let item = document.createElement('option');
            item.text = `${numb} x ${contador} = ${numb*contador}`;
            tabuada.appendChild(item);
        }**/
    }
}