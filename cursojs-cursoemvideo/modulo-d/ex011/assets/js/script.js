function escopo(){
    const mensagem = document.querySelector('.mensagem');
    const foto = document.querySelector('#foto');
    const dizer = document.querySelector('div#dizer');
    const data = new Date();
    const hora = data.getHours();
    /*function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    }
    function hora(data) {
        return `Agora são ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())} horas.`;
    }*/
    mensagem.innerHTML = `Agora são ${hora} horas.`;//hora(data);
    if (hora >= 0 && hora < 12) {
        foto.src = 'assets/img/manha.png';
        dizer.innerHTML = 'Bom dia!'
        document.body.style.background = '#dcdf53';
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'assets/img/tarde.png';
        dizer.innerHTML = 'Boa tarde!'
        document.body.style.background = '#ffa754';
    } else {
        foto.src = 'assets/img/noite.png';
        dizer.innerHTML = 'Boa noite!'
        document.body.style.background = '#302842';
    }
}
escopo();