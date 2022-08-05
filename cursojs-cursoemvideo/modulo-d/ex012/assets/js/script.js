function verificar() {
    const ano = document.querySelector('input#ano');
    const sexo = document.getElementsByName('sexo');
    const resultado = document.querySelector('div#resultado');
    const data = new Date();
    const anoData = data.getFullYear();
    const idade = anoData - Number(ano.value);
    const imagem = document.createElement('imagem');
    let genero = '';
    imagem.setAttribute('id', 'foto');
    
    if (ano.value.length === 0 || Number(ano.value) > anoData) {
        alert(`ERRO! Verifique os dados e tente novamente!`);
    } else {
        if (sexo[0].checked) {
            genero = 'Homem'
            
        } else if (sexo[1].checked) {
            genero = 'Mulher'
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `${genero} com ${idade}`
    }
}