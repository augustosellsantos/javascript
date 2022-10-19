// IIFE - Immediately Invoked Function Expression
(function() {
    const time = 'Futebol Clube';
    function criaNomeTime(nome) {
        return nome + ' ' + time;
    }
    function falaNomeTime() {
        console.log(criaNomeTime('Figueirense'));
    }
    falaNomeTime();
})();