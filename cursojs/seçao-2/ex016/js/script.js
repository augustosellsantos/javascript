function meuTeste () {
    const formulario = document.querySelector('.formulario');
    const listaresultados = document.querySelector('.listaresultados');
    const pessoas = [];
    function eventoFormulario (evento) {
        evento.preventDefault();
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        
    }
    formulario.addEventListener('submit', eventoFormulario);
}
meuTeste();