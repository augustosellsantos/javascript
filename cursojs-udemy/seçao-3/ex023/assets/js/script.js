function escopo () {
    const p = document.querySelector('.container p');
    const data = new Date();
    
    function getNomeDiaSemana(diaSemana) {
        const nomeDiasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        return nomeDiasSemana[diaSemana];
        /*let nomeDiaSemana;
    
        switch (diaSemana) {
            case 0:
                nomeDiaSemana = 'Domingo';
                return nomeDiaSemana;
            case 1:
                nomeDiaSemana = 'Segunda';
                return nomeDiaSemana;
            case 2:
                nomeDiaSemana = 'Terça';
                return nomeDiaSemana;
            case 3:
                nomeDiaSemana = 'Quarta';
                return nomeDiaSemana;
            case 4:
                nomeDiaSemana = 'Quinta';
                return nomeDiaSemana;
            case 5:
                nomeDiaSemana = 'Sexta';
                return nomeDiaSemana;
            case 6:
                nomeDiaSemana = 'Sábado';
                return nomeDiaSemana;
            default:
                nomeDiaSemana = '';
                return nomeDiaSemana;
        }*/
    }
    function getNomeMes(mes) {
        const nomeMeses = ['Janeiro', 'Fevereio', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return nomeMeses[mes];
        /*let nomeMes;
    
        switch (mes) {
            case 0:
                nomeMes = 'Janeiro';
                return nomeMes;
            case 1:
                nomeMes = 'Feveiro';
                return nomeMes;
            case 2:
                nomeMes = 'Março';
                return nomeMes;
            case 3:
                nomeMes = 'Abril';
                return nomeMes;
            case 4:
                nomeMes = 'Maio';
                return nomeMes;
            case 5:
                nomeMes = 'Junho';
                return nomeMes;
            case 6:
                nomeMes = 'Julho';
                return nomeMes;
            case 7:
                nomeMes = 'Agosto';
                return nomeMes;
            case 8:
                nomeMes = 'Setembro';
                return nomeMes;
            case 9:
                nomeMes = 'Outubro';
                return nomeMes;
            case 10:
                nomeMes = 'Novembro';
                return nomeMes;
            case 11:
                nomeMes = 'Dezembro';
                return nomeMes;
            default:
                nomeMes = '';
                return nomeMes;
        }*/
    }
    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    }
    function criaData(data) {
        const diaSemana = data.getDay();
        const mes = data.getMonth();
        const nomeDia = getNomeDiaSemana(diaSemana);
        const nomeMes = getNomeMes(mes);
        return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
    }
    p.innerHTML = criaData(data);
    
}
escopo();
    /*const p = document.querySelector('.container p');
    const data = new Date();
    p.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full', timeStyle: 'short'});*/