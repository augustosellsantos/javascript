let varA = 'A'; // B
let varB = 'B'; // C 
let varC = 'C'; // A 

/** Tentei mas não consegui fazer o excicio proposto pelo professor Luiz */
/** Maneira antiga
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
*/
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);