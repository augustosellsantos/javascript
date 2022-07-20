const pontosUsuario = 777;
const nivelUsuario = pontosUsuario >= 1000 ? 'Usuário VIP' : 'Usuário nnormal';
const corUsuario = null;
const corPadrao = corUsuario || 'Verde';

console.log(nivelUsuario, corPadrao);