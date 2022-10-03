function mostraHora() {
    let data = new Date();
    
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
    }
    const stop = setInterval(function () {
        console.log(mostraHora());
    }, 1000);
    setTimeout(function() {
        clearInterval(stop);
    }, 5000);
    setTimeout(function() {
        console.log('Olá mundo!');
    }, 10000);