const data = new Date();
const diaSemana = data.getDay();
const nomeDiaSemana = getNomeDiaSemana(diaSemana);

function getNomeDiaSemana(diaSemana) {
    let nomeDiaSemana;

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
    }
}

console.log(diaSemana, nomeDiaSemana);