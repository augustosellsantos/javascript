// Opseradores de Comparação
const numb1 = 19;
const numb2 = 17;
const numb3 = 19;
const numb4 = '17';

const comp = numb1 > numb2;
const comp1 = numb2 > numb1;
const comp2 = numb3 >= numb1;
const comp3 = numb2 >= numb3;
const comp4 = numb2 < numb1;
const comp5 = numb2 <= numb3;
const comp6 = numb2 === numb4;
const comp7 = numb1 === numb3;
const comp8 = numb2 !== numb4;
const comp9 = numb1 !== numb3;

console.log(comp);
console.log(comp1);
console.log(comp2);
console.log(comp3);
console.log(comp4);
console.log(comp5);
console.log(comp6);
console.log(comp7);
console.log(comp8);
console.log(comp9);

// Operadores Lógicos

const expreAnd = true && true && true;
const expreAnd1 = true && true && false;
const expreOr = false || false || false;
const expreOr1 = false || true || false;
const expreNot = !false;
const expreNot1 = !true;

console.log(expreAnd);
console.log(expreAnd1);
console.log(expreOr);
console.log(expreOr1);
console.log(expreNot);
console.log(expreNot1);