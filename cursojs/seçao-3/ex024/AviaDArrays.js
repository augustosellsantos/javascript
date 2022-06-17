// ... operador rest -> para vizualizar o resto. ... operador spread -> para quando quiser capturar alguma coisa espalhada.
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, dois, tres, ...resto] = numeros;
const [quatro, , seis, , oito] = numeros;
console.log(um, dois, tres);
console.log(resto);
console.log(quatro, seis, oito);
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros1;
console.log(lista2);
console.log(lista3[0]);