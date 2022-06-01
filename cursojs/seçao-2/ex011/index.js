// IEEE 754-2008
let numb1 = 1.6;
let numb2 = 0.2;

numb1 = ((numb1 * 100) + (numb2 * 100)) / 100;
numb1 = ((numb1 * 100) + (numb2 * 100)) / 100;

numb1 = parseFloat(numb1.toFixed(2));
console.log(numb1);
console.log(Number.isInteger(numb1));

let numb3 = 5;
let numb4 = 3.7;
let numb5 = 500;
console.log(numb3.toString() + numb4);
numb3 = numb3.toString();
console.log(typeof numb3);
console.log(numb5.toString(2));

let numb6 = 17.7795432;
console.log(numb6.toFixed(2));
console.log(Number.isInteger(numb6));

let teste = numb1 + '17';
console.log(Number.isNaN(teste));