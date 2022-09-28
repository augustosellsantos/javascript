const numb = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

for (let numeros of numb) {
    if (numeros === 15) {
        console.log('Pulei o número 15');
        continue;
    }
    if (numeros === 25) {
        console.log('Pulei o número 25');
        continue;
    }
    if (numeros === 35) {
        console.log('Encontrei o número 35, saindo!');
        break;
    }
    console.log(numeros);
}
// Continue - continua para próxima iteração
// Break - sai do laço