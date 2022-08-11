function escopo(){
    const contar = document.querySelector('.contar');

    function eventoContar (event) {
        event.preventDefault();
        const inicial = document.querySelector('input#inicial');
        const final = document.querySelector('input#final');
        const passo = document.querySelector('input#passo');
        const resultado = document.querySelector('div#resultado');
        
    }
    contar.addEventListener('submit', eventoContar);
}
escopo();