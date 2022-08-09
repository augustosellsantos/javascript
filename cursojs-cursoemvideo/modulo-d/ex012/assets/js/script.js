function verificar() {
    const ano = document.querySelector('input#ano');
    const sexo = document.getElementsByName('sexo');
    const falar = document.querySelector('div#falar');
    const resultado = document.querySelector('div#resultado');
    const data = new Date();
    const anoData = data.getFullYear();
    const idade = anoData - Number(ano.value);
    const imagem = document.createElement('imagem');
    imagem.setAttribute('id', 'foto');
    let genero = '';
    
    if (ano.value.length === 0 || Number(ano.value) > anoData) {
        alert(`ERRO! Verifique os dados e tente novamente!`);
    } else {
        if (sexo[0].checked) {
            genero = 'Homem'
            //imagens não estão aparecendo...verificar
            if (idade >= 0 && idade < 3) {
                imagem.setAttribute('src', 'assets/img/bebe-m.png');
                falar.innerHTML = 'Bebe';
            } else if (idade < 8) {
                imagem.setAttribute('src', 'assets/img/crianca-m.png');
                falar.innerHTML = 'Criança';
            } else if (idade < 12) {
                imagem.setAttribute('src', 'assets/img/crianca-jovem-m.png');
                falar.innerHTML = 'Criança Jovem';
            } else if (idade < 18) {
                imagem.setAttribute('src', 'assets/img/jovem-m.png');
                falar.innerHTML = 'Jovem';
            } else if (idade < 33) {
                imagem.setAttribute('src', 'assets/img/jovem-adulto-m.png');
                falar.innerHTML = 'Jovem Adulto';
            } else if (idade < 60) {
                imagem.setAttribute('src', 'assets/img/adulto-m.png');
                falar.innerHTML = 'Adulto';
            } else {
                imagem.setAttribute('src', 'assets/img/idoso-m.png');
                falar.innerHTML = 'Idoso';
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                imagem.setAttribute('src', 'assets/img/bebe-f.png');
                falar.innerHTML = 'Bebe';
            } else if (idade < 8) {
                imagem.setAttribute('src', 'assets/img/crianca-f.png');
                falar.innerHTML = 'Criança';
            } else if (idade < 12) {
                imagem.setAttribute('src', 'assets/img/crianca-jovem-f.png');
                falar.innerHTML = 'Criança Jovem';
            } else if (idade < 18) {
                imagem.setAttribute('src', 'assets/img/jovem-f.png');
                falar.innerHTML = 'Jovem';
            } else if (idade < 33) {
                imagem.setAttribute('src', 'assets/img/jovem-adulto-f.png');
                falar.innerHTML = 'Jovem Adulto';
            } else if (idade < 60) {
                imagem.setAttribute('src', 'assets/img/adulto-f.png');
                falar.innerHTML = 'Adulto';
            } else {
                imagem.setAttribute('src', 'assets/img/idoso-f.png');
                falar.innerHTML('Idoso');
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `${genero} com ${idade} anos.`
        resultado.appendChild(imagem);
    }
}