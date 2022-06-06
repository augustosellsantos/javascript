const hora = 19;


if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}

const comCarro = true;
const semCarro = false;

if (semCarro) {
    console.log('Vou sair de casa!')
} else {
    console.log('Não vou sair de casa!')
}

const numb = 17;

if (numb >= 0 && numb <= 7) {
    console.log('O número está entre 0 e 7.');
} else if (numb >= 8 && numb <= 11) {
    console.log('O número está entre 8 e 11.');
} else if (numb >= 12 && numb <= 15) {
    console.log('O número está entre 12 e 15');
} else if (numb >= 16 && numb <= 19) {
    console.log('O número esta entre 16 e 19');
} else {
    console.log('O número não está entre 0 e 19.')
}