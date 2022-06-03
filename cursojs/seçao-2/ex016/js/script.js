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
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        listaresultados.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
    }
    formulario.addEventListener('submit', eventoFormulario);
}
meuTeste();