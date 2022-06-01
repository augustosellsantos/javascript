const alunos = ['Zoe', 'Augusto', 'Sofi'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[0] = 'Zac'; // Altera
alunos[3] = 'Jack'; // Adiciona
console.log(alunos);
console.log(alunos.length);

alunos.push('Julia'); // Adiciona no fim
console.log(alunos);

alunos.unshift('Felipe'); // Adiciona no inicio
console.log(alunos);

const removidos = alunos.pop();
alunos.shift();
console.log(alunos);
console.log(removidos);

console.log(alunos.slice(1, -1));
console.log(typeof alunos);
console.log(alunos instanceof Array);
console.log(alunos[30]);