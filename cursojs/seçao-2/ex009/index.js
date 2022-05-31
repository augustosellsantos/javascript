let varA = 'A'; /** B */
let varB = 'B'; /** C */
let varC = 'C'; /** A */
varA = varA;
varA = varB;
varB = varA;
varB = varC;
varC = varA;

console.log(varA, varB, varC);