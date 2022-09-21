function escopo() {
    const numb = document.querySelector('input#numb');
    const valores = document.querySelector('select#valores');
    const resultado = document.querySelector('div#resultado');
    const listaValores = [];

    function numero(n) {
        if(Number(n) >= 1 && Number(n) <=200) {
            return true
        } else {
            return false
        }
    }
    function lista(n, l) {
        if (l.indexof(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }
    function acrescentar() {
        if(numero(numb.value) && !listaValores(numb.value, listaValores)) {

        } else {
            alert('Valor inválido ou já encrontrado na lista.');
        }
    }
}
escopo();