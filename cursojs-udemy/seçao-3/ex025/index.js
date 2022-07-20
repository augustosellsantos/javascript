for (let i = 0; i <= 50; i += 10) {
    console.log(`Linha ${i}`);
}
for (let x = 0; x <= 10; x++) {
    const par = x % 2 === 0 ? 'par' : 'ímpar';
    console.log(x, par)
}
const frutas = ['Pessego', 'Banana', 'Uva', 'Maçã', 'Laranja', 'Manga']
for (let y = 0; y < frutas.length; y++) {
    console.log(`Índice ${y}`, frutas[y]);
}